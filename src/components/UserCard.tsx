import { Avatar, Typography, Card, CardContent, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { UserCardProps } from '../types/global';

const UserCard: React.FC<UserCardProps> = ({ user, onToggleFavorite }) => {
  return (
    <Card elevation={2} sx={{ borderRadius: 2, height: '100%', position: 'relative' }}>
      <IconButton 
        sx={{ 
          position: 'absolute', 
          top: 8, 
          right: 8,
          color: user.isFavorite ? 'red' : 'grey.400'
        }}
        onClick={() => onToggleFavorite(user.id)}
      >
        {user.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, py: 3 }}>
        <Avatar
          alt={user.name}
          src={user.image}
          sx={{
            width: 80,
            height: 80,
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
          }}
        />
        <Typography variant="subtitle1" component="h2" fontWeight="600">
          {user.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
