import { X } from "lucide-react";
export default function AmenitiesModal({ groups, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="amenities-modal">
        <button className="modal-close" onClick={onClose}>
          <X />
        </button>
        {groups.map((g) => (
          <section key={g.category}>
            <h3>{g.category}</h3>
            {g.items.map((x) => (
              <div key={x}>
                ♧ <span>{x}</span>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
