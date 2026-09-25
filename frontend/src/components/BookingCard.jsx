import { useMemo, useState } from "react";
import { ChevronDown, Minus, Plus } from "lucide-react";
function iso(d) {
  return d.toISOString().slice(0, 10);
}
export default function BookingCard({ listing, onReserve }) {
  const [checkin, setCheckin] = useState("18/10/2026");
  const [checkout, setCheckout] = useState("23/10/2026");
  const [guests, setGuests] = useState(2);
  const nights = useMemo(
    () =>
      Math.max(
        0,
        Math.round((new Date(checkout) - new Date(checkin)) / 86400000),
      ),
    [checkin, checkout],
  );
  const subtotal = listing.price * nights;
  const service = Math.round(subtotal * 0.14);
  const total = subtotal + 1500 + service;
  return (
    <aside className="booking-wrap">
      <div className="promo">
        <span>🏷️</span>
        <div>
          <div>{listing.promo}</div>
          <u>{listing.promoTerms}</u>
        </div>
        <button>Claim</button>
      </div>
      <div className="booking-card">
        <div className="price-line">
          <b>₹{(nights ? total : listing.price).toLocaleString("en-IN")}</b>
          <span>for {nights || 5} nights</span>
        </div>
        <div className="date-grid">
          <label>
            CHECK-IN
            <input
              type="date"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
            />
          </label>
          <label>
            CHECKOUT
            <input
              type="date"
              value={checkout}
              min={checkin}
              onChange={(e) => setCheckout(e.target.value)}
            />
          </label>
          <label className="guest-field">
            GUESTS
            <div>
              {guests} guests <ChevronDown size={17} />
            </div>
          </label>
        </div>
        <div className="cancel-note">
          Free cancellation before <b>17 October</b>
        </div>
        <button
          className="reserve-btn"
          onClick={() =>
            onReserve({
              checkin,
              checkout,
              guests,
              total,
              nights,
              subtotal,
              cleaning: 1500,
              service,
            })
          }
        >
          Reserve
        </button>
        <p className="charge-note">You won't be charged yet</p>
      </div>
      <button className="report">⚑ &nbsp;Report this listing</button>
    </aside>
  );
}
