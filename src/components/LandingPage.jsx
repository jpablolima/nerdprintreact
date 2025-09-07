import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Banner from "./Banner";
import Serviços from "./Serviços";
import FeaturesNerdPrint from "./FeaturesNerdPrint";
import GoogleReviews from "./GoogleReviews";
import LocationSection from "./LocationSection";

function LandingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          const navbar = document.querySelector("header");
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY - navbarHeight;

          window.scrollTo({ top: elementPosition, behavior: "smooth" });

          navigate(location.pathname, { replace: true, state: {} });
        }, 50);
      }
    }
  }, [location, navigate]);

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
