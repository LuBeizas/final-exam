import {
  ModalContent,
  StyledModal,
} from '../../pages/events-list-page/EventListPage.styled.jsx';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { addMember } from '../../api/api.js';

export function MemberModal({ isModalOpen, closeModal, eventId }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const createMember = () => {
    addMember(eventId, name, lastName, email, birthDate);
    setName('');
    setLastName('');
    setEmail('');
    setBirthDate('');
  };

  return (
    <StyledModal open={isModalOpen}>
      <ModalContent>
        <form onSubmit={createMember}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Phone number"
            variant="outlined"
            fullWidth
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
          <Button onClick={closeModal}>Close Modal</Button>
        </form>
      </ModalContent>
    </StyledModal>
  );
}
