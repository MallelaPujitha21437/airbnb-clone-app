import { Utensils, Wifi, Car, Waves, Dog, Video, BellOff } from "lucide-react";
const icons = [
  Utensils,
  Wifi,
  Car,
  Waves,
  Dog,
  Video,
  BellOff,
  Wifi,
  Utensils,
  Car,
];
export default function Amenities({ onOpen }) {
  const items = [
    "Kitchen",
    "Wifi",
    "Dedicated workspace",
    "Free parking on premises",
    "Pool",
    "Hot tub",
    "Pets allowed",
    "Exterior security cameras on property",
    "Carbon monoxide alarm",
    "Smoke alarm",
  ];
  return (
    <section id="amenities" className="section-block">
      <h2>What this place offers</h2>
      <div className="amenity-grid">
        {items.map((x, i) => {
          const I = icons[i % icons.length];
          return (
            <div key={x} className={i > 7 ? "muted" : ""}>
              <I />
              <span>{x}</span>
            </div>
          );
        })}
      </div>
      <button className="outline-btn" onClick={onOpen}>
        Show all 50 amenities
      </button>
    </section>
  );
}
