import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NearbyStays({ items }) {
  const [page, setPage] = useState(0);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const start = page * itemsPerPage;
  const visibleItems = items.slice(start, start + itemsPerPage);

  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <section className="nearby">
      <div className="nearby-head">
        <h2>More stays nearby</h2>

        <div className="nearby-controls">
          <span>
            {page + 1} / {totalPages}
          </span>

          <button
            onClick={previousPage}
            disabled={page === 0}
            className="nearby-arrow"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextPage}
            disabled={page === totalPages - 1}
            className="nearby-arrow"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="nearby-grid">
        {visibleItems.map((x) => (
          <article key={x.title} className="nearby-card">
            <img src={x.image} alt={x.title} />

            <b>{x.title}</b>

            <span>
              {x.price} ★ {x.rating}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
