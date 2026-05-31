import { useState, useEffect, useRef } from "react";
import ToolsPage from "./ToolsPage";
import AuditPage from './AuditPage';
import AboutPage from './AboutPage';
import FindUsPage from './FindUsPage';
import PodcastPage from './PodcastPage';
import TravelPage from './TravelPage';

const NAV_LINKS = ["Home", "Tools We Use", "Work With Us", "App", "Find Us", "Podcast", "Travel", "Book", "About"];
const BUZZSPROUT_RSS = "https://feeds.buzzsprout.com/2592972.rss";
const YOUTUBE_UPLOADS_PLAYLIST = "UU4P62EIdue26eTmidTzg9Pw"; // UC UU = channel's uploads playlist
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@BuyYourKidsAHousePodcast";
// Mailchimp form credentials
const MAILCHIMP_U = "233ec063ffa02400e45e1fdf1";
const MAILCHIMP_LIST_ID = "8bda1dd6ab";
const MAILCHIMP_URL = "https://buyyourkidsahouse.us19.list-manage.com/subscribe/post";

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

const APP_MODULES = [
  { icon: "", title: "Budget Tracker", desc: "Live 50-30-20 tracking synced to your bank accounts." },
  { icon: "", title: "Investment Tracker", desc: "Watch your portfolio grow toward your Forever Number." },
  { icon: "", title: "Retirement Goal", desc: "Target amount, timeline, monthly contribution needed." },
  { icon: "", title: "Kids House Fund", desc: "Project future home prices and what to invest today." },
  { icon: "", title: "Forever Fund", desc: "Grow until returns cover your car and mortgage forever." },
];

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>{children}</div>
  );
}

function EmailCapture({
  label = "Get Free Access",
  placeholder = "your@email.com",
  dark = false,
  formId,
  successMessage = " Check your inbox your free tool is on its way!",
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | done | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email.");
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");
    try {
const body = new URLSearchParams();
              body.append("u", MAILCHIMP_U);
              body.append("id", MAILCHIMP_LIST_ID);
              body.append("EMAIL", email);
              await fetch(MAILCHIMP_URL, {
                          method: "POST",
                          body: body.toString(),
                          mode: "no-cors",
              });
              setStatus("done");
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#C9973A", padding: "12px 0" }}>
        {successMessage}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") handleSubmit(); }}
          placeholder={placeholder}
          disabled={status === "submitting"}
          style={{
            flex: 1,
            padding: "13px 18px",
            borderRadius: 10,
            border: dark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(26,43,74,0.2)",
            background: dark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.9)",
            color: dark ? "#E8D5A3" : "#1A2B4A",
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 14,
            outline: "none",
          }}
        />
        <button
          onClick={handleSubmit}
          disabled={status === "submitting"}
          style={{
            padding: "13px 22px",
            borderRadius: 10,
            border: "none",
            cursor: status === "submitting" ? "not-allowed" : "pointer",
            background: "linear-gradient(135deg,#C9973A,#A07828)",
            color: "#0D1B2E",
            fontFamily: "'DM Sans',sans-serif",
            fontWeight: 700,
            fontSize: 14,
            whiteSpace: "nowrap",
            boxShadow: "0 4px 20px rgba(201,151,58,0.35)",
            opacity: status === "submitting" ? 0.7 : 1,
          }}
        >
          {status === "submitting" ? "Sending" : label}
        </button>
      </div>
      {status === "error" && (
        <div style={{ marginTop: 8, fontSize: 12, color: "#E89A9A", fontFamily: "'DM Sans',sans-serif" }}>
          {errorMsg}
        </div>
      )}
    </div>
  );
}

export default function Website() {
  const scrollY = useScrollY();
  const [mobileMenu, setMobileMenu] = useState(false);

  const isToolsPage = window.location.pathname.startsWith('/tools');
  const isAuditPage = window.location.pathname.startsWith('/audit');
  const isAboutPage = window.location.pathname.startsWith('/about');
  const isFindUsPage = window.location.pathname.startsWith('/find-us');
  const isPodcastPage = window.location.pathname === '/podcast';
  const isTravelPage = window.location.pathname === '/travel';

  const [episodes, setEpisodes] = useState(null); // null = loading, [] = error/empty

  useEffect(() => {
    fetch(BUZZSPROUT_RSS)
      .then(r => r.text())
      .then(text => {
        const doc = new DOMParser().parseFromString(text, "text/xml");
        const items = Array.from(doc.querySelectorAll("item")).slice(0, 8);
        const parsed = items.map((item, idx) => {
          const get = sel => item.querySelector(sel)?.textContent?.trim() || "";
          const dur = get("duration") || "";
          let mins = 0;
          if (dur.includes(":")) {
            const parts = dur.split(":").map(Number);
            mins = parts.length === 3
              ? Math.round(parts[0] * 60 + parts[1] + parts[2] / 60)
              : Math.round(parts[0] + parts[1] / 60);
          } else if (dur) {
            mins = Math.round(parseInt(dur) / 60);
          }
          return {
            title: get("title"),
            mins: mins || null,
            link: get("link") || get("guid"),
            ep: String(items.length - idx).padStart(3, "0"),
          };
        });
        setEpisodes(parsed);
      })
      .catch(() => setEpisodes([]));
  }, []);

  return (
    <div style={{ background: "#060E1A", color: "#CBD5E8", fontFamily: "'DM Sans',sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: rgba(201,151,58,0.3); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #060E1A; }
        ::-webkit-scrollbar-thumb { background: #C9973A; border-radius: 3px; }
        .nav-link { cursor: pointer; font-family: 'DM Sans',sans-serif; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #5A6B85; transition: color 0.2s; padding: 6px 0; border-bottom: 1px solid transparent; }
        .nav-link:hover { color: #C9973A; border-bottom-color: rgba(201,151,58,0.4); }
        .ep-row { transition: background 0.2s; cursor: pointer; }
        .ep-row:hover { background: rgba(201,151,58,0.06) !important; }
        .platform-btn { transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; }
        .platform-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.4) !important; }
        .tool-card { transition: transform 0.25s, border-color 0.25s; }
        .tool-card:hover { transform: translateY(-6px); }
        .module-card { transition: background 0.2s, transform 0.2s; }
        .module-card:hover { background: rgba(255,255,255,0.07) !important; transform: translateY(-3px); }
        .cta-btn { transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(201,151,58,0.45) !important; }
        .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; flex-direction: column; gap: 5px; align-items: center; justify-content: center; }
        .hamburger span { display: block; width: 24px; height: 2px; background: #E8D5A3; transition: all 0.3s; border-radius: 2px; }
        .mobile-drawer { display: none; }
        .mobile-drawer .nav-link { font-size: 16px; padding: 12px 0; color: #CBD5E8; border-bottom: 1px solid rgba(255,255,255,0.06); }
        @media (max-width: 768px) {
          .nav-pad { padding: 0 20px !important; }
          .nav-inner { height: 60px !important; }
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .hamburger { display: flex !important; }
          .mobile-drawer { display: ${mobileMenu ? "flex" : "none"} !important; flex-direction: column; padding: 20px 24px; background: rgba(6,14,26,0.98); border-bottom: 1px solid rgba(255,255,255,0.06); position: fixed; top: 60px; left: 0; right: 0; z-index: 99; backdrop-filter: blur(20px); }
          .section-pad { padding: 60px 20px !important; }
          .hero-section { padding: 100px 20px 60px !important; min-height: auto !important; }
          .g-hero { grid-template-columns: 1fr !important; gap: 40px !important; }
          .h-hero { font-size: 40px !important; line-height: 1.1 !important; }
          .hero-stats { gap: 22px !important; }
          .stat-num { font-size: 26px !important; }
          .forever-amount { font-size: 40px !important; }
          .h-section { font-size: 32px !important; line-height: 1.15 !important; }
          .h-book { font-size: 38px !important; }
          .h-final { font-size: 36px !important; line-height: 1.15 !important; }
          .g-2col { grid-template-columns: 1fr !important; gap: 20px !important; }
          .g-5col { grid-template-columns: repeat(2, 1fr) !important; }
          .pricing-tiers { flex-wrap: wrap !important; gap: 8px !important; }
          .pricing-tiers > div { min-width: 90px !important; padding: 12px !important; flex: 1 !important; }
          .footer-flex { flex-direction: column !important; gap: 20px !important; text-align: center !important; }
          .footer-flex > div:last-child { flex-wrap: wrap !important; justify-content: center !important; gap: 14px !important; }
          .tool-card-pad { padding: 24px !important; }
          .connect-panel { padding: 24px !important; flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
          .connect-panel button { width: 100% !important; }
          .ep-row-pad { padding: 16px 18px !important; }
          .book-mockup { padding: 40px 24px !important; }
          .about-card-pad { padding: 28px 20px !important; }
          .about-img { width: 140px !important; height: 140px !important; }
          .h-about { font-size: 24px !important; }
          .cta-button-row { flex-direction: column !important; align-items: stretch !important; }
          .cta-button-row > button { width: 100% !important; }
          .platform-btn { padding: 8px 14px !important; }
          .nav-logo-main { font-size: 17px !important; }
          .nav-logo-sub { font-size: 10px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav-pad" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrollY > 60 || mobileMenu ? "rgba(6,14,26,0.97)" : "transparent",
        borderBottom: scrollY > 60 ? "1px solid rgba(255,255,255,0.06)" : "none",
        backdropFilter: scrollY > 60 || mobileMenu ? "blur(20px)" : "none",
        transition: "all 0.3s",
        padding: "0 40px",
      }}>
        <div className="nav-inner" style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ cursor: "pointer" }} onClick={() => { window.location.href = "/"; }}>
            <div className="nav-logo-main" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, color: "#E8D5A3", fontWeight: 700, letterSpacing: "0.01em", lineHeight: 1 }}>Buy Your Kids</div>
            <div className="nav-logo-sub" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, color: "#C9973A", letterSpacing: "0.25em", textTransform: "uppercase" }}>A House</div>
          </div>
          <div className="nav-links-desktop" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {NAV_LINKS.map(l => <span key={l} className="nav-link" style={{cursor:"pointer"}} onClick={() => {
              if (l === "Home") window.location.href = "/";
              if (l === "Tools We Use") window.location.href = "/tools";
              if (l === "Work With Us") window.location.href = "/audit";
              if (l === "About") window.location.href = "/about";
                        if (l === "Find Us") window.location.href = "/find-us";
        if (l === "Podcast") window.location.href = "/podcast";
        if (l === "Travel") window.location.href = "/travel";
              if (l === "App") window.open("https://app.buyyourkidsahouse.com", "_blank");
            }}>{l}</span>)}
            <button className="cta-btn nav-cta-desktop"
              onClick={() => window.open("https://app.buyyourkidsahouse.com", "_blank")}
              style={{
                padding: "9px 22px", borderRadius: 8, border: "none",
                background: "linear-gradient(135deg,#C9973A,#A07828)",
                color: "#0D1B2E", fontFamily: "'DM Sans',sans-serif",
                fontWeight: 700, fontSize: 13, boxShadow: "0 4px 20px rgba(201,151,58,0.3)",
              }}>Try the App</button>
          </div>
          <button className="hamburger" aria-label="Menu" onClick={() => setMobileMenu(!mobileMenu)} >
            <span style={{ transform: mobileMenu ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span style={{ opacity: mobileMenu ? 0 : 1 }} />
            <span style={{ transform: mobileMenu ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className="mobile-drawer">
        {NAV_LINKS.map(l => (
          <span key={l} className="nav-link" onClick={() => {
            setMobileMenu(false);
            if (l === "Home") window.location.href = "/";
            if (l === "Tools We Use") window.location.href = "/tools";
            if (l === "Work With Us") window.location.href = "/audit";
            if (l === "About") window.location.href = "/about";
                            if (l === "Find Us") window.location.href = "/find-us";
        if (l === "Podcast") window.location.href = "/podcast";
        if (l === "Travel") window.location.href = "/travel";
            if (l === "App") window.open("https://app.buyyourkidsahouse.com", "_blank");
          }}>{l}</span>
        ))}
        <button className="cta-btn" onClick={() => { setMobileMenu(false); window.open("https://app.buyyourkidsahouse.com", "_blank"); }} style={{
          marginTop: 12, padding: "13px 22px", borderRadius: 10, border: "none",
          background: "linear-gradient(135deg,#C9973A,#A07828)",
          color: "#0D1B2E", fontFamily: "'DM Sans',sans-serif",
          fontWeight: 700, fontSize: 14, boxShadow: "0 4px 20px rgba(201,151,58,0.3)",
        }}>Try the App</button>
      </div>

      {/* PAGE ROUTING */}
      {isToolsPage && <ToolsPage />}
      {isAuditPage && <AuditPage />}
      {isAboutPage && <AboutPage />}
      {isFindUsPage && <FindUsPage />}
      {isPodcastPage && <PodcastPage />}
      {isTravelPage && <TravelPage />}

      {!isToolsPage && !isAuditPage && !isAboutPage && !isFindUsPage && !isPodcastPage && !isTravelPage && <>

      {/* HERO */}
      <section className="hero-section" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", padding: "120px 40px 80px", overflow: "hidden" }}>
        {/* Background orbs */}
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,151,58,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(36,113,163,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
        {/* Subtle grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(201,151,58,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,151,58,0.03) 1px,transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" }} />

        <div className="g-hero" style={{ maxWidth: 1140, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 20, background: "rgba(201,151,58,0.1)", border: "1px solid rgba(201,151,58,0.25)", marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9973A", display: "inline-block" }} />
              <span style={{ fontSize: 11, color: "#C9973A", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>The Generational Wealth Podcast</span>
            </div>
            <h1 className="h-hero" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 68, lineHeight: 1.05, color: "#E8D5A3", fontWeight: 700, marginBottom: 24 }}>
              Help Your Kids<br />
              <span style={{ fontStyle: "italic", color: "#C9973A" }}>Own a Home</span><br />
              Before They Need One.
            </h1>
            <p style={{ fontSize: 17, color: "#5A6B85", lineHeight: 1.75, maxWidth: 480, marginBottom: 40 }}>
              The tools, strategies, and community to build generational wealth starting with a plan to put your kids in a home before they ever ask for help.
            </p>
            <div className="cta-button-row" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
              <button className="cta-btn" style={{ padding: "15px 32px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#C9973A,#A07828)", color: "#0D1B2E", fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 15, boxShadow: "0 8px 32px rgba(201,151,58,0.3)", }}>Start With Free Tools </button>
              <button className="cta-btn" style={{ padding: "15px 32px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#CBD5E8", fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: 15, cursor: "pointer", }}>Listen to the Podcast</button>
              <button className="cta-btn" onClick={() => window.open("https://app.buyyourkidsahouse.com", "_blank")} style={{ padding: "15px 32px", borderRadius: 12, border: "none", background: "#C9973A", color: "#0A1628", fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 15, boxShadow: "0 8px 32px rgba(201,151,58,0.3)" }}>Launch the App</button>
            </div>
            <div className="hero-stats" style={{ display: "flex", gap: 40 }}>
              {[["47+", "Episodes"], ["12K+", "Subscribers"], ["Free", "Tools"]].map(([n, l]) => (
                <div key={l}>
                  <div className="stat-num" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, color: "#E8D5A3", fontWeight: 700 }}>{n}</div>
                  <div style={{ fontSize: 12, color: "#3A4D65", textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero card */}
          <div style={{ position: "relative" }}>
            <div style={{ background: "linear-gradient(135deg,rgba(201,151,58,0.12),rgba(201,151,58,0.03))", border: "1px solid rgba(201,151,58,0.2)", borderRadius: 24, padding: 36 }}>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "#C9973A", marginBottom: 10 }}>Your Forever Number</div>
              <div className="forever-amount" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 52, color: "#E8D5A3", fontWeight: 700, marginBottom: 6 }}>$85,714</div>
              <div style={{ fontSize: 13, color: "#5A6B85", marginBottom: 28 }}>Invest this earn $500/mo forever without touching principal</div>
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: "#5A6B85" }}>Progress to Forever Number</span>
                  <span style={{ fontSize: 12, color: "#C9973A", fontWeight: 600 }}>49.7%</span>
                </div>
                <div style={{ height: 8, background: "rgba(255,255,255,0.07)", borderRadius: 4 }}>
                  <div style={{ height: "100%", width: "49.7%", background: "linear-gradient(90deg,#C9973A,#E8D5A3)", borderRadius: 4 }} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  ["Current Portfolio", "$42,580"],
                  ["Monthly Return", "$248"],
                  ["Car Covered in", "Year 6"],
                  ["Kids Fund", "On Track "],
                ].map(([l, v]) => (
                  <div key={l} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "12px 14px" }}>
                    <div style={{ fontSize: 10, color: "#3A4D65", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{l}</div>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, color: "#CBD5E8", fontWeight: 600 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "absolute", top: -20, right: -20, background: "linear-gradient(135deg,#C9973A,#A07828)", borderRadius: 12, padding: "10px 16px", fontSize: 12, color: "#0D1B2E", fontWeight: 700, boxShadow: "0 8px 24px rgba(201,151,58,0.4)" }}>
              Live Dashboard Preview
            </div>
          </div>
        </div>
      </section>

      {/* FREE TOOLS */}
      <section className="section-pad" style={{ padding: "100px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ fontSize: 11, color: "#C9973A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>Free Resources</div>
              <h2 className="h-section" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, color: "#E8D5A3", fontWeight: 700, marginBottom: 14 }}>Start Here It's Free</h2>
              <p style={{ fontSize: 16, color: "#5A6B85", maxWidth: 480, margin: "0 auto" }}>Two powerful Excel tools to get your finances organized today. No credit card. No catch.</p>
            </div>
          </FadeIn>
          <div className="g-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 60 }}>
            {TOOLS.map((tool, i) => (
              <FadeIn key={tool.title} delay={i * 0.15}>
                <div className="tool-card tool-card-pad" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid rgba(255,255,255,0.08)`, borderRadius: 20, padding: 36, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: -30, right: -30, fontSize: 80, opacity: 0.06 }}>{tool.icon}</div>
                  <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: 20, background: `rgba(201,151,58,0.15)`, border: `1px solid rgba(201,151,58,0.3)`, fontSize: 11, color: "#C9973A", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 20 }}>{tool.tag}</div>
                  <div style={{ fontSize: 32, marginBottom: 14 }}>{tool.icon}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, color: "#E8D5A3", fontWeight: 700, marginBottom: 10 }}>{tool.title}</h3>
                  <p style={{ fontSize: 14, color: "#5A6B85", lineHeight: 1.7, marginBottom: 28 }}>{tool.desc}</p>
                  <EmailCapture label="Download Free" placeholder="Enter your email" dark formId={MAILCHIMP_LIST_ID} successMessage=" Check your inbox your tool is on its way!" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* THE APP */}
      <section className="section-pad" style={{ padding: "100px 40px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
              <div>
                <div style={{ fontSize: 11, color: "#C9973A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>The Full System</div>
                <h2 className="h-section" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, color: "#E8D5A3", fontWeight: 700, maxWidth: 520 }}>One App. Five Modules. Your Entire Financial Future.</h2>
              </div>
              <div className="pricing-tiers" style={{ display: "flex", gap: 12 }}>
                {[["Free", "Manual tracking", "#3A4D65", "#1A2B4A"], ["Plus\n$9/mo", "All 5 modules", "#C9973A", "rgba(201,151,58,0.15)"], ["Pro\n$15/mo", "Live account sync", "#E8D5A3", "rgba(201,151,58,0.08)"]].map(([tier, sub, color, bg]) => (
                  <div key={tier} style={{ background: bg, border: `1px solid ${color === "#3A4D65" ? "rgba(255,255,255,0.06)" : "rgba(201,151,58,0.3)"}`, borderRadius: 14, padding: "16px 20px", textAlign: "center", minWidth: 100 }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color, fontWeight: 700, whiteSpace: "pre-line", lineHeight: 1.2 }}>{tier}</div>
                    <div style={{ fontSize: 11, color: "#3A4D65", marginTop: 6 }}>{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <div className="g-5col" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16, marginBottom: 56 }}>
            {APP_MODULES.map((m, i) => (
              <FadeIn key={m.title} delay={i * 0.1}>
                <div className="module-card" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: "24px 20px" }}>
                  <div style={{ fontSize: 28, marginBottom: 14 }}>{m.icon}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: "#E8D5A3", fontWeight: 700, marginBottom: 8 }}>{m.title}</div>
                  <div style={{ fontSize: 13, color: "#3A4D65", lineHeight: 1.6 }}>{m.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="connect-panel" style={{ background: "linear-gradient(135deg,rgba(201,151,58,0.1),rgba(201,151,58,0.03))", border: "1px solid rgba(201,151,58,0.2)", borderRadius: 20, padding: "36px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, color: "#E8D5A3", fontWeight: 700, marginBottom: 8 }}>Connect your accounts. Track automatically.</div>
                <div style={{ fontSize: 14, color: "#5A6B85" }}>Powered by Plaid bank-level security, read-only access. Your Forever Fund progress updates in real time.</div>
              </div>
              <button className="cta-btn" style={{ padding: "15px 36px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#C9973A,#A07828)", color: "#0D1B2E", fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 15, boxShadow: "0 8px 32px rgba(201,151,58,0.3)", whiteSpace: "nowrap", }} onClick={() => window.open("https://app.buyyourkidsahouse.com", "_blank")}>Start Free Upgrade Anytime </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PODCAST */}
      <section className="section-pad" style={{ padding: "100px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ fontSize: 11, color: "#C9973A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>The Podcast</div>
              <h2 className="h-section" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, color: "#E8D5A3", fontWeight: 700, marginBottom: 14 }}>New Episodes Every Week</h2>
              <p style={{ fontSize: 16, color: "#5A6B85", maxWidth: 480, margin: "0 auto 36px" }}>Real strategies for parents who want to give their kids a head start not just talk about it.</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                {PLATFORMS.map(p => (
                  <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="platform-btn" style={{ padding: "10px 20px", borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.3)", textDecoration: "none", }}>
                    <span style={{ fontSize: 16 }}>{p.icon}</span>
                    <span style={{ fontSize: 13, color: "#8B9BB4", fontWeight: 500 }}>{p.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, overflow: "hidden" }}>
            {episodes === null ? (
              <div style={{ padding: "32px 28px", textAlign: "center", color: "#5A6B85", fontSize: 14 }}>Loading episodes</div>
            ) : episodes.length === 0 ? (
              <div style={{ padding: "32px 28px", textAlign: "center", color: "#5A6B85", fontSize: 14 }}>
                Couldn't load episodes. <a href={`https://www.buzzsprout.com/2592972`} target="_blank" rel="noopener noreferrer" style={{ color: "#C9973A" }}>Listen on Buzzsprout </a>
              </div>
            ) : (
              episodes.map((ep, i) => (
                <FadeIn key={ep.ep + i} delay={i * 0.07}>
                  <a href={ep.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                    <div className="ep-row ep-row-pad" style={{ padding: "20px 28px", borderBottom: i < episodes.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", display: "flex", alignItems: "center", gap: 20, background: "transparent" }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 14, color: "#5A6B85", transition: "all 0.2s" }}> </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 11, color: "#3A4D65", marginBottom: 4, letterSpacing: "0.06em" }}>EP. {ep.ep}</div>
                        <div style={{ fontSize: 15, color: "#CBD5E8", fontWeight: 500 }}>{ep.title}</div>
                      </div>
                      {ep.mins ? <div style={{ fontSize: 12, color: "#3A4D65", flexShrink: 0 }}>{ep.mins} min</div> : null}
                    </div>
                  </a>
                </FadeIn>
              ))
            )}
          </div>
        </div>
      </section>

      {/* YOUTUBE */}
      <section className="section-pad" style={{ padding: "100px 40px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ fontSize: 11, color: "#C9973A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>Watch on YouTube</div>
              <h2 className="h-section" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, color: "#E8D5A3", fontWeight: 700, marginBottom: 14 }}>See the Conversations</h2>
              <p style={{ fontSize: 16, color: "#5A6B85", maxWidth: 540, margin: "0 auto" }}>Every episode, available as video. Subscribe to never miss a release.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 12px 48px rgba(0,0,0,0.4)" }}>
              <iframe
                src={`https://www.youtube.com/embed/videoseries?list=${YOUTUBE_UPLOADS_PLAYLIST}`}
                title="Buy Your Kids A House Podcast YouTube"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
              />
            </div>
          </FadeIn>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="cta-btn" style={{ display: "inline-block", padding: "13px 28px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#CBD5E8", fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: 14, textDecoration: "none", }}>Subscribe on YouTube </a>
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section className="section-pad" style={{ padding: "100px 40px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="g-2col" style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <FadeIn>
            <div>
              <div style={{ fontSize: 11, color: "#C9973A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>Coming Soon</div>
              <h2 className="h-book" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 52, color: "#E8D5A3", fontWeight: 700, lineHeight: 1.1, marginBottom: 20 }}>The Book is<br /><span style={{ fontStyle: "italic" }}>Coming.</span></h2>
              <p style={{ fontSize: 16, color: "#5A6B85", lineHeight: 1.75, marginBottom: 32 }}>
                Everything you've heard on the podcast the Forever Fund, the Kids House strategy, the debt payoff system in one complete guide for parents who want to build real generational wealth.
              </p>
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 13, color: "#8B9BB4", marginBottom: 14 }}>Join the waitlist. Get early access + founding reader pricing.</div>
                <EmailCapture label="Join Waitlist" placeholder="your@email.com" dark formId={MAILCHIMP_LIST_ID} successMessage=" You're on the waitlist we'll be in touch." />
              </div>
              <div style={{ fontSize: 12, color: "#3A4D65" }}>1,200+ already on the waitlist</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div style={{ position: "relative" }}>
              {/* Book mockup */}
              <div className="book-mockup" style={{ background: "linear-gradient(135deg,#1A2B4A,#0D1B2E)", border: "1px solid rgba(201,151,58,0.3)", borderRadius: 8, padding: "60px 40px", textAlign: "center", boxShadow: "-12px 12px 40px rgba(0,0,0,0.5), 0 0 60px rgba(201,151,58,0.08)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg,#C9973A,#E8D5A3)" }} />
                <div style={{ fontSize: 11, color: "#C9973A", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 24 }}>Buy Your Kids A House</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 38, color: "#E8D5A3", fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}>
                  Buy Your<br />Kids<br /><span style={{ fontStyle: "italic" }}>A House</span>
                </div>
                <div style={{ width: 40, height: 2, background: "#C9973A", margin: "0 auto 20px" }} />
                <div style={{ fontSize: 12, color: "#5A6B85", letterSpacing: "0.06em" }}>The Complete Generational Wealth Playbook</div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,transparent,#C9973A,transparent)" }} />
              </div>
              <div style={{ position: "absolute", top: 20, right: -16, background: "linear-gradient(135deg,#C9973A,#A07828)", borderRadius: 10, padding: "10px 16px", fontSize: 12, color: "#0D1B2E", fontWeight: 700, boxShadow: "0 6px 20px rgba(201,151,58,0.4)" }}>Coming Late 2026</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* APP CALLOUT */}
      <section className="section-pad" style={{ padding: "100px 40px", background: "#0A1628", borderTop: "1px solid rgba(201,151,58,0.2)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <div style={{ fontSize: 11, color: "#C9973A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>Now Available</div>
            <h2 className="h-section" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, color: "#E8D5A3", fontWeight: 700, marginBottom: 20 }}>The BYKAH App</h2>
            <p style={{ fontSize: 17, color: "#5A6B85", lineHeight: 1.75, maxWidth: 560, margin: "0 auto 40px" }}>Track your Forever Fund, budget your 50/30/20, run the house and car calculators - all in one place.</p>
            <button className="cta-btn" onClick={() => window.open("https://app.buyyourkidsahouse.com", "_blank")} style={{ padding: "16px 44px", borderRadius: 12, border: "none", background: "#C9973A", color: "#0A1628", fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 16, boxShadow: "0 8px 32px rgba(201,151,58,0.35)" }}>Open the App</button>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-pad" style={{ padding: "100px 40px", borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ fontSize: 11, color: "#C9973A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 20 }}>Start Today</div>
            <h2 className="h-final" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 52, color: "#E8D5A3", fontWeight: 700, lineHeight: 1.1, marginBottom: 20 }}>
              The best time to start<br />was when they were born.<br /><span style={{ fontStyle: "italic", color: "#C9973A" }}>The second best is now.</span>
            </h2>
            <p style={{ fontSize: 16, color: "#5A6B85", lineHeight: 1.75, marginBottom: 44 }}>Download the free tools, listen to the podcast, and build the plan that changes your family's future.</p>
            <div className="cta-button-row" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="cta-btn" style={{ padding: "16px 40px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#C9973A,#A07828)", color: "#0D1B2E", fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 16, boxShadow: "0 8px 32px rgba(201,151,58,0.35)", }}>Get the Free Tools </button>
              <button className="cta-btn" style={{ padding: "16px 40px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#CBD5E8", fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: 16, cursor: "pointer", }}>Try the App Free</button>
            </div>
          </FadeIn>
        </div>
      </section>

      </>}

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "40px 24px" }}>
        <div className="footer-flex" style={{ maxWidth: 1140, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: "#E8D5A3", fontWeight: 700 }}>Buy Your Kids A House</div>
            <div style={{ fontSize: 12, color: "#3A4D65", marginTop: 4 }}> 2025 For educational purposes only. Not financial advice.</div>
          </div>
          <div style={{ display: "flex", gap: 32 }}>
            {["Privacy", "Terms", "Contact", "YouTube", "Instagram"].map(l => (
              <span key={l} style={{ fontSize: 13, color: "#3A4D65", cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#C9973A"}
                onMouseLeave={e => e.target.style.color = "#3A4D65"}>{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
