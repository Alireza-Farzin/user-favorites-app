import Navbar from "./components/Navbar"
import UserDirectory from "./components/UserDirectory"


const App = () => {
  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <h1 className="text-6xl font-black py-5 text-center ">List of users</h1>
      <UserDirectory />
    </div>
  )
}

export default App
