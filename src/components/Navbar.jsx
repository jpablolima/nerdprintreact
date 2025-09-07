import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavbarItems = [
  { name: "services", label: "Serviços", link: "#services" },
  { name: "googleReviews", label: "Avaliações", link: "#googleReviews" },
  { name: "location", label: "Contato", link: "#location" },
  { name: "shop", label: "NerdPrint Shop", link: "#shop" },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollOrNavigate = (link) => {
    if (link === "#shop") {
      window.open("https://nerdprint.shop", "_blank");
      return;
    }

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: link } });
    } else {
      const element = document.querySelector(link);
      if (element) {
        const navbar = document.querySelector("header");
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  // Variants para Framer Motion (menu mobile)
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <header className="fixed w-full bg-[#0d1625] shadow-md z-50">
      <div className="mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src="./src/assets/logo3.jpg"
            alt="Logo da NerdPrint"
            className="h-12 w-auto"
          />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-6 items-center">
            {NavbarItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleScrollOrNavigate(item.link)}
                  className="relative text-white font-medium text-lg hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-[#c4f25c] after:transition-all after:duration-300 cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ações desktop */}
        <div className="hidden lg:flex gap-3 items-center">
          <a
            href="https://wa.me/556192724881"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-1 bg-[#c4f25c] text-[#0d1625] rounded-lg font-semibold text-sm transition-all hover:bg-[#a7d64d] shadow-md cursor-pointer"
          >
            <i className="fab fa-whatsapp text-lg" />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/nerd_printt/"
            target="_blank"
            rel="noreferrer"
            className="text-white text-2xl hover:text-[#c4f25c] transition-colors cursor-pointer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Botão hambúrguer mobile */}
        <button
          className="lg:hidden flex flex-col justify-between w-6 h-6 relative cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-full bg-white origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-full bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-full bg-white origin-center"
          />
        </button>
      </div>

      {/* Menu mobile animado com Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="lg:hidden bg-[#0d1625] shadow-md flex flex-col items-center gap-6 py-6"
          >
            <ul className="flex flex-col items-center gap-6">
              {NavbarItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleScrollOrNavigate(item.link)}
                    className="text-white text-lg font-medium cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 mt-4">
              <a
                href="https://wa.me/556192724881"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1 bg-[#c4f25c] text-[#0d1625] rounded-lg font-semibold text-sm hover:bg-[#a7d64d] shadow-md cursor-pointer"
              >
                <i className="fab fa-whatsapp text-lg" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/nerd_printt/"
                target="_blank"
                rel="noreferrer"
                className="text-white text-2xl hover:text-[#c4f25c] cursor-pointer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
