import { useSelector } from 'react-redux';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import { RootState } from './redux/store';

const FavoritesPage: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites.items || []);
  
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Favorite Users
      </Typography>
      {favorites.length === 0 ? (
        <Typography>No favorites yet!</Typography>
      ) : (
        <Box className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {favorites.map((user) => (
            <Card key={user.id} elevation={2} sx={{ borderRadius: 2, height: '100%', position: 'relative' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, py: 3 }}>
                <Avatar
                  alt={user.name}
                  src={user.image}
                  sx={{
                    width: 80,
                    height: 80,
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Typography variant="subtitle1" component="h2" fontWeight="600">
                  {user.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FavoritesPage;