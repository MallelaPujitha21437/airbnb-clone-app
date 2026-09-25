export default function WhereSleep({ photos }) {
  const p = Object.fromEntries(photos.map((x) => [x.id, x]));
  return (
    <section className="section-block sleep">
      <h2>Where you'll sleep</h2>
      <div className="sleep-grid">
        <div>
          <img src={p.bedroom?.src} />
          <b>Bedroom</b>
          <span>1 double bed</span>
        </div>
        <div>
          <img src={p["living1-main"]?.src} />
          <b>Living room</b>
          <span>1 sofa</span>
        </div>
      </div>
    </section>
  );
}
