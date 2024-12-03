'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
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
  const [isNotificationOpen, setIsNotificationOpen] = useState(false); // Notification dialog state
  const textFieldRef = useRef<HTMLTextAreaElement | null>(null); // Create a ref for the text field

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    if (isUnsaved) {
      setIsNotificationOpen(true); // Open notification dialog
      return;
    }
    setIsDialogOpen(false);
    setTempNote(note); // Reset temp note to saved state
  };

  const handleNoteSubmit = () => {
    console.log(`Note for user ${userId}:`, tempNote);
    setNote(tempNote);
    setIsUnsaved(false);
    setIsDialogOpen(false);
  };

  const handleNoteChange = (value: string) => {
    const formattedValue = value.replace(/\n/g, ' '); // Replace newlines with spaces
    if (formattedValue.length <= 400) {
      setTempNote(formattedValue);
      setIsUnsaved(formattedValue !== note); // Track unsaved changes
    }
  };

  const handleNotificationClose = () => {
    setIsNotificationOpen(false); // Close the notification dialog
  };

  const handleSaveAndExit = () => {
    handleNoteSubmit(); // Save and close main dialog
    handleNotificationClose(); // Close notification dialog
  };

  const handleExitWithoutSave = () => {
    setTempNote(note); // Revert to the saved state
    setIsUnsaved(false); // Reset unsaved state
    setIsDialogOpen(false); // Close main dialog
    handleNotificationClose(); // Close notification dialog
  };

  useEffect(() => {
    if (textFieldRef.current) {
      const element = textFieldRef.current;
      element.style.height = 'auto'; // Reset height to prevent overflow
      const maxHeight = 120; // Maximum height for the text field
      element.style.height = `${Math.min(element.scrollHeight, maxHeight)}px`; // Limit height
      element.scrollTop = 0; // Reset scroll to the top
    }
  }, [tempNote, isDialogOpen]);

  return (
    <>
      <IconButton onClick={handleDialogOpen}>
        <NoteAltOutlinedIcon />
      </IconButton>

      {/* Main Dialog */}
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
            gap: 2,
            px: 3, // Reduced horizontal padding
            py: 2,
          }}
        >
          {/* Saved Notes Section */}
          <Box
            sx={{
              backgroundColor: '#EDF2F6',
              borderRadius: '8px',
              padding: 2,
              maxHeight: '200px', // Enforce max height
              overflowY: 'scroll', // Enable scrolling
              wordBreak: 'break-word',
              '&::-webkit-scrollbar': {
                display: 'none', // Hide scrollbar
              },
              scrollbarWidth: 'none', // Hide scrollbar in Firefox
            }}
          >
            <Typography
              sx={{
                whiteSpace: 'pre-wrap', // Preserve line breaks
                wordBreak: 'break-word',
              }}
            >
              {note || 'No note available.'}
            </Typography>
          </Box>

          {/* Note Input Section */}
          <TextField
            inputRef={textFieldRef}
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
            variant="standard"
            placeholder="Write your note here..."
            inputProps={{
              maxLength: 400,
              style: {
                resize: 'none',
                overflowY: 'scroll', // Enable scrolling
                boxSizing: 'border-box',
                maxHeight: '200px', // Enforce max height
              },
            }}
            InputProps={{
              disableUnderline: true,
              style: {
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '10px 16px',
                margin: '0 4px',
              },
            }}
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none', // Hide the scrollbar (Webkit browsers)
              },
              scrollbarWidth: 'none', // Hide the scrollbar (Firefox)
            }}
          />

          {/* Character Counter */}
          <Typography
            sx={{
              textAlign: 'right',
              fontSize: '12px',
              color: '#757575',
              pr: 1, // Adjusted right padding
            }}
          >
            {tempNote.length}/400
          </Typography>
        </DialogContent>
      </Dialog>

      {/* Notification Dialog */}
      <Dialog
        open={isNotificationOpen}
        onClose={handleNotificationClose}
        PaperProps={{
          sx: {
            borderRadius: '16px', // Rounded edges for the dialog
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            backgroundColor: '#EDF2F6',
            borderRadius: '16px 16px 0 0', // Match dialog's rounded top edges
          }}
        >
          저장되지 않은 변경 사항이 있습니다.
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: '#EDF2F6',
            textAlign: 'center',
            py: 3, // Add padding for better spacing
          }}
        ></DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center', // Center the buttons
            gap: 2, // Add spacing between buttons
            backgroundColor: '#EDF2F6',
            borderRadius: '0 0 16px 16px', // Match dialog's rounded bottom edges
            py: 2, // Add padding for better spacing
          }}
        >
          {/* Blue Button: Save and Exit */}
          <Button
            onClick={handleSaveAndExit}
            sx={{
              backgroundColor: '#2986FE',
              color: 'white',
              borderRadius: '8px', // Reduced roundness
              px: 3, // Padding for larger clickable area
              '&:hover': {
                backgroundColor: '#1c6dd0', // Darker shade on hover
              },
            }}
          >
            저장하고 나가기
          </Button>

          {/* Red Button: Exit Without Save */}
          <Button
            onClick={handleExitWithoutSave}
            sx={{
              backgroundColor: '#FF4D4D',
              color: 'white',
              borderRadius: '8px', // Reduced roundness
              px: 3, // Padding for larger clickable area
              '&:hover': {
                backgroundColor: '#E63939', // Darker shade on hover
              },
            }}
          >
            저장하지 않고 나가기
          </Button>

          {/* Red Button: Cancel */}
          <Button
            onClick={handleNotificationClose}
            sx={{
              backgroundColor: '#FF4D4D',
              color: 'white',
              borderRadius: '8px', // Reduced roundness
              px: 3, // Padding for larger clickable area
              '&:hover': {
                backgroundColor: '#E63939', // Darker shade on hover
              },
            }}
          >
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MemoDialog;
