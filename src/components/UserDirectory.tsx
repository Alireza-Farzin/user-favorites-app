import React, { useState } from 'react';
import Container from '@mui/material/Container';
import {  Typography, Box } from '@mui/material';

import avatar from '../assets/icosn/1_PiHoomzwh9Plr9_GA26JcA.png';
import UserCard from './UserCard';

const initialUsers: UserType[] = [
  { id: 1, name: 'Eduardo Strosin', image: avatar, isFavorite: false },

];


const UserDirectory: React.FC = () => {
  const [users, setUsers] = useState<UserType[]>(initialUsers);

  const handleToggleFavorite = (id: number): void => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, isFavorite: !user.isFavorite } : user
    ));
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          User Directory
        </Typography>
      </Box>
      
      <Box className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {users.map((user) => (
          <UserCard 
            key={user.id} 
            user={user} 
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </Box>
    </Container>
  );
};

export default UserDirectory;