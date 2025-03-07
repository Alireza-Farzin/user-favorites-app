import React, { useState } from 'react';
import { Box } from '@mui/material';
import avatar from '../assets/icosn/1_PiHoomzwh9Plr9_GA26JcA.png';
import UserCard from './UserCard';
import { UserDirectoryProps, UserType } from '../types/global';


const initialUsers: UserType[] = [
  { id: 1, name: 'Eduardo Strosin', image: avatar, isFavorite: false },
  { id: 2, name: 'Jane Doe', image: avatar, isFavorite: false },
];

const UserDirectory: React.FC<UserDirectoryProps> = ({ searchQuery }) => {
  const [users, setUsers] = useState<UserType[]>(initialUsers);

  const handleToggleFavorite = (id: number): void => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, isFavorite: !user.isFavorite } : user
    ));
  };


  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {filteredUsers.map((user) => (
        <UserCard 
          key={user.id} 
          user={user} 
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </Box>
  );
};

export default UserDirectory;
