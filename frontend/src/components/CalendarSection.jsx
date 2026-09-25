import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Flag,
} from "lucide-react";

const days = ["S", "M", "T", "W", "T", "F", "S"];

function Month({ year, month, selectedStart, selectedEnd }) {
  const first = new Date(year, month - 1, 1).getDay();
  const count = new Date(year, month, 0).getDate();

  let cells = [];

  for (let i = 0; i < first; i++) {
    cells.push(<span key={"e" + i} />);
  }

  for (let d = 1; d <= count; d++) {
    const key = `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const selected = key === selectedStart || key === selectedEnd;

    cells.push(
      <button key={d} className={selected ? "selected" : ""}>
        {d}
      </button>
    );
  }

  return (
    <div className="month">
      <h3>
        {new Date(year, month - 1, 1).toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </h3>

      <div className="dow">
        {days.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>

      <div className="days">{cells}</div>
    </div>
  );
}

export default function CalendarSection() {
  return (
    <section className="section-block calendar-section">

      <h2>5 nights in Candolim</h2>

      <p>18 Oct 2026 - 23 Oct 2026</p>

      <div className="calendar-head">
        <button>
          <ChevronLeft />
        </button>

        <span>October 2026</span>

        <span>November 2026</span>

        <button>
          <ChevronRight />
        </button>
      </div>

      <div className="months">
        <Month
          year={2026}
          month={10}
          selectedStart="2026-10-18"
          selectedEnd="2026-10-23"
        />

        <Month
          year={2026}
          month={11}
          selectedStart=""
          selectedEnd=""
        />
      </div>

      {/* Bottom calendar controls */}
      <div className="calendar-bottom">

        <button className="calendar-icon-btn">
          <CalendarDays size={20} />
        </button>

        <button className="clear-dates">
          Clear dates
        </button>

      </div>

      

      

    </section>
  );
}