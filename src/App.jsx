import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import MyTicket from "./pages/myTickets";
import EnterTicket from "./pages/enterTicket";
import Login from "./pages/login";
import Signup from "./pages/signup";
import TicketStatus from "./pages/ticketStatus";
import UserData from "./pages/userData";
import Error from "./pages/error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/myTickets" element={<MyTicket />} />
        <Route path="/enterTicket" element={<EnterTicket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ticketStatus" element={<TicketStatus />} />
        <Route path="/userData" element={<UserData />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
