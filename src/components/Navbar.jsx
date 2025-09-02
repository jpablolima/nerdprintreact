import "@fortawesome/fontawesome-free/css/all.min.css";

const NavbarItems = [
  {
    name: "services",
    label: "Serviços",
    link: "#services",
  },
  {
    name: "testimonials",
    label: "Depoimentos",
    link: "#testimonials",
  },
  {
    name: "location",
    label: "Contato",
    link: "#location",
  },
  {
    name: "shop",
    label: "NerdPrint Shop",
    link: "https://nerdprint.shop",
  },
];
function Navbar() {
  return (
    <header className="sticky w-screen bg-[#0d1625] shadow-md z-50 py-1">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center flex-wrap">
        <div className="flex items-center">
          <img
            src="./src/assets/logo3.jpg"
            alt="Logo da NerdPrint"
            className="h-28 w-auto"
          />
        </div>

        <nav className="text-right mx-2">
          <ul className="flex list-none justify-center gap-8">
            {NavbarItems.map((item) => (
              <li>
                <a
                  href={item.link}
                  className="relative text-white font-semibold text-xl hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-[#c4f25c] after:transition-all after:duration-300"
                  target={item.name === "shop" ? "_blank" : "_self"}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4 ">
          <a
            href="https://www.instagram.com/nerd_printt/"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
            className="text-white text-4xl hover:text-[#c4f25c] transition-colors"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://wa.me/556192724881"
            target="_blank"
            rel="noreferrer"
            className=" inline-flex items-center gap-2 bg-[#c4f25c] text-[#0d1625] rounded-full font-semibold text-lg transition-all hover:bg-[#a7d64d] hover:-translate-y-1 shadow-md"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
            Chat no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
