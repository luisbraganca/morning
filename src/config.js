/**
 * See `README.md` for instructions on how to set this up.
 */

export const weather = {
  apiKey: process.env.REACT_APP_WEATHER_API_KEY,
  latitude: parseFloat(process.env.REACT_APP_WEATHER_LATITUDE),
  longitude: parseFloat(process.env.REACT_APP_WEATHER_LONGITUDE),
  tryNavigation: true, // try using `getCurrentLocation`, if something happens use the provided coordinates instead.
  units: "metric", // "standard", "metric", "imperial"
  forecastCount: 8, // max: 40 (total of 5 days, 3 in 3 hours)
};

export const engines = [
  {
    bang: "bs",
    action: "https://search.brave.com/search?q={search}",
    name: "bravesearch",
    parser: (search) => encodeURIComponent(search).replace(/[ ]/g, "+"),
  },
  {
    bang: "dd",
    action: "https://duckduckgo.com/?q={search}",
    name: "duckduckgo",
    parser: (search) => search.replace(/[ ]/g, "+"),
  },
  {
    bang: "gg",
    action: "https://www.google.pt/search?q={search}",
    name: "google",
    parser: (search) => search.replace(/[ ]/g, "+"),
  },
  {
    bang: "fb",
    action: "https://www.facebook.com/search/top/?q={search}",
    name: "facebook",
    parser: (search) => encodeURIComponent(search),
  },
  {
    bang: "gi",
    action: "https://www.google.com/search?tbm=isch&q={search}",
    name: "googleimages",
    parser: (search) => search.replace(/[ ]/g, "+"),
  },
  {
    bang: "li",
    action: "https://www.linkedin.com/search/results/index?keywords={search}",
    name: "linkedin",
  },
  {
    bang: "yt",
    action: "https://www.youtube.com/results?search_query={search}",
    name: "youtube",
    parser: (search) => search.replace(/[ ]/g, "+"),
  },
  {
    bang: "wp",
    action: "https://wikipedia.org/wiki/Special:Search?search={search}",
    name: "wikipedia",
    parser: (search) => search.replace(/[ ]/g, "+"),
  },
  {
    bang: "gm",
    action: "https://www.google.pt/maps/search/{search}/",
    name: "googlemaps",
    parser: (search) => search.replace(/[ ]+/g, "+"),
  },
  {
    bang: "eb",
    action: "https://www.ebay.com/sch/i.html?_nkw={search}",
    name: "ebay",
    parser: (search) => search.replace(/[ ]/g, "+"),
  },
  {
    bang: "sp",
    action: "https://open.spotify.com/search/{search}",
    name: "spotify",
    parser: (search) => encodeURIComponent(search),
  },
];

export const apps = [
  { name: "protonmail", href: "https://protonmail.com" },
  { name: "discord", href: "https://discordapp.com" },
  { name: "github", href: "https://github.com" },
  { name: "gitlab", href: "https://gitlab.com" },
  { name: "xda", href: "https://www.xda-developers.com" },
  { name: "paypal", href: "https://www.paypal.com/pt/home" },
];
