import { useEffect, useRef } from "react";

import {
  Sparkles,
  CheckCircle2,
  KeyRound,
  MessageSquare,
  Map,
  Tag,
} from "lucide-react";

import LeafIcon from "./LeafIcon";


const icons = [Sparkles, CheckCircle2, KeyRound, MessageSquare, Map, Tag];

export default function ReviewsSection({ data }) {
  const tagsTrackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const track = tagsTrackRef.current;

      if (!track) return;

      const scrollY = window.scrollY;

      const movement = scrollY * 0.15;

      const maxMovement = track.scrollWidth - track.parentElement.offsetWidth;

      const finalMovement = Math.min(movement, Math.max(0, maxMovement));

      track.style.transform = `translateX(-${finalMovement}px)`;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="reviews" className="reviews-section">
      <div className="review-hero">
        <div className="big-rating">
          <LeafIcon size={90} />

          <b>4.95</b>

          <LeafIcon size={90} className="right-rating-leaf" />
        </div>

        <h2>Guest favourite</h2>

        <p>
          This home is a guest favourite based on ratings, reviews and
          <br />
          reliability
        </p>

        <u>How reviews work</u>
      </div>

      <div className="rating-row">
        <div className="overall">
          <b>Overall rating</b>

          {[5, 4, 3, 2, 1].map((n) => (
            <div key={n}>
              <span>{n}</span>

              <i>
                <em
                  style={{
                    width: n === 5 ? "96%" : n === 4 ? "4%" : "0%",
                  }}
                />
              </i>
            </div>
          ))}
        </div>

        {[
          ["Cleanliness", data.summary.cleanliness],
          ["Accuracy", data.summary.accuracy],
          ["Check-in", data.summary.checkin],
          ["Communication", data.summary.communication],
          ["Location", data.summary.location],
          ["Value", data.summary.value],
        ].map(([name, value], index) => {
          const Icon = icons[index];

          return (
            <div className="rating-item" key={name}>
              <b>{name}</b>

              <strong>{value.toFixed(1)}</strong>

              <Icon />
            </div>
          );
        })}
      </div>

      <div className="review-tags">
        <div className="review-tags-track">
          {data.tags.map(([emoji, name, count], index) => (
            <span key={`${name}-${index}`}>
              {emoji} {name} <small>{count}</small>
            </span>
          ))}
        </div>
      </div>

      <div className="review-grid">
        {data.items.map((review, index) => (
          <article key={`${review.name}-${index}`}>
            <div className="review-person">
              <span>{review.name[0]}</span>

              <div>
                <b>{review.name}</b>

                <small>{review.duration}</small>
              </div>
            </div>

            <div>★★★★★ · {review.time}</div>

            <p>{review.text}</p>

            {review.name === "Aheesh" && (
              <b>
                <u>Show more</u>
              </b>
            )}

            {review.name === "Vedant" && (
              <b>
                <u>Show more</u>
              </b>
            )}
          </article>
        ))}
      </div>

      <button className="show-all-reviews">Show all 19 reviews</button>
    </section>
  );
}
