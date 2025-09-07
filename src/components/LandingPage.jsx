import Banner from "./Banner";
import Serviços from "./Serviços";
import FeaturesNerdPrint from "./FeaturesNerdPrint";
import GoogleReviews from "./GoogleReviews";
import LocationSection from "./LocationSection";

function LandingPage() {
  return (
    <div className="flex flex-col">
      <Banner />
      <Serviços />
      <FeaturesNerdPrint />
      <GoogleReviews />
      <LocationSection />
    </div>
  );
}

export default LandingPage;
