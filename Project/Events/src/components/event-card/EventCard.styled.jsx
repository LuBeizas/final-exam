import styled from 'styled-components';

export const EventCardContainer = styled.div`
  border: 1px solid #ccc,
  padding: 10px,
  margin: 10px,
  border-radius: 8px,
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1),
`;

export const EventCardContent = styled.div`
  display: flex,
  flex-direction: column,
`;

export const EventCardTitle = styled.h2`
  font-size: 18px,
  margin-bottom: 8px,
`;

export const EventCardDate = styled.p`
  font-size: 14px,
  color: #666,
  margin-bottom: 4px,
`;
