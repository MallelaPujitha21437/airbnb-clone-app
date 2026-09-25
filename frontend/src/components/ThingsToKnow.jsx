import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarXmark } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
export default function ThingsToKnow() {
  return (
    <section className="things">
      <h2>Things to know</h2>
      <div className="things-grid">
        <div>
          <b>
            <FontAwesomeIcon
              icon={faCalendarXmark}
              className="host-info-icon"
            />
            <br />
            <br />
            Cancellation policy
          </b>
          <p>
            Free cancellation before 17 October. Cancel before check-in on 18
            October for a partial refund.
          </p>
          <u>Learn more</u>
        </div>
        <div>
          <b>
            <FontAwesomeIcon icon={faKey} className="host-info-icon" />
            <br />
            <br />
            House rules
          </b>
          <p>
            Check-in after 2:00 pm
            <br />
            Checkout before 11:00 am
            <br />3 guests maximum
          </p>
          <u>Learn more</u>
        </div>
        <div>
          <b>
            <FontAwesomeIcon icon={faShield} className="host-info-icon" />
            <br />
            <br />
            Safety & property
          </b>
          <p>
            Carbon monoxide alarm not reported
            <br />
            Smoke alarm not reported
            <br />
            Exterior security cameras on property
          </p>
          <u>Learn more</u>
        </div>
      </div>
    </section>
  );
}
