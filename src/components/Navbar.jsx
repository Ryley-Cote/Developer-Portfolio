import {Link, NavLink} from "react-dom";
import {projects} from ".../data/projects.js";
import {useMemo, useState} from "react";

export const Navbar = () => {
    const featured = useMemo(() => projects.filter((p) => p.featured), []);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinkClass = ({isActive}) =>
        "nav-link" + (isActive ? " active" : "");

    const closeMobile = () => {
        setMobileOpen(false);
        setOpenDropdown(null);
    };

    return (
        <header className="nav">
            <div className="nav-inner container">
                <Link to="/" className="brand" onClick={closeMobile}>
                    Ryley Cote
                </Link>

                {/* Desktop nav */}
                <nav className="nav-links desktop">
                    <NavLink to="/" className={navLinkClass}>
                        Home
                    </NavLink>

                    <NavLink to="/about" className={navLinkClass}>
                        About
                    </NavLink>

                    <div
                        className="dropdown"
                        onMouseEnter={() => setOpenDropdown("projects")}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        <NavLink to="/projects" className={navLinkClass}>
                            Projects ▾
                        </NavLink>

                        {openDropdown === "projects" && (
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/projects">
                                    All Projects
                                </Link>
                                <Link className="dropdown-item" to="/projects/featured">
                                    Featured Projects
                                </Link>
                                <Link className="dropdown-item" to="/design">
                                    Design Lookbook
                                </Link>

                                <div className="dropdown-sep"/>

                                {featured.map((p) => (
                                    <Link key={p.slug} className="dropdown-item" to={`/projects/${p.slug}`}>
                                        {p.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <NavLink to="/skills" className={navLinkClass}>
                        Skills
                    </NavLink>
                    <NavLink to="/resume" className={navLinkClass}>
                        Resume
                    </NavLink>
                    <NavLink to="/contact" className={navLinkClass}>
                        Contact
                    </NavLink>
                </nav>

                <div className="nav-cta desktop">
                    <a className="btn" href="https://github.com/Ryley-Cote" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="hamburger"
                    type="button"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Toggle navigation"
                >
                    {mobileOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile panel */}
            {mobileOpen && (
                <div className="mobile-panel">
                    <div className="container mobile-links">
                        <NavLink to="/" className={navLinkClass} onClick={closeMobile}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={navLinkClass} onClick={closeMobile}>
                            About
                        </NavLink>

                        <button
                            className="mobile-dropdown-toggle"
                            type="button"
                            onClick={() =>
                                setOpenDropdown((v) => (v === "projects" ? null : "projects"))
                            }
                        >
                            Projects {openDropdown === "projects" ? "▴" : "▾"}
                        </button>

                        {openDropdown === "projects" && (
                            <div className="mobile-sub">
                                <Link className="nav-link" to="/projects" onClick={closeMobile}>
                                    All Projects
                                </Link>
                                <Link className="nav-link" to="/projects/featured" onClick={closeMobile}>
                                    Featured Projects
                                </Link>
                                <Link className="nav-link" to="/design" onClick={closeMobile}>
                                    Design Lookbook
                                </Link>

                                <div className="dropdown-sep"/>

                                {featured.map((p) => (
                                    <Link
                                        key={p.slug}
                                        className="nav-link"
                                        to={`/projects/${p.slug}`}
                                        onClick={closeMobile}
                                    >
                                        {p.title}
                                    </Link>
                                ))}
                            </div>
                        )}

                        <NavLink to="/skills" className={navLinkClass} onClick={closeMobile}>
                            Skills
                        </NavLink>
                        <NavLink to="/resume" className={navLinkClass} onClick={closeMobile}>
                            Resume
                        </NavLink>
                        <NavLink to="/contact" className={navLinkClass} onClick={closeMobile}>
                            Contact
                        </NavLink>

                        <div style={{height: 10}}/>

                        <a
                            className="btn"
                            href="https://github.com/Ryley-Cote"
                            target="_blank"
                            rel="noreferrer"
                            onClick={closeMobile}
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}