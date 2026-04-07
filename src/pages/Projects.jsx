import { projects } from "../data/projects.js";
import {ProjectCard} from "../components/ProjectCard.jsx";

export const Projects = () => {
    return (
        <div>
      <h1>Projects</h1>
      <p>Everything I’m comfortable showing publicly (and NDA-safe summaries where needed).</p>

      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
    )
}