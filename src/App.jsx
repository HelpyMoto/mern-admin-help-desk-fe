import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import MyTicket from "./pages/myTickets";
import SubmitTicket from "./pages/submitTicket";
import TicketStatus from "./pages/ticketStatus";
import UserData from "./pages/userData";
import Error from "./pages/error";
import Login from "./pages/login";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./context/protectedRoutes";
import CreateAdminUser from "./pages/signup";
import ManageAdminUser from "./pages/manage-admin-ser";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/createAdminUser"
            element={
              <ProtectedRoute component={CreateAdminUser} adminOnly={true} managerOnly={false} />
            }
          />
          <Route
            path="/manageAdminUser"
            element={
              <ProtectedRoute component={ManageAdminUser} adminOnly={true} managerOnly={false} />
            }
          />
          <Route
            path="/myTickets"
            element={
              <ProtectedRoute
                component={MyTicket}
                adminOnly={true}
                managerOnly={true}
              />
            }
          />
          <Route
            path="/submitTicket"
            element={
              <ProtectedRoute
                component={SubmitTicket}
                adminOnly={true}
                managerOnly={true}
              />
            }
          />
          <Route
            path="/ticketStatus"
            element={
              <ProtectedRoute
                component={TicketStatus}
                adminOnly={true}
                managerOnly={true}
              />
            }
          />
          <Route
            path="/userData"
            element={
              <ProtectedRoute
                component={UserData}
                adminOnly={true}
                managerOnly={true}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                component={Dashboard}
                adminOnly={true}
                managerOnly={true}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
