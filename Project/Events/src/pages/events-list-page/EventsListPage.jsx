import { useEffect, useState } from 'react';
import { fetchEvents } from '../../api/api';
import EventCard from '../../components/event-card/EventCard';
import {
  EventListContainer,
  ActionsContainer,
} from './EventListPage.styled.jsx';
import { EventModal } from '../../components/event-modal/EventModal.jsx';
import { Button } from '@mui/material';

const EventsListPage = () => {
  const [eventList, setEventList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getEvents = async () => {
    const data = await fetchEvents();
    setEventList(data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <ActionsContainer>
        <Button onClick={openModal}>Add Event</Button>
        <EventModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          test={getEvents}
        ></EventModal>
      </ActionsContainer>
      <EventListContainer>
        {eventList.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </EventListContainer>
    </>
  );
};

export default EventsListPage;
