const BASE = `${import.meta.env.VITE_API_URL || "http://localhost:4000"}/api`;

async function request(path, options) {
  const r = await fetch(`${BASE}${path}`, options);
  const d = await r.json();

  if (!r.ok) {
    throw new Error(d.error || "Request failed");
  }

  return d;
}

export const api = {
  listing: () => request("/listing"),

  photos: () => request("/photos"),

  reviews: () => request("/reviews"),

  amenities: () => request("/amenities"),

  nearby: () => request("/nearby"),

  availability: () => request("/availability"),

  favorite: () => request("/favorite"),

  setFavorite: (favorite) =>
    request("/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorite }),
    }),

  reserve: (body) =>
    request("/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }),

  search: (q) => request(`/search?q=${encodeURIComponent(q)}`),
};
