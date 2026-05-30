const GOLD = "#C9973A";
const GOLD_LIGHT = "#E8D5A3";
const DARK_BG = "#060E1A";

const PODCAST_PLATFORMS = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/6qbo9eGFKCmqoIdNsDt9c0",
    color: "#1DB954",
    bg: "rgba(29,185,84,0.08)",
    border: "rgba(29,185,84,0.25)",
    desc: "Listen on Spotify",
    emoji: "ðµ",
  },
  {
    name: "Apple Podcasts",
    url: "https://podcasts.apple.com/us/podcast/buy-your-kids-a-house/id1875387591",
    color: "#B150E2",
    bg: "rgba(177,80,226,0.08)",
    border: "rgba(177,80,226,0.25)",
    desc: "Listen on Apple Podcasts",
    emoji: "ð",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@BuyYourKidsAHousePodcast",
    color: "#FF4444",
    bg: "rgba(255,68,68,0.08)",
    border: "rgba(255,68,68,0.25)",
    desc: "Watch on YouTube",
    emoji: "â¶",
  },
];

const SOCIAL_LINKS = [
  {
    name: "YouTube",
    handle: "@BuyYourKidsAHousePodcast",
    url: "https://www.youtube.com/@BuyYourKidsAHousePodcast",
    color: "#FF4444",
    bg: "rgba(255,68,68,0.06)",
    border: "rgba(255,68,68,0.2)",
    emoji: "ðº",
  },
  {
    name: "Instagram",
    handle: "@buyyourkidsahouse",
    url: "https://www.instagram.com/buyyourkidsahouse",
    color: "#E1306C",
    bg: "rgba(225,48,108,0.06)",
    border: "rgba(225,48,108,0.2)",
    emoji: "ð¸",
  },
  {
    name: "TikTok",
    handle: "@buyyourkidsahouse",
    url: "https://www.tiktok.com/@buyyourkidsahouse",
    color: "#69C9D0",
    bg: "rgba(105,201,208,0.06)",
    border: "rgba(105,201,208,0.2)",
    emoji: "ð¦",
  },
  {
    name: "Facebook",
    handle: "Buy Your Kids A House",
    url: "https://www.facebook.com/buyyourkidsahouse",
    color: "#1877F2",
    bg: "rgba(24,119,242,0.06)",
    border: "rgba(24,119,242,0.2)",
    emoji: "ð¥",
  },
];

const YOUTUBE_PLAYLIST = "UU4P62EIdue26eTmidTzg9Pw";
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@BuyYourKidsAHousePodcast";

const FIND_STYLES = [
  "@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');",
  ".find-platform-card { transition: transform 0.2s, box-shadow 0.2s; }",
  ".find-platform-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.5) !important; }",
  ".find-social-card { transition: transform 0.2s; }",
  ".find-social-card:hover { transform: translateY(-3px); }",
  "@media (max-width: 768px) {",
  "  .find-hero h1 { font-size: 40px !important; }",
  "  .find-h2 { font-size: 32px !important; }",
  "  .find-platform-grid { grid-template-columns: 1fr !important; }",
  "  .find-social-grid { grid-template-columns: repeat(2,1fr) !important; }",
  "  .find-section-pad { padding: 60px 20px !important; }",
  "}",
].join(" ");

export default function FindUsPage() {
  return (
    <div style={{ background: DARK_BG, color: "#CBD5E8", fontFamily: "'DM Sans',sans-serif", minHeight: "100vh", paddingTop: 80 }}>
      <style dangerouslySetInnerHTML={{ __html: FIND_STYLES }} />

      {/* HERO */}
      <section className="find-hero find-section-pad" style={{ padding: "80px 40px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,151,58,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(36,113,163,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 20, background: "rgba(201,151,58,0.1)", border: "1px solid rgba(201,151,58,0.25)", marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD, display: "inline-block" }} />
            <span style={{ fontSize: 11, color: GOLD, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>The Generational Wealth Podcast</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 64, lineHeight: 1.05, color: GOLD_LIGHT, fontWeight: 700, marginBottom: 20 }}>
            Where to <span style={{ fontStyle: "italic", color: GOLD }}>Find Us</span>
          </h1>
          <p style={{ fontSize: 17, color: "#5A6B85", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>
            Listen, watch, and follow along - wherever you get your content, we are there.
          </p>
        </div>
      </section>

      {/* LISTEN TO THE PODCAST */}
      <section className="find-section-pad" style={{ padding: "80px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: GOLD, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>Listen</div>
            <h2 className="find-h2" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, color: GOLD_LIGHT, fontWeight: 700, marginBottom: 14 }}>Listen to the Podcast</h2>
            <p style={{ fontSize: 16, color: "#5A6B85", maxWidth: 460, margin: "0 auto" }}>New episodes every week. Subscribe on your favorite platform to never miss a release.</p>
          </div>
          <div className="find-platform-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {PODCAST_PLATFORMS.map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="find-platform-card" style={{ display: "block", background: p.bg, border: "1px solid " + p.border, borderRadius: 20, padding: "40px 28px", textDecoration: "none", textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{p.emoji}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 26, color: GOLD_LIGHT, fontWeight: 700, marginBottom: 8 }}>{p.name}</div>
                <div style={{ fontSize: 14, color: p.color, fontWeight: 500 }}>{p.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WATCH ON YOUTUBE */}
      <section className="find-section-pad" style={{ padding: "80px 40px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: GOLD, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>Watch</div>
            <h2 className="find-h2" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, color: GOLD_LIGHT, fontWeight: 700, marginBottom: 14 }}>Watch on YouTube</h2>
            <p style={{ fontSize: 16, color: "#5A6B85", maxWidth: 500, margin: "0 auto" }}>Every episode available as full video. Subscribe to the channel and watch as we release new content.</p>
          </div>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 12px 48px rgba(0,0,0,0.4)", marginBottom: 32 }}>
            <iframe
              src={"https://www.youtube.com/embed/videoseries?list=" + YOUTUBE_PLAYLIST}
              title="Buy Your Kids A House - YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "14px 32px", borderRadius: 12, background: "rgba(255,68,68,0.1)", border: "1px solid rgba(255,68,68,0.3)", color: "#FF4444", fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* FOLLOW ALONG */}
      <section className="find-section-pad" style={{ padding: "80px 40px 100px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: GOLD, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>Follow Along</div>
            <h2 className="find-h2" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, color: GOLD_LIGHT, fontWeight: 700, marginBottom: 14 }}>Stay Connected</h2>
            <p style={{ fontSize: 16, color: "#5A6B85", maxWidth: 460, margin: "0 auto" }}>Behind-the-scenes content, tips, and updates between episodes.</p>
          </div>
          <div className="find-social-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {SOCIAL_LINKS.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="find-social-card" style={{ display: "block", background: s.bg, border: "1px solid " + s.border, borderRadius: 16, padding: "32px 20px", textDecoration: "none", textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{s.emoji}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, color: GOLD_LIGHT, fontWeight: 700, marginBottom: 6 }}>{s.name}</div>
                <div style={{ fontSize: 13, color: s.color, fontWeight: 500 }}>{s.handle}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
