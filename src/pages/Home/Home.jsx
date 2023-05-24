import "./Home.scss";
import NavBar from "../../components/NavBar";
import Header from "./Header";
import StopBreath from "./StopBreath";
import ImagesSection from "./ImagesSection";
import Techniques from "./Techniques";

export default function Home() {
  return (
    <>
      {/* NavBar home page */}
      <div className="container-fluid">
        <div className="row">
          <NavBar />
        </div>
      </div>
      {/* header home page */}
      <div className="container-fluid">
        <div className="row">
          <Header />
        </div>
      </div>
      {/* stop breath home page */}
      <StopBreath />
      {/* images section  home page */}
      <ImagesSection />
      {/* Techniques section home page */}
      <Techniques />
    </>
  );
}
