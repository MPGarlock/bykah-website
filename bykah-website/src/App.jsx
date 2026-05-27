import { useState, useEffect, useRef } from "react";
import ToolsPage from "./ToolsPage";


const NAV_LINKS = ["Tools We Use", "The App", "Podcast", "YouTube", "Book", "About"];


const BUZZSPROUT_RSS = "https://feeds.buzzsprout.com/2592972.rss";
const YOUTUBE_UPLOADS_PLAYLIST = "UU4P62EIdue26eTmidTzg9Pw"; // UC  UU = channel's uploads playlist
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@BuyYourKidsAHousePodcast";


// Kit (formerly ConvertKit) form IDs
const KIT_FORM_FREE_TOOLS = "9403068";
const KIT_FORM_BOOK_WAITLIST = "9403081";


const PLATFORMS = [
  { name: "Spotify", color: "#1DB954", icon: "", url: "https://open.spotify.com/show/6qbo9eGFKCmqoIdNsDt9c0" },
  { name: "Apple Podcasts", color: "#B150E2", icon: "", url: "https://podcasts.apple.com/us/podcast/buy-your-kids-a-house/id1875387591" },
  { name: "YouTube", color: "#FF0000", icon: "", url: "https://www.youtube.com/@BuyYourKidsAHousePodcast" },
];


const TOOLS = [
  {
    title: "50-30-20 Budget Tracker",
    desc: "The foundation. Know exactly where every dollar goes each month.",
    tag: "Free Download",
    color: "#C9973A",
    icon: "",
  },
  {
    title: "Debt Payoff Tracker",
    desc: "Snowball vs avalanche. See which method saves you more and when you'll be free.",
    tag: "Free Download",
    color: "#2471A3",
    icon: "",
  },
];

