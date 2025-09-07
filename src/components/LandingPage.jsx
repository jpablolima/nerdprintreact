import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Banner from "./Banner";
import Serviços from "./Serviços";
import FeaturesNerdPrint from "./FeaturesNerdPrint";
import GoogleReviews from "./GoogleReviews";
import LocationSection from "./LocationSection";

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);

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
