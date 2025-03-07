import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className='py-1 flex flex-col items-center justify-center gap-5'>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          User Directory
        </Typography>
      </Box>

      <Paper
        component="form"
        sx={{ p: '5px 4px', display: 'flex', alignItems: 'center', maxWidth: 600, width: '100%', borderRadius: '40px' }}
      >

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search users"
          inputProps={{ 'aria-label': 'Search users' }}
          value={searchTerm}
          onChange={handleSearch}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
