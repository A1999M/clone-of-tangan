import "./Home.scss";
import NavBar from "../../components/NavBar";
import Header from "./Header";
import StopBreath from "./StopBreath";

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
    </>
  );
}
