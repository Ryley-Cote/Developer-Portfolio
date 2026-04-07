export const LookbookGrid = ({items = [], onSelect}) => {
    return (
        <div className="lookbook-grid">
            {items.map((item, idx) => (
                <button
                    key={item.src + idx}
                    className="lookbook-tile"
                    type="button"
                    onClick={() => onSelect(idx)}
                >
                    <img className="lookbook-thumb" src={item.src} alt={item.alt || item.label || "Design"}/>
                    <div className="lookbook-meta">
                        <div className="lookbook-label">{item.label || "Design"}</div>
                        {item.tags?.length ? (
                            <div className="lookbook-tags">{item.tags.slice(0, 3).join(" • ")}</div>
                        ) : null}
                    </div>
                </button>
            ))}
        </div>
    )
}