import { ArrowLeft, Share2, Heart } from "lucide-react";
const groups = [
  [
    "Living room 1",
    "Sofa · Air conditioning · Ceiling fan · TV",
    "living1-main",
  ],
  ["Living room 2", "Ceiling fan · Hot tub", "living2-main"],
  [
    "Full-kitchen",
    "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    "thumb-kitchen",
  ],
  [
    "Bedroom",
    "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
    "bedroom",
  ],
  [
    "Full bathroom",
    "Hairdryer · Hot water · Shampoo · Shower gel",
    "thumb-bathroom",
  ],
  [
    "Gym",
    "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    "thumb-gym",
  ],
  ["Exterior", "Building exterior", "thumb-exterior"],
  ["Pool", "Pool", "pool-1"],
  ["Additional photos", "More photos", "additional"],
];
export default function PhotoTour({ photos, onClose }) {
  const map = Object.fromEntries(photos.map((x) => [x.id, x]));
  const img = (id) => map[id]?.src || `/assets/${id}.jpg`;
  return (
    <div className="photo-tour">
      <div className="tour-header">
        <button onClick={onClose}>
          <ArrowLeft />
        </button>
        <b>Photo tour</b>
        <div>
          <Share2 />
          <Heart />
        </div>
      </div>
      <div className="tour-inner">
        <div className="tour-categories">
          {groups.map(([name, sub, id]) => (
            <a key={name} href={`#tour-${name.replaceAll(" ", "-")}`}>
              <img src={img(id)} />
              <span>{name}</span>
            </a>
          ))}
        </div>
        {groups.map(([name, sub, id]) => (
          <section
            className="tour-section"
            id={`tour-${name.replaceAll(" ", "-")}`}
            key={name}
          >
            <div>
              <h2>{name}</h2>
              <p>{sub}</p>
            </div>
            <div className="tour-photos">
              {id === "living1-main" && (
                <>
                  <img className="wide" src={img("living1-main")} />
                  <img src={img("living1-2")} />
                  <img src={img("living1-3")} />
                </>
              )}
              {id === "living2-main" && (
                <>
                  <img className="wide" src={img("thumb-living2")} />
                  <img src={img("living2-jacuzzi")} />
                  <img src={img("living2-wide")} />
                  <img className="wide" src={img("living2-main")} />
                  <img src={img("living2-2")} />
                  <img src={img("living2-3")} />
                  <img className="wide" src={img("living2-4")} />
                </>
              )}
              {id === "pool-1" && (
                <>
                  <img className="wide" src={img("thumb-pool")} />
                  <img src={img("pool-1")} />
                  <img src={img("pool-2")} />
                </>
              )}
              {id === "additional" && (
                <>
                  <img
                    className="wide"
                    src={img("thumb-additional")}
                    alt="additional photos"
                  />
                  <img
                    src={img("Additional photos1-1")}
                    alt="additional photos"
                  />
                  <img
                    src={img("Additional photos1-2")}
                    alt="additional photos"
                  />
                  <img
                    className="wide"
                    src={img("Additional photos1-3")}
                    alt="additional photos"
                  />
                  <img
                    src={img("Additional photos1-9")}
                    alt="additional photos"
                  />
                  <img
                    src={img("Additional photos1-4")}
                    alt="additional photos"
                  />
                  <img
                    className="wide"
                    src={img("Additional photos1-5")}
                    alt="additional photos"
                  />
                  <img
                    src={img("Additional photos1-6")}
                    alt="additional photos"
                  />
                  <img
                    src={img("Additional photos1-7")}
                    alt="additional photos"
                  />
                  <img
                    className="wide"
                    src={img("Additional photos1-8")}
                    alt="additional photos"
                  />
                </>
              )}
              {id == "thumb-kitchen" && (
                <>
                  <img
                    classname="kitchen"
                    src={img("thumb-kitchen")}
                    alt="thumb-kitchen"
                  />
                  <img
                    classname="kitchen"
                    src={img("thumb-kitchen1-1")}
                    alt="thumb-kitchen1"
                  />
                </>
              )}
              {id == "bedroom" && (
                <>
                  <img
                    className="wide"
                    src={img("gallery-bedroom")}
                    alt="bedroom"
                  />
                  <img src={img("gallery-bedroom1-1")} alt="bedroom" />
                  <img src={img("gallery-bedroom1-2")} alt="bedroom" />
                  <img
                    className="wide"
                    src={img("gallery-bedroom")}
                    alt="bedroom"
                  />
                  <img src={img("gallery-bedroom1-3")} alt="bedroom" />
                  <img src={img("gallery-bedroom1-4")} alt="bedroom" />
                </>
              )}
              {id == "thumb-bathroom" && (
                <>
                  <img className="wide" src={img("thumb-bathroom")} alt="" />
                </>
              )}
              {id == "thumb-gym" && (
                <>
                  <img className="wide" src={img("thumb-gym")} alt="Gym" />
                  <img src={img("gym1-1")} alt="Gym" />
                  <img src={img("gym1-2")} alt="Gym" />
                  <img src={img("gym1-3")} alt="Gym" />
                  <img src={img("gym1-4")} alt="Gym" />
                </>
              )}
              {id == "thumb-exterior" && (
                <>
                  <img
                    className="wide"
                    src={img("thumb-exterior")}
                    alt="exterior"
                  />
                  <img src={img("exterior1-1")} alt="exterior" />
                  <img src={img("exterior1-2")} alt="exterior" />
                  <img
                    className="wide"
                    src={img("exterior1-3")}
                    alt="exterior"
                  />
                  <img src={img("exterior1-4")} alt="exterior" />
                  <img src={img("exterior1-5")} alt="exterior" />
                </>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
