export const Lightbox = ({open, item, onClose, onPrev, onNext}) => {
    if (!open || !item) return null;

    const onBackdrop = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="lightbox" role="dialog" aria-modal="true" onMouseDown={onBackdrop}>
            <div className="lightbox-inner">
                <div className="lightbox-top">
                    <div className="lightbox-title">
                        <strong>{item.label || "Design"}</strong>
                        {item.tags?.length ? (
                            <span className="lightbox-tags"> · {item.tags.join(" • ")}</span>
                        ) : null}
                    </div>

                    <button className="icon-btn" onClick={onClose} type="button" aria-label="Close">
                        ✕
                    </button>
                </div>

                <div className="lightbox-body">
                    <button className="icon-btn nav-btn" onClick={onPrev} type="button" aria-label="Previous">
                        ←
                    </button>

                    <img className="lightbox-img" src={item.src} alt={item.alt || item.label || "Design"}/>

                    <button className="icon-btn nav-btn" onClick={onNext} type="button" aria-label="Next">
                        →
                    </button>
                </div>

                {item.alt ? <p className="muted" style={{marginTop: 10}}>{item.alt}</p> : null}
            </div>
        </div>
    )
}