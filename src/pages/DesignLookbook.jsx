import {useMemo, useState} from "react";
import {projects} from "../data/projects.js";
import LookbookGrid from "../components/LookbookGrid.jsx";
import Lightbox from "../components/Lightbox.jsx";

export const DesignLookbook = () => {
    const project = useMemo(() => projects.find((p) => p.slug === "design-lookbook"), []);
    const items = project?.lookbook || [];

    const allTags = useMemo(() => {
        const set = new Set();
        items.forEach((i) => (i.tags || []).forEach((t) => set.add(t)));
        return ["All", ...Array.from(set)];
    }, [items]);

    const [tag, setTag] = useState("All");
    const filtered = useMemo(() => {
        if (tag === "All") return items;
        return items.filter((i) => (i.tags || []).includes(tag));
    }, [items, tag]);

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const openAt = (i) => {
        setIndex(i);
        setOpen(true);
    };

    const current = filtered[index];

    const prev = () => setIndex((i) => (i - 1 + filtered.length) % filtered.length);
    const next = () => setIndex((i) => (i + 1) % filtered.length);

    if (!project) {
        return (
            <div>
                <h1>Design Lookbook</h1>
                <p>Project not configured yet.</p>
            </div>
        );
    }
    return (
        <div>
            <h1>{project.title}</h1>
            <p className="muted">{project.subtitle}</p>

            <div className="chip-row">
                {project.tech?.map((t) => (
                    <span key={t} className="chip">{t}</span>
                ))}
            </div>

            {project.links?.figma ? (
                <div className="links-row">
                    <a className="btn" href={project.links.figma} target="_blank" rel="noreferrer">
                        Figma
                    </a>
                </div>
            ) : null}

            {/* Filters (optional but professional) */}
            {allTags.length > 1 ? (
                <section className="section">
                    <h2>Browse</h2>
                    <div className="filter-row">
                        {allTags.map((t) => (
                            <button
                                key={t}
                                type="button"
                                className={"filter-btn" + (t === tag ? " active" : "")}
                                onClick={() => {
                                    setTag(t);
                                    setIndex(0);
                                }}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </section>
            ) : null}

            <section className="section">
                <h2>Gallery</h2>
                <LookbookGrid items={filtered} onSelect={openAt}/>
            </section>

            <Lightbox
                open={open}
                item={current}
                onClose={() => setOpen(false)}
                onPrev={prev}
                onNext={next}
            />
        </div>
    )
}