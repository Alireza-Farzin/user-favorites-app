import Navbar from "./components/Navbar";
import UserDirectory from "./components/UserDirectory";
import SearchBar from "./components/SearchBar";

import { Container } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import FavoritesPage from "./FavoritesPage";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Navbar />
      <Container maxWidth="xl" >
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<UserDirectory searchQuery={searchQuery} />} />
          <Route path="/favorites" element={<FavoritesPage />} />=
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
