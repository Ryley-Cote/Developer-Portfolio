import { projects } from "../data/projects.js";
import {ProjectCard} from "../components/ProjectCard.jsx";

export const FeaturedProjects = () => {
    const featured = projects.filter((p) => p.featured);
    return (
        <div>
      <h1>Featured Projects</h1>
      <p>Flagship work and the best representation of my skills.</p>

      <div className="grid">
        {featured.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
    )
}