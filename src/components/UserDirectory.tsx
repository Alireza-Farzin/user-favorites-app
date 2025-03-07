import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import UserCard from './UserCard';
import { UserDirectoryProps, UserType } from '../types/global';
import { useGetUsersQuery } from '../redux/api/usersApi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/slices/favoritesSlice';
import { RootState } from '../redux/store';

const UserDirectory: React.FC<UserDirectoryProps> = ({ searchQuery }) => {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items || []);

  useEffect(() => {
    if (users) {
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );


      setFilteredUsers(
        filtered.map(user => ({
          ...user,
          isFavorite: Array.isArray(favorites)
            ? favorites.some(fav => fav.id === user.id)
            : false
        }))
      );
    }
  }, [users, searchQuery, favorites]);

  const handleToggleFavorite = (userId: string) => {
    const user = users?.find(u => u.id === userId);
    if (user) {
      dispatch(toggleFavorite(user));
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred while fetching users</div>;

  return (
    <Box className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5" sx={{margin:'50px'}} >
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