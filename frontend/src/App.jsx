import { useEffect, useState } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import StickyNav from "./components/StickyNav";
import ListingIntro from "./components/ListingIntro";
import WhereSleep from "./components/WhereSleep";
import Amenities from "./components/Amenities";
import CalendarSection from "./components/CalendarSection";
import ReviewsSection from "./components/ReviewsSection";
import LocationSection from "./components/LocationSection";
import HostSection from "./components/HostSection";
import ThingsToKnow from "./components/ThingsToKnow";
import NearbyStays from "./components/NearbyStays";
import BookingCard from "./components/BookingCard";
import AmenitiesModal from "./components/AmenitiesModal";
import PhotoTour from "./components/PhotoTour";
import Lightbox from "./components/Lightbox";
import { api } from "./api";
export default function App() {
  const [listing, setListing] = useState(null),
    [photos, setPhotos] = useState([]),
    [reviews, setReviews] = useState(null),
    [amenities, setAmenities] = useState([]),
    [nearby, setNearby] = useState([]),
    [favorite, setFavorite] = useState(false),
    [modal, setModal] = useState(null),
    [lightIndex, setLightIndex] = useState(0),
    [active, setActive] = useState("photos"),
    [showSticky, setShowSticky] = useState(false),
    [loading, setLoading] = useState(true),
    [notice, setNotice] = useState("");
  useEffect(() => {
    Promise.all([
      api.listing(),
      api.photos(),
      api.reviews(),
      api.amenities(),
      api.nearby(),
      api.favorite(),
    ])
      .then(([l, p, r, a, n, f]) => {
        setListing(l);
        setPhotos(p);
        setReviews(r);
        setAmenities(a);
        setNearby(n);
        setFavorite(f.favorite);
      })
      .finally(() => setLoading(false));
  }, []);
useEffect(() => {
  const handleScroll = () => {
    const gallery = document.querySelector(".gallery-grid");

    if (gallery) {
      const rect = gallery.getBoundingClientRect();
      setShowSticky(rect.bottom <= 0);
    }

    const sections = [
      { id: "photos", selector: ".gallery-section" },
      { id: "amenities", selector: "#amenities" },
      { id: "reviews", selector: "#reviews" },
      { id: "location", selector: "#location" },
    ];

    let current = "photos";

    sections.forEach((section) => {
      const element = document.querySelector(section.selector);

      if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= 150) {
          current = section.id;
        }
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  if (loading || !listing || !reviews)
    return <div className="loading">Loading the listing…</div>;
  const share = async () => {
    try {
      if (navigator.share)
        await navigator.share({ title: listing.title, url: location.href });
      else await navigator.clipboard.writeText(location.href);
      setNotice("Link copied");
    } catch {}
  };
  const toggleFavorite = async () => {
    const next = !favorite;
    setFavorite(next);
    await api.setFavorite(next);
    setNotice(next ? "Saved to favourites" : "Removed from favourites");
  };
  const reserve = async (payload) => {
    try {
      const result = await api.reserve(payload);
      setNotice(
        `Reservation ${result.id} created — total ₹${result.total.toLocaleString("en-IN")}`,
      );
    } catch (e) {
      setNotice(e.message);
    }
  };
  const onSearch = async (q) => {
    if (!q) {
      setNotice("Search is ready");
      return;
    }
    const result = await api.search(q);
    setNotice(
      result.photos.length
        ? `Found ${result.photos.length} matching photos`
        : "No matching photos",
    );
  };
  
  return (
    <div>
      <Header onSearch={onSearch} />
      <main className="page">
        <Gallery
          photos={photos}
          onTour={() => setModal("tour")}
          onShare={share}
          favorite={favorite}
          onFavorite={toggleFavorite}
        />
        {showSticky && (
        <StickyNav
            active={active}
            setActive={setActive}
            listing={listing}
            onReserve={() =>
            document
                .querySelector(".reserve-btn")
                ?.scrollIntoView({
                behavior: "smooth",
                block: "center",
                })
            }
        />
        )}
       <div className="main-layout">

          <div className="content-column">
            <ListingIntro listing={listing} />
            <WhereSleep photos={photos} />
            <Amenities onOpen={() => setModal("amenities")} />
            <CalendarSection />
          </div>

          <div className="booking-column">
            <BookingCard listing={listing} onReserve={reserve} />
          </div>

        </div>

        <ReviewsSection data={reviews} />
        <LocationSection />
        <HostSection />
        <ThingsToKnow />
        <NearbyStays items={nearby} />
      </main>
      
      {modal === "tour" && (
        <PhotoTour photos={photos} onClose={() => setModal(null)} />
      )}{" "}
      {modal === "amenities" && (
        <AmenitiesModal groups={amenities} onClose={() => setModal(null)} />
      )}{" "}
      {modal === "lightbox" && (
        <Lightbox
          photos={photos}
          index={lightIndex}
          setIndex={setLightIndex}
          onClose={() => setModal(null)}
        />
      )}{" "}
      {notice && (
        <button className="toast" onClick={() => setNotice("")}>
          {notice}
        </button>
      )}
    </div>
  );
}
