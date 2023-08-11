import { useParams } from 'react-router-dom';
import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { deleteMember, fetchMembers } from '../../api/api.js';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { MemberModal } from '../../components/member-modal/MemberModal.jsx';
import { StyledListItem } from './MemberPage.styled.jsx';
import { ActionsContainer } from '../events-list-page/EventListPage.styled.jsx';

const MembersPage = () => {
  const params = useParams();
  const [memberList, setMemberList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getMembers = async () => {
    const data = await fetchMembers(params.id);
    setMemberList(data);
  };

  const removeMember = async (id) => {
    await deleteMember(id);
    await getMembers();
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <>
      <ActionsContainer>
        <Button onClick={openModal}>Add member</Button>
      </ActionsContainer>

      <MemberModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        eventId={params.id}
      ></MemberModal>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {memberList.map((member) => (
          <StyledListItem
            key={member.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => removeMember(member.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${member.firstName} ${member.lastName}`}
              secondary={`${member.birthDate} ${member.email}`}
            />
          </StyledListItem>
        ))}
      </List>
    </>
  );
};

export default MembersPage;
