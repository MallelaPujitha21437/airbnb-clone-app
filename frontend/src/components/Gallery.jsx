import { Heart, Share2, Grid2X2 } from "lucide-react";
export default function Gallery({
  photos,
  onTour,
  onShare,
  favorite,
  onFavorite,
}) {
  const p = Object.fromEntries(photos.map((x) => [x.id, x]));
  return (
    <section id="photos" className="gallery-section">
      <div className="title-row">
        <h1>Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>
        <div className="title-actions">
          <button onClick={onShare}>
            <Share2 size={16} /> Share
          </button>
          <button onClick={onFavorite}>
            <Heart size={17} fill={favorite ? "currentColor" : "none"} />{" "}
            {favorite ? "Saved" : "Save"}
          </button>
        </div>
      </div>
      <div className="gallery-grid">
        <button className="gallery-cell hero" onClick={onTour}>
          <img src={p.hero?.src} />
        </button>
        <button className="gallery-cell" onClick={onTour}>
          <img src={p.living2?.src} />
        </button>
        <button className="gallery-cell" onClick={onTour}>
          <img src={p.jacuzzi?.src} />
        </button>
        <button className="gallery-cell" onClick={onTour}>
          <img src={p.bedroom?.src} />
        </button>
        <button className="gallery-cell last" onClick={onTour}>
          <img src={p.building?.src} />
          <span className="all-photos">
            <Grid2X2 size={16} /> Show all photos
          </span>
        </button>
      </div>
    </section>
  );
}
