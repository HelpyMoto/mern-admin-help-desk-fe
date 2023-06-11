import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubmitTicket from "./pages/submit-ticket";
import TicketStatus from "./pages/ticket-status";
import UserData from "./pages/user-data";
import Login from "./pages/login";
import Cleaner from  "./pages/cleaner";
import Mechanic from "./pages/mechanic";
import Driver from "./pages/driver";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/submitTicket" element={<SubmitTicket />} />
        <Route path="/ticketStatus" element={<TicketStatus />} />
        <Route path="/userData" element={<UserData />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cleaner" element={<Cleaner />} />
        <Route path="/mechanic" element={<Mechanic />} />
        <Route path="/driver" element={<Driver />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App;