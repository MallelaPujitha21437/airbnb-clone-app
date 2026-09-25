import { X, ChevronLeft, ChevronRight } from "lucide-react";
export default function Lightbox({ photos, index, onClose, setIndex }) {
  const p = photos[index];
  return (
    <div className="lightbox">
      <button className="lb-close" onClick={onClose}>
        <X />
      </button>
      <button
        className="lb-prev"
        onClick={() => setIndex((index - 1 + photos.length) % photos.length)}
      >
        <ChevronLeft />
      </button>
      <img src={p.src} />
      <button
        className="lb-next"
        onClick={() => setIndex((index + 1) % photos.length)}
      >
        <ChevronRight />
      </button>
      <span>
        {index + 1} / {photos.length}
      </span>
    </div>
  );
}
