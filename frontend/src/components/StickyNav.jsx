import { useEffect, useState } from "react";
export default function StickyNav({ active, setActive, listing, onReserve }) {
  const ids = ["photos", "amenities", "reviews", "location"];
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-30% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [setActive]);
  return (
    <div className="sticky-nav">
      <div className="sticky-inner">
        <div className="nav-tabs">
          {ids.map((id) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() =>
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              {id[0].toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
        <div className="sticky-reserve">
          <div>
            <b>₹28,499</b> for 5 nights
            <br />
            <span>★ 4.95 · 19 reviews</span>
          </div>
          <button onClick={onReserve}>Reserve</button>
        </div>
      </div>
    </div>
  );
}
