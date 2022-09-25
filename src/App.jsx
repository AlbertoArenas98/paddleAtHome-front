import Navbar from "./components/navbar/Navbar";
import { Outlet } from 'react-router-dom'
import Home from "./pages/homePage/Home";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;