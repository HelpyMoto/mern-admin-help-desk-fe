import Card from "../components/card";

const cardData = [
  {
    heading: "Submit Ticket",
    data: "Submit Ticket",
    buttonName: "Submit Ticket",
    link: "/enterTicket",
  },
  {
    heading: "My Tickets",
    data: "View all Tickets that are created",
    buttonName: "My Tickets",
    link: "/myTickets",
  },
  {
    heading: "Ticket Status",
    data: "View the Status of all Tickets",
    buttonName: "Ticket Status",
    link: "/ticketStatus",
  },
];

export default function CardSection() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 mt-10 border p-5 w-100">
        {cardData.map((card, index) => {
          return (
            <div key={index} className="grid-row-1">
              <Card heading={card.heading} data={card.data} buttonName={card.buttonName} link={card.link} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
