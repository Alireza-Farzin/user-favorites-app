import Navbar from "./components/Navbar"
import UserDirectory from "./components/UserDirectory"
import SearchBar from "./components/SearchBar"
import { Container } from "@mui/material"
import { useState } from "react"

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Search query:", query);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <SearchBar onSearch={handleSearch} />
        <UserDirectory searchQuery={searchQuery} />
      </Container>
    </>
  )
}

export default App
