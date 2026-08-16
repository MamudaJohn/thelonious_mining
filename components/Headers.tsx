import Link from "next/link";
import logo from "@/app/favicon.ico"
import Image from "next/image";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Minerals", href: "/minerals" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Header() {
  return (
    <header className="site-header">
      <nav className="wrap nav">
        <Link href="/" className="logo">
          <Image className="logo-mark" src={logo} alt="Thelonious Mining's Logo"/>
          <span className="logo-word">
            Thelonious <span>Mining</span>
          </span>
        </Link>

        <div className="navlinks-wrap">
          <ul className="navlinks">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="nav-cta">
            Talk to us
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;