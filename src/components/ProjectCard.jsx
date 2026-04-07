import { Link } from "react-dom";

export const ProjectCard = ({project}) => {
    return (
        <Link to={`/projects/${project.slug}`} className="card">
      <div className="card-top">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-subtitle">{project.subtitle}</p>
      </div>

      <div className="chip-row">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      <div className="card-link">
        View project →
      </div>
    </Link>
    )
}