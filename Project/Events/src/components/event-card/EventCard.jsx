import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const tst = () => {
    navigate(`/events/${event.id}/members`);
  };

  return (
    <Card sx={{ minWidth: 275, margin: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://loremflickr.com/400/600"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={tst}>
          Members
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
