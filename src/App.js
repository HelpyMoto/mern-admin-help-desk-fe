import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Outlet";
import Home from "./pages/home";
import Login from "./pages/login";
import User from "./pages/user";
import Admin from "./pages/admin";
import Ticket from "./pages/ticket";
import Vendor from "./pages/vendor";
import CreateTicket from "./pages/ticket/CreateTicket";
import CreateAdmin from "./pages/admin/CreateAdmin"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* this route for admin login page  */}
          <Route path="login" element={<Login />} />

          {/* this is for dashboard (after login) */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="ticket" element={<Ticket />} />
            <Route path="ticket/new-ticket" element={<CreateTicket />} />
            <Route path="admin/new-admin" element={<CreateAdmin />} />
            <Route path="user" element={<User />} />
            <Route path="admin" element={<Admin />} />
            <Route path="vendor" element={<Vendor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
