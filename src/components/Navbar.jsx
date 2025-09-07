import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate, useLocation } from "react-router-dom";

const NavbarItems = [
  { name: "services", label: "Serviços", link: "#services" },
  { name: "googleReviews", label: "Comentários", link: "#googleReviews" },
  { name: "location", label: "Contato", link: "#location" },
  { name: "shop", label: "NerdPrint Shop", link: "#shop" },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollOrNavigate = (link) => {
    if (link === "#shop") {
      window.open("https://nerdprint.shop", "_blank");
      return;
    }

    if (location.pathname !== "/") {
      // Redireciona para landing page e passa o hash como estado
      navigate("/", { state: { scrollTo: link } });
    } else {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="w-full bg-[#0d1625] shadow-md z-50 py-2">
      <div className="mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center lg:flex-row lg:items-center gap-2">
          <img
            src="./src/assets/logo3.jpg"
            alt="Logo da NerdPrint"
            className="h-20 w-auto"
          />
        </div>

        <nav className="w-full lg:w-auto">
          <ul className="flex flex-col lg:flex-row list-none justify-center items-center gap-6">
            {NavbarItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleScrollOrNavigate(item.link)}
                  className="relative text-white font-semibold text-lg lg:text-xl hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-[#c4f25c] after:transition-all after:duration-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-2 mt-4 lg:mt-0">
          <a
            href="https://wa.me/556192724881"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-2 bg-[#c4f25c] text-[#0d1625] rounded-lg font-semibold text-lg transition-all hover:bg-[#a7d64d] hover:-translate-y-1 shadow-md"
          >
            <i className="fab fa-whatsapp text-2xl " />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/nerd_printt/"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            className="text-white text-3xl hover:text-[#c4f25c] transition-colors flex items-center"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
