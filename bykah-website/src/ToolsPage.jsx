export default function ToolsPage() {
  var cats = [
    { icon: "💳", name: "Credit Card System", note: "Affiliate links coming soon — partnerships being finalized.", tools: [
        { name: "Amex Gold", desc: "Best for dining and groceries (4x points). Our everyday spending card for maximizing rewards on food.", cta: "Apply Now →", href: "#" },
        { name: "Chase Sapphire Preferred", desc: "Best for travel bookings and points transfers. The anchor of any travel rewards setup.", cta: "Apply Now →", href: "#" },
        { name: "Capital One Venture", desc: "Simple 2x miles on everything. The catch-all card that never lets you leave points on the table.", cta: "Apply Now →", href: "#" }
      ]},
    { icon: "🛡️", name: "Life Insurance", note: "Affiliate link coming soon.", tools: [
        { name: "Ethos Life", desc: "Term life insurance with no medical exam for most people. Instant online quotes. If you have kids or a mortgage, this is the move.", cta: "Get a Quote →", href: "#" }
      ]},
    { icon: "📈", name: "Investing", note: null, tools: [
        { name: "Robinhood", desc: "Commission-free stocks, ETFs, and crypto. A solid entry point to start building your investment portfolio.", cta: "Start Investing →", href: "#" },
        { name: "Fidelity", desc: "Where we keep long-term retirement money. Zero-fee index funds and one of the most trusted names in finance.", cta: "Open an Account →", href: "https://www.fidelity.com" }
      ]},
    { icon: "✈️", name: "Travel", note: "Affiliate links coming soon for Delta and Marriott.", tools: [
        { name: "Delta Air Lines", desc: "Our go-to airline for domestic and international travel. SkyMiles add up faster than you'd think.", cta: "Book with Delta →", href: "#" },
        { name: "Marriott Bonvoy", desc: "Our hotel loyalty program of choice. Points are flexible, properties are everywhere.", cta: "Book a Stay →", href: "#" },
        { name: "Viator", desc: "Best way to book tours and experiences at your destination. Turns a trip into a memory.", cta: "Explore Experiences →", href: "https://www.viator.com" }
      ]},
    { icon: "🎙️", name: "Podcast & Side Hustle", note: null, tools: [
        { name: "Amazon", desc: "Where we source our podcast equipment. Everything you need to start a professional setup without breaking the bank.", cta: "Shop Our Setup →", href: "#" },
        { name: "Riverside.fm", desc: "How we record remote interviews in studio quality. If you want to start a podcast, this is what we use.", cta: "Try Riverside →", href: "#" },
        { name: "Canva Pro", desc: "Our design tool for thumbnails, social graphics, and show assets. Indispensable for content creators.", cta: "Try Canva →", href: "#" }
      ]},
    { icon: "🏃", name: "Health & Fitness", note: null, tools: [
        { name: "Runner's Warehouse", desc: "The best selection and service for running shoes and gear. Our first stop for anything running-related.", cta: "Shop Now →", href: "#" }
      ]},
    { icon: "📋", name: "Estate Planning", note: null, tools: [
        { name: "Trust & Will", desc: "Online wills and trusts, done in minutes. If you're building wealth for your kids, protecting it legally is step one.", cta: "Create Your Will →", href: "#" }
      ]},
    { icon: "💰", name: "Banking", note: null, tools: [
        { name: "Ally Bank", desc: "High-yield savings for your emergency fund and house down payment. Currently paying 4%+ APY — make your cash work while it waits.", cta: "Open an Account →", href: "https://www.ally.com" }
      ]}
  ];
  var cardStyle = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "32px", display: "flex", flexDirection: "column", gap: "16px" };
  var ctaStyle = { display: "inline-block", background: "#c9973a", color: "#0d1b2e", padding: "10px 22px", borderRadius: "10px", fontSize: "14px", fontWeight: "700", textDecoration: "none", alignSelf: "flex-start" };
  return (
    <div>
      <section style={{ padding: "80px 40px 40px", maxWidth: "1140px", margin: "0 auto" }}>
        <p style={{ color: "#c9973a", fontSize: "12px", letterSpacing: "0.15em", fontWeight: "600", textTransform: "uppercase", marginBottom: "16px" }}>RESOURCES</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 5vw, 60px)", fontWeight: "700", color: "#e8d5a3", lineHeight: "1.1", margin: "0 0 24px" }}>Tools We Use</h1>
        <p style={{ fontSize: "18px", color: "#cbd5e8", maxWidth: "620px", lineHeight: "1.65", margin: "0" }}>Everything on this page is something we actually use. No fluff — just the tools that have made a real difference in our financial lives, travel, and the work we do.</p>
      </section>
      {cats.map(function(cat) {
        return (
          <section key={cat.name} style={{ padding: "40px", maxWidth: "1140px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
              <span style={{ fontSize: "28px" }}>{cat.icon}</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: "700", color: "#e8d5a3", margin: "0" }}>{cat.name}</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
              {cat.tools.map(function(tool) {
                return (
                  <div key={tool.name} style={cardStyle}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: "700", color: "#e8d5a3", margin: "0" }}>{tool.name}</h3>
                    <p style={{ color: "#cbd5e8", fontSize: "15px", lineHeight: "1.65", margin: "0", flexGrow: "1" }}>{tool.desc}</p>
                    <a href={tool.href} style={ctaStyle}>{tool.cta}</a>
                  </div>
                );
              })}
            </div>
            {cat.note && <p style={{ color: "rgba(203,213,232,0.45)", fontSize: "13px", fontStyle: "italic", marginTop: "16px" }}>{cat.note}</p>}
          </section>
        );
      })}
      <section style={{ padding: "20px 40px 80px", maxWidth: "1140px", margin: "0 auto" }}>
        <p style={{ color: "rgba(203,213,232,0.4)", fontSize: "13px", lineHeight: "1.7", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px" }}>Some links on this page are affiliate links. We may earn a commission at no extra cost to you. We only recommend products and services we personally use and believe in.</p>
      </section>
    </div>
  );
}
