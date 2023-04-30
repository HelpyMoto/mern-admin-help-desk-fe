import SideNav from "../components/sideNav";
import CardSection from "../components/cardSection";

export default function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-1 gap-2 px-5 ">
        <div className="grid-row-1">
          <SideNav />
        </div>
        <div className="grid-row-1 col-span-2">
          <CardSection />
        </div>
      </div>
    </div>
  );
}
