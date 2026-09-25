import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faShield } from "@fortawesome/free-solid-svg-icons";
export default function HostSection() {
  const co = [
    "Sharath",
    "Aman Dev Pahwa",
    "Maria Karen Priyanka",
    "Simran",
    "Pallavi",
    "Sanyukta",
    "Shruti",
    "Amisha",
  ];
  return (
    <section className="host-section">
      <h2>Meet your host</h2>
      <div className="host-layout">
        <div>
          <div className="host-card">
            <img
              className="host-logo"
              src="\assets\host-logo.png"
              alt="Mirashya Homes"
            />
            <b>
              Mirashya
              <br />
              Homes
            </b>
            <span>Host</span>
            <div className="host-stats">
              <div>
                <strong>1,463</strong>
                <br />
                <small>Reviews</small>
              </div>
              <div>
                <strong>4.68★</strong>
                <br />
                <small>Rating</small>
              </div>
              <div>
                <strong>2</strong>
                <br />
                <small>Years hosting</small>
              </div>
            </div>
          </div>
          <div className="host-info">
            <div className="host-info-item">
              
              <span> 🎈 Born in the 80s</span>
            </div>
            <div className="host-info-item">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="host-info-icon"
              />
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>
        </div>
        <div className="cohosts">
          <h3>Co-Hosts</h3>
          <div className="cohost-grid">
            {co.map((n) => (
              <span key={n}>
                <i>{n[0]}</i>
                {n}
              </span>
            ))}
          </div>
          <div className="host-details">
            <h3>Host details</h3>
            <p>Response rate: 100%</p>
            <p>Responds within an hour</p>
            <button className="message-host">Message host</button>
          </div>
          <p className="protect">
            <FontAwesomeIcon icon={faShield} className="host-info-icon" />
            To help protect your payment, always use Airbnb to send money and
            communicate with hosts.
          </p>
        </div>
      </div>
    </section>
  );
}
