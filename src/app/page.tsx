
import {NavbarComponent} from "../components/NavbarComponent";
import {CarousalComponent} from "../components/CarousalComponent";
import StatsSection from "../components/StatsSection";
import PlotLandComponentCompleted from "components/PlotLandComponentCompleted";
import PlotLandComponent from "components/PlotLandComponent";
import MeetTheTeam from "components/MeetTheTeam";

export default function Home() {
  return (
    <div className="relative">
        <div className="navbar w-full  bg-slate-500">
          <NavbarComponent />
        </div>
        <div className="home-carousal">
          <CarousalComponent/>
        </div>
      <div className="stats-section">
        <StatsSection/>
      </div>
      <div className="property-plot-card-section">
        <PlotLandComponentCompleted/>
      </div>
      <div className="property-plot-card-section">
        <PlotLandComponent/>
      </div>
      {/* <div className="property-residential-card-section">
        < ResidentialSectionComponent/>
      </div> */}
      {/* <div className="property-commercial-card-section">
        < CommercialSectionComponent/>
      </div> */}
      <div className="meet-the-team">
        <MeetTheTeam/>
      </div>
    </div>
  );
}