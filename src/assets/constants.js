import {
  HiChartBar,
  HiOutlineHome,
  HiOutlineLocationMarker,
  HiFire,
  HiMusicNote,
} from "react-icons/hi";

import { BsMusicNoteList } from "react-icons/bs";

export const genres = [
  { title: "Pop", value: "POP" },
  { title: "Hip-Hop", value: "HIP_HOP_RAP" },
  { title: "Dance", value: "DANCE" },
  { title: "Electronic", value: "ELECTRONIC" },
  { title: "Soul", value: "SOUL_RNB" },
  { title: "Alternative", value: "ALTERNATIVE" },
  { title: "Rock", value: "ROCK" },
  { title: "Latin", value: "LATIN" },
  { title: "Film", value: "FILM_TV" },
  { title: "Country", value: "COUNTRY" },
  { title: "Worldwide", value: "WORLDWIDE" },
  { title: "Reggae", value: "REGGAE_DANCE_HALL" },
  { title: "House", value: "HOUSE" },
  { title: "K-Pop", value: "K_POP" },
];

export const links = [
  { name: "Home", to: "/", icon: HiOutlineHome },
  { name: "Discover", to: "/discover", icon: HiMusicNote },
  // { name: "Around You", to: "/around-you", icon: HiOutlineLocationMarker },
  // { name: "Top Artists", to: "/top-artists", icon: HiFire },
  { name: "Top Charts", to: "/top-charts", icon: HiChartBar },
  {
    name: "Your Library",
    to: "/your-library",
    icon: BsMusicNoteList,
    subLinks: [
      { name: "Stream", to: "/your-library/stream" },
      { name: "Playlists", to: "/your-library/playlists" },
      { name: "Likes", to: "/your-library/likes" },
    ],
  },
];
