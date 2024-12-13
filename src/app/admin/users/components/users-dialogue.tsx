import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';

interface NewUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  location: string;
  program: string;
  matchStatus: 'Matched' | 'Unmatched';
}

interface NewUserDialogProps {
  open: boolean; // Changed from isOpen to open
  onClose: () => void;
  onAddUser: (user: NewUser) => void;
  nextUserId: number;
}

const NewUserDialog: React.FC<NewUserDialogProps> = ({
  open, // Changed from isOpen to open
  onClose,
  onAddUser,
  nextUserId,
}) => {
  const [newUser, setNewUser] = useState<NewUser>({
    id: nextUserId,
    firstName: '',
    lastName: '',
    email: '',
    linkedin: '',
    location: '',
    program: '',
    matchStatus: 'Unmatched',
  });

  const handleInputChange = (field: keyof NewUser, value: string) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const handleAdd = () => {
    onAddUser(newUser);
    setNewUser({
      id: nextUserId + 1,
      firstName: '',
      lastName: '',
      email: '',
      linkedin: '',
      location: '',
      program: '',
      matchStatus: 'Unmatched',
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      {/* Updated prop */}
      <DialogTitle>New User</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="First Name"
          margin="normal"
          value={newUser.firstName}
          onChange={(e) => handleInputChange('firstName', e.target.value)}
        />
        <TextField
          fullWidth
          label="Last Name"
          margin="normal"
          value={newUser.lastName}
          onChange={(e) => handleInputChange('lastName', e.target.value)}
        />
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={newUser.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        <TextField
          fullWidth
          label="LinkedIn"
          margin="normal"
          value={newUser.linkedin}
          onChange={(e) => handleInputChange('linkedin', e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAdd} variant="contained" color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewUserDialog;
