import Ticket from "./ticket";
import TicketFilter from "./filterButton";
import axios from "axios";
import { useState, useEffect } from "react";

export default function TicketSection() {
  // const tickets = [
  //     {
  //       id: 1,
  //       title: "Ticket 1",
  //       description: "This is the first ticket",
  //       status: "Open",
  //     },
  //     {
  //       id: 2,
  //       title: "Ticket 2",
  //       description: "This is the second ticket",
  //       status: "Open",
  //     },
  //     {
  //       id: 3,
  //       title: "Ticket 3",
  //       description: "This is the third ticket",
  //       status: "Closed",
  //     },
  //     {
  //       id: 4,
  //       title: "Ticket 4",
  //       description: "This is the fourth ticket",
  //       status: "Answered",
  //     },
  //     {
  //       id: 5,
  //       title: "Ticket 5",
  //       description: "This is the fifth ticket",
  //       status: "Closed",
  //     },
  // ];

  // get tickets from API using axios
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    axios.get("https://service-provider-apis.onrender.com/api/v1/ticket/mechanic/:id").then((response) => {
      // setTickets(response.data);
      console.log(response.data);
    });
  }, []);



  const open = tickets.filter((ticket) => ticket.status === "Open");
  const closed = tickets.filter((ticket) => ticket.status === "Closed");
  const answered = tickets.filter((ticket) => ticket.status === "Answered");

  let porcentOpen = (open.length / tickets.length) * 100;
  let porcentClosed = (closed.length / tickets.length) * 100;
  let porcentAnswered = (answered.length / tickets.length) * 100;

  return (
    <div>
      <div className="flex space-x-5 m-5 p-2 border">
        {open.length > 0 && (
          <Ticket progress={porcentOpen} status="Open" color="[#16a34a]" />
        )}
        {closed.length > 0 && (
          <Ticket progress={porcentClosed} status="Closed" color="[#dc2626]" />
        )}
        {answered.length > 0 && (
          <Ticket
            progress={porcentAnswered}
            status="Answered"
            color="[#2563eb]"
          />
        )}
        {tickets.length > 0 && (
          <Ticket progress={100} status="Total" color="[#6b7280]" />
        )}
        {open.length === 0 && closed.length === 0 && answered.length === 0 && (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#6b7280]">No tickets found</h1>
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 bg-gray-300 border m-5 p-2 space-y-2 space-x-2">
        <input
          type="text"
          placeholder="Ticket ID or Email Address or Subject"
          className="w-full h-12 col-span-3 grid-row-1 p-2"
        />
        <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
          Show All
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
        <button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
          Reset
        </button>
      </div>
      <div className="bg-gray-300 m-5 p-2 grid grid-cols-4 grid-rows-1 space-x-10">
        <div className="m-2 col-span-3">
          <p className="m-2 text-left">All Tickets</p>
        </div>
        {/* // filter button  */}
        <div className="justify-items-end m-2">
          <TicketFilter
            onChange={(filter) => console.log(`Filter changed to ${filter}`)}
          />
        </div>
      </div>
    </div>
  );
}
