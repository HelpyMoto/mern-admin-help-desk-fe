import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubmitTicket from "./pages/submit-ticket";
import TicketStatus from "./pages/ticket-status";
import UserData from "./pages/user-data";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/submitTicket" element={<SubmitTicket />} />
        <Route path="/ticketStatus" element={<TicketStatus />} />
        <Route path="/userData" element={<UserData />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;