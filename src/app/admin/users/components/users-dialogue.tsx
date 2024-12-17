import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

// Shared User and NewUser Types
export interface NewUser {
  id: number;
  firstName: string;
  lastName: string;
  isMentor: boolean;
  email: string;
  program: string;
  linkedin: string;
  location: string;
}

export interface User extends NewUser {
  matchStatus: 'Unmatched' | 'Matched'; // Correct union type
}

interface NewUserDialogProps {
  open: boolean;
  onClose: () => void;
  onAddUser: (user: User) => void;
  nextUserId: number;
}

const NewUserDialog: React.FC<NewUserDialogProps> = ({
  open,
  onClose,
  onAddUser,
  nextUserId,
}) => {
  const [newUser, setNewUser] = useState<NewUser>({
    id: nextUserId,
    firstName: '',
    lastName: '',
    isMentor: false,
    email: '',
    program: '',
    linkedin: '',
    location: '',
  });

  const handleInputChange = (field: keyof NewUser, value: string | boolean) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const handleAdd = () => {
    const user: User = {
      ...newUser,
      matchStatus: 'Unmatched', // Assign default value
    };
    onAddUser(user);
    setNewUser({
      id: nextUserId + 1,
      firstName: '',
      lastName: '',
      isMentor: false,
      email: '',
      program: '',
      linkedin: '',
      location: '',
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New User</DialogTitle>
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
        <FormControlLabel
          control={
            <Checkbox
              checked={newUser.isMentor}
              onChange={(e) => handleInputChange('isMentor', e.target.checked)}
            />
          }
          label="Mentor"
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
          label="Program"
          margin="normal"
          value={newUser.program}
          onChange={(e) => handleInputChange('program', e.target.value)}
        />
        <TextField
          fullWidth
          label="LinkedIn"
          margin="normal"
          value={newUser.linkedin}
          onChange={(e) => handleInputChange('linkedin', e.target.value)}
        />
        <TextField
          fullWidth
          label="Location"
          margin="normal"
          value={newUser.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
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
