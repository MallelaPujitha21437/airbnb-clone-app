import { DoorOpen, Wind, TreePine } from "lucide-react";
import LeafIcon from "./LeafIcon";
export default function ListingIntro({ listing, photos }) {
  return (
    <>
      <section className="intro">
        <h2>{listing.type}</h2>
        <p>
          {listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds}{" "}
          bed · {listing.bathrooms} bathroom
        </p>
        <div className="favourite-card">
          <div className="favourite-title">
            <LeafIcon size={40} className="laurel-icon" />

            <b>
              Guest
              <br />
              favourite
            </b>

            <LeafIcon size={40} className="laurel-icon right-laurel" />
          </div>

          <div className="favourite-description">
            One of the most loved homes on Airbnb,
            <br />
            according to guests
          </div>

          <div className="favourite-rating">
            <strong>{listing.rating}</strong>
            <span>★★★★★</span>
          </div>

          <div className="favourite-divider"></div>

          <div className="favourite-reviews">
            <strong>{listing.reviews}</strong>
            <span>Reviews</span>
          </div>
        </div>
        <div className="host-row">
          <div className="host-avatar">M</div>
          <div>
            <b>Hosted by {listing.host}</b>
            <br />
            <span>{listing.hostingYears} years hosting</span>
          </div>
        </div>
        <div className="highlights">
          <div>
            <TreePine />
            <b>Outdoor entertainment</b>
            <span>
              The pool and alfresco dining are great for summer trips.
            </span>
          </div>
          <div>
            <Wind />
            <b>Designed for staying cool</b>
            <span>Beat the heat with the A/C and ceiling fan.</span>
          </div>
          <div>
            <DoorOpen />
            <b>Self check-in</b>
            <span>You can check in with the building staff.</span>
          </div>
        </div>
        <div className="translation">
          Some info has been automatically translated. <u>Show original</u>
        </div>
        <p className="description">{listing.description}</p>
        <button className="show-more">Show more ›</button>
      </section>
    </>
  );
}
