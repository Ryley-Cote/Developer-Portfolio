import { projects } from "../data/projects.js"
import { useParams } from "react-dom"
import Carousel from "../components/Carousel.jsx"

export const ProjectDetails = () => {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);
    if (!project) {
    return (
      <div>
        <h1>Project not found</h1>
        <p>That page doesn’t exist yet.</p>
      </div>
    );
  }

    return (
        <div>
      <h1>{project.title}</h1>
      <p>{project.subtitle}</p>

      <div className="chip-row">
        {project.tech.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      <div className="links-row">
        {project.links.github && (
          <a className="btn" href={project.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {project.links.demo && (
          <a className="btn secondary" href={project.links.demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
          {project.media?.length ? (
  <section className="section">
    <h2>Design Gallery</h2>
    <p className="muted">
      A quick visual overview — full case study notes below.
    </p>
    <Carousel items={project.media} />
  </section>
) : null}
      </div>

      <div className="content">
        {project.sections?.map((s) => (
          <section key={s.heading} className="section">
            <h2>{s.heading}</h2>
            {s.body && <p>{s.body}</p>}
            {s.bullets && (
              <ul>
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
    )
}