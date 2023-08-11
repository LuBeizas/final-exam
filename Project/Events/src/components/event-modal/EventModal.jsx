import {
  ModalContent,
  StyledModal,
} from '../../pages/events-list-page/EventListPage.styled.jsx';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { addEvent } from '../../api/api.js';

export function EventModal({ isModalOpen, closeModal }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const createEvent = async () => {
    await addEvent(name, date);
    setName('');
    setDate('');
  };

  return (
    <StyledModal open={isModalOpen}>
      <ModalContent>
        <form onSubmit={createEvent}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Date"
            variant="outlined"
            fullWidth
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
