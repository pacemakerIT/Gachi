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

interface NewUser {
  id: number;
  name: string;
  isMentor: boolean;
  email: string;
  phone: string;
  program: string;
  linkedin: string;
  location: string;
}

interface NewUserDialogProps {
  open: boolean;
  onClose: () => void;
  onAddUser: (user: NewUser) => void;
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
    name: '',
    isMentor: false,
    email: '',
    phone: '',
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
    onAddUser(newUser);
    setNewUser({
      id: nextUserId + 1,
      name: '',
      isMentor: false,
      email: '',
      phone: '',
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
          label="Name"
          margin="normal"
          value={newUser.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
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
        <FormControlLabel
          control={
            <Checkbox
              checked={!newUser.isMentor}
              onChange={(e) => handleInputChange('isMentor', !e.target.checked)}
            />
          }
          label="Mentee"
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
          label="Phone Number"
          margin="normal"
          value={newUser.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
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
