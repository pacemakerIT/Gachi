'use client';

import React, { useState } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

interface MemoDialogProps {
  userId: number;
  initialNote: string;
}

const MemoDialog: React.FC<MemoDialogProps> = ({ userId, initialNote }) => {
  const [note, setNote] = useState(initialNote); // Track the note
  const [tempNote, setTempNote] = useState(initialNote); // Temporary state for edits
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUnsaved, setIsUnsaved] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    if (isUnsaved) {
      if (!window.confirm('You still have unsaved notes. Continue?')) return;
    }
    setIsDialogOpen(false);
    setTempNote(note); // Reset temp note to saved state
    setIsUnsaved(false);
  };

  const handleNoteSubmit = () => {
    console.log(`Note for user ${userId}:`, tempNote);
    setNote(tempNote);
    setIsUnsaved(false);
    setIsDialogOpen(false);
  };

  const handleNoteChange = (value: string) => {
    if (value.length <= 400) {
      setTempNote(value);
      setIsUnsaved(value !== note); // Track unsaved changes
    }
  };

  return (
    <>
      <IconButton onClick={handleDialogOpen}>
        <NoteAltOutlinedIcon />
      </IconButton>
      <Dialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px', // Rounded edges for the dialog
          },
        }}
      >
        {/* Dialog Header */}
        <Box
          sx={{
            backgroundColor: '#2986FE',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
            py: 1,
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px', // Rounded corners for the top header
          }}
        >
          <Typography sx={{ color: 'white', fontWeight: 'bold' }}>
            유저노트
          </Typography>
          <IconButton onClick={handleDialogClose} sx={{ color: 'white' }}>
            <ClearOutlinedIcon />
          </IconButton>
        </Box>
        {/* Dialog Content */}
        <DialogContent
          sx={{
            backgroundColor: '#EDF2F6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end', // Align saved note and input correctly
            height: '300px', // Adjust dialog height to maintain balance
            gap: 2,
            p: 2,
          }}
        >
          {/* Saved Notes Section */}
          <Box
            sx={{
              backgroundColor: '#EDF2F6', // Same background color
              borderRadius: '8px',
              padding: 2,
              flex: 1, // Allow the saved note section to grow
              overflowY: 'hidden', // Hide scrolling for notes
              minHeight: '100px', // Minimum height for the saved notes area
            }}
          >
            <Typography
              sx={{
                whiteSpace: 'pre-wrap', // Ensure long notes wrap to the next line
                wordBreak: 'break-word', // Break words if they're too long
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 6, // Limit preview to 6 lines
                WebkitBoxOrient: 'vertical',
              }}
            >
              {note || 'No note available.'}
            </Typography>
          </Box>
          {/* Note Input Section */}
          <TextField
            value={tempNote}
            onChange={(e) => handleNoteChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleNoteSubmit();
              }
            }}
            multiline
            fullWidth
            rows={1} // Start with 1 visible row
            variant="standard"
            placeholder="Write your note here..."
            inputProps={{
              maxLength: 400,
              style: {
                overflow: 'hidden', // Hide visible scrollbar
                resize: 'none', // Prevent resizing
              },
            }}
            InputProps={{
              disableUnderline: true, // Remove the underline
              style: {
                backgroundColor: 'white',
                borderRadius: '16px', // Rounded edges
                padding: '8px 16px',
                maxHeight: '120px', // Limit height to approximately 3 rows
                overflow: 'hidden', // Hide scrollbar
              },
            }}
            sx={{
              border: 'none', // No border for the text field
            }}
          />
          {/* Character Counter */}
          <Typography
            sx={{
              textAlign: 'right',
              fontSize: '12px',
              color: '#757575',
            }}
          >
            {tempNote.length}/400
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MemoDialog;

//code below is a potential replacement.

//'use client';
//
//import React, { useState } from 'react';
//import {
//  Box,
//  Dialog,
//  DialogContent,
//  IconButton,
//  TextField,
//  Typography,
//  Button,
//  Stack,
//} from '@mui/material';
//import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
//import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
//
//interface MemoDialogProps {
//  userId: number;
//  initialNote: string;
//}
//
//const MemoDialog: React.FC<MemoDialogProps> = ({ userId, initialNote }) => {
//  const [note, setNote] = useState(initialNote); // Track the note
//  const [tempNote, setTempNote] = useState(initialNote); // Temporary state for edits
//  const [isDialogOpen, setIsDialogOpen] = useState(false);
//  const [isUnsaved, setIsUnsaved] = useState(false);
//
//  const handleDialogOpen = () => {
//    setIsDialogOpen(true);
//  };
//
//  const handleDialogClose = () => {
//    if (isUnsaved) {
//      // Do nothing, keep the dialog open if there are unsaved changes
//      return;
//    }
//    setIsDialogOpen(false);
//    setTempNote(note); // Reset temp note to saved state
//    setIsUnsaved(false);
//  };
//
//  const handleNoteSubmit = () => {
//    // Simulate saving the note (you can replace this with an API call)
//    console.log(`Note for user ${userId}:`, tempNote);
//    setNote(tempNote);
//    setIsUnsaved(false);
//    setIsDialogOpen(false);
//  };
//
//  const handleNoteChange = (value: string) => {
//    setTempNote(value);
//    setIsUnsaved(value !== note); // Track unsaved changes
//  };
//
//  return (
//    <>
//      <IconButton onClick={handleDialogOpen}>
//        <NoteAltOutlinedIcon />
//      </IconButton>
//      <Dialog
//        open={isDialogOpen}
//        fullWidth
//        PaperProps={{
//          sx: {
//            borderRadius: '16px', // Rounded edges for the dialog
//          },
//        }}
//      >
//        {/* Dialog Header */}
//        <Box
//          sx={{
//            backgroundColor: '#2986FE',
//            display: 'flex',
//            alignItems: 'center',
//            justifyContent: 'space-between',
//            px: 2,
//            py: 1,
//            borderTopLeftRadius: '16px',
//            borderTopRightRadius: '16px', // Rounded corners for the top header
//          }}
//        >
//          <Typography sx={{ color: 'white', fontWeight: 'bold' }}>
//            유저노트
//          </Typography>
//          <IconButton onClick={handleDialogClose} sx={{ color: 'white' }}>
//            <ClearOutlinedIcon />
//          </IconButton>
//        </Box>
//        {/* Dialog Content */}
//        <DialogContent
//          sx={{
//            backgroundColor: '#EDF2F6',
//            display: 'flex',
//            flexDirection: 'column',
//            height: '300px', // Adjust dialog height to maintain balance
//            gap: 2,
//            p: 2,
//          }}
//        >
//          {/* Saved Notes Section */}
//          <Box
//            sx={{
//              backgroundColor: '#EDF2F6', // Same background color
//              borderRadius: '8px',
//              padding: 2,
//              flex: 1, // Allow the saved note section to grow
//              overflowY: 'auto',
//              minHeight: '100px', // Minimum height for the saved notes area
//            }}
//          >
//            <Typography>{note || 'No note available.'}</Typography>
//          </Box>
//
//          {/* Note Input Section */}
//          <TextField
//            value={tempNote}
//            onChange={(e) => handleNoteChange(e.target.value)}
//            onKeyDown={(e) => {
//              if (e.key === 'Enter') {
//                e.preventDefault();
//                handleNoteSubmit();
//              }
//            }}
//            multiline
//            fullWidth
//            rows={1} // Single line
//            variant="standard"
//            placeholder="Write your note here..."
//            InputProps={{
//              disableUnderline: true, // Remove the underline
//              style: {
//                backgroundColor: 'white',
//                borderRadius: '16px', // Rounded edges for left and right
//                padding: '8px 16px',
//              },
//            }}
//            sx={{
//              border: 'none', // No border for the text field
//              minHeight: '40px', // Minimum height to maintain balance
//            }}
//          />
//
//          {/* Inline Warning */}
//          {isUnsaved && (
//            <Typography
//              sx={{
//                color: '#FF0000',
//                textAlign: 'center',
//                fontSize: '14px',
//                marginTop: '8px',
//              }}
//            >
//              You have unsaved changes!
//            </Typography>
//          )}
//
//          {/* Action Buttons */}
//          <Stack direction="row" spacing={2} justifyContent="flex-end">
//            <Button
//              onClick={handleDialogClose}
//              variant="outlined"
//              sx={{ borderRadius: '16px' }}
//            >
//              Cancel
//            </Button>
//            <Button
//              onClick={handleNoteSubmit}
//              variant="contained"
//              sx={{ borderRadius: '16px' }}
//            >
//              Save
//            </Button>
//          </Stack>
//        </DialogContent>
//      </Dialog>
//    </>
//  );
//};
//
//export default MemoDialog;
