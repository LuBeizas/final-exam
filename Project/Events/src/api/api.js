export const fetchEvents = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const fetchMembers = async (id) => {
  const response = await fetch(`http://localhost:8080/events/${id}/members`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const deleteMember = async (id) => {
  const response = await fetch(`http://localhost:8080/members/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
};

export const addEvent = async (name, date) => {
  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, date }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const addMember = (eventId, firstName, lastName, email, birthDate) => {
  fetch(`http://localhost:8080/events/${eventId}/members`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firstName, lastName, email, birthDate: birthDate }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
