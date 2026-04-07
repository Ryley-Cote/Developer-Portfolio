import { useMemo, useState } from "react";

export const Carousel = ({ items = []}) => {
    const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);
  const [index, setIndex] = useState(0);

  if (!safeItems.length) return null;

  const current = safeItems[index];

  const prev = () => setIndex((i) => (i - 1 + safeItems.length) % safeItems.length);
  const next = () => setIndex((i) => (i + 1) % safeItems.length);
    return (
        <div className="carousel">
      <div className="carousel-frame">
        <img className="carousel-img" src={current.src} alt={current.alt || "Design"} />
      </div>

      <div className="carousel-controls">
        <button className="btn secondary" onClick={prev} type="button">
          ← Prev
        </button>

        <div className="carousel-dots" aria-label="Carousel navigation">
          {safeItems.map((_, i) => (
            <button
              key={i}
              className={"dot" + (i === index ? " active" : "")}
              onClick={() => setIndex(i)}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button className="btn secondary" onClick={next} type="button">
          Next →
        </button>
      </div>
    </div>
    )
}