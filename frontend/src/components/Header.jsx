import { useState } from "react";
import airbnbLogo from "/assets/logo.png";
import {
  Search,
  Globe,
  Menu,
  UserRound,
  ChevronDown,
  MapPin,
  CalendarDays,
  Users,
  Minus,
  Plus,
  X,
} from "lucide-react";
export default function Header({ onSearch }) {
  const [open, setOpen] = useState(false);
  const [guests, setGuests] = useState(0);
  const [query, setQuery] = useState("");
  const submit = () => {
    onSearch?.(query);
    setOpen(false);
  };
  return (
    <header className="top-header">
      <div className="header-inner">
        <button
          className="brand"
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={airbnbLogo} alt="Airbnb" className="logo" />
          <span>airbnb</span>
        </button>
        <div className="search-pill">
          <button>
            <MapPin size={17} />
            <span>Anywhere</span>
          </button>
          <i />
          <button>
            <CalendarDays size={16} />
            <span>Anytime</span>
          </button>
          <i />
          <button onClick={() => setOpen(!open)} className="guest-search">
            <Users size={16} />
            <span>{guests ? `${guests} guests` : "Add guests"}</span>
          </button>
          <button className="search-circle" onClick={submit}>
            <Search size={17} />
          </button>
          {open && (
            <div className="search-popover">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search living room, bedroom, pool..."
              />
              <div className="guest-row">
                <span>Guests</span>
                <div>
                  <button
                    disabled={!guests}
                    onClick={() => setGuests(Math.max(0, guests - 1))}
                  >
                    <Minus size={15} />
                  </button>
                  <b>{guests}</b>
                  <button onClick={() => setGuests(guests + 1)}>
                    <Plus size={15} />
                  </button>
                </div>
              </div>
              <button className="popover-search" onClick={submit}>
                Search
              </button>
            </div>
          )}
        </div>
        <div className="header-actions">
          <button className="host-link">Become a host</button>
          <button className="round-btn">
            <Globe size={18} />
          </button>
          <button className="profile-btn">
            <Menu size={18} />
            <UserRound size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
