import {projects} from "../data/projects.js";
import {ProjectCard} from "../components/ProjectCard.jsx";
import {Link} from "react-dom";
import ExternalLinks from "../components/ExternalLinks.jsx";

export const Home = () => {
    const featured = projects.filter((p) => p.featured);

    return (
        <div>
            <section className="hero">
                <h1>Software Developer</h1>
                <p>
                    Front-End & Mobile — I build clean UI, strong app structure, and shipped features.
                </p>

                <div className="hero-actions">
                    <Link className="btn" to="/projects/featured">
                        View Featured Projects
                    </Link>
                    <Link className="btn secondary" to="/contact">
                        Contact
                    </Link>
                </div>
            </section>

            <section className="section">
                <div className="section-head">
                    <h2>Featured Projects</h2>
                    <Link className="text-link" to="/projects/featured">
                        See all →
                    </Link>
                </div>

                <div className="grid">
                    {featured.map((p) => (
                        <ProjectCard key={p.slug} project={p}/>
                    ))}
                </div>
            </section>
            <section className="section">
                <h2>Links</h2>
                <ExternalLinks/>
            </section>
        </div>
    )
}