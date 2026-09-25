import { Search, Plus, Minus, Home, ChevronRight } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="section-block location-section">
      <h2>Where you’ll be</h2>

      <p className="location-name">Candolim, Goa, India</p>

      <div className="map">
        <button className="map-search">
          <Search />
        </button>

        <div className="water" />
        <div className="land" />

        <div className="map-circle c1" />
        <div className="map-circle c2" />

        <div className="home-pin">
          <Home />
        </div>

        <div className="zoom">
          <button>
            <Plus />
          </button>

          <button>
            <Minus />
          </button>
        </div>
      </div>

      {/* Location information below map */}
      <p className="exact-location">
        Exact location will be provided after booking.
      </p>

      <div className="neighbourhood">
        <h3>Neighbourhood highlights</h3>

        <p>
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay
          with easy access to beaches, cafés, and popular attractions.
        </p>

        <button className="show-more-location">
          <span>Show more</span>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
