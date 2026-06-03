export default function FreeToolsPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "80px 40px 60px", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#C9973A", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>No Email Required</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 60, color: "#E8D5A3", fontWeight: 700, lineHeight: 1.05, marginBottom: 20 }}>Free Tools</h1>
          <p style={{ fontSize: 17, color: "#5A6B85", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>Two powerful spreadsheets to get your family's finances organized today. Download instantly — no sign-up needed.</p>
        </div>
      </section>

      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>

          <div className="tool-card tool-card-pad" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 36, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -30, right: -30, fontSize: 100, opacity: 0.05 }}>📊</div>
            <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: 20, background: "rgba(201,151,58,0.15)", border: "1px solid rgba(201,151,58,0.3)", fontSize: 11, color: "#C9973A", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 20 }}>Free Download</div>
            <div style={{ fontSize: 40, marginBottom: 16 }}>📊</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, color: "#E8D5A3", fontWeight: 700, marginBottom: 12 }}>50/30/20 Budget Spreadsheet</h2>
            <p style={{ fontSize: 14, color: "#5A6B85", lineHeight: 1.75, marginBottom: 32 }}>The foundation of financial clarity. Know exactly where every dollar goes each month — needs, wants, and savings — all laid out automatically.</p>
            <a href="/tools/50-30-20-budget-bykah.xlsx" download style={{ display: "inline-block", padding: "14px 28px", borderRadius: 10, background: "linear-gradient(135deg,#C9973A,#A07828)", color: "#0D1B2E", fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 14, boxShadow: "0 4px 20px rgba(201,151,58,0.35)", textDecoration: "none" }}>↓ Download Spreadsheet</a>
          </div>

          <div className="tool-card tool-card-pad" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 36, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -30, right: -30, fontSize: 100, opacity: 0.05 }}>💳</div>
            <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: 20, background: "rgba(201,151,58,0.15)", border: "1px solid rgba(201,151,58,0.3)", fontSize: 11, color: "#C9973A", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 20 }}>Free Download</div>
            <div style={{ fontSize: 40, marginBottom: 16 }}>💳</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, color: "#E8D5A3", fontWeight: 700, marginBottom: 12 }}>Debt Payoff Tracker</h2>
            <p style={{ fontSize: 14, color: "#5A6B85", lineHeight: 1.75, marginBottom: 32 }}>Snowball vs. avalanche — see which method gets you debt-free faster and exactly how much interest you'll save. Know your freedom date.</p>
            <a href="/tools/debt-payoff-bykah.xlsx" download style={{ display: "inline-block", padding: "14px 28px", borderRadius: 10, background: "linear-gradient(135deg,#C9973A,#A07828)", color: "#0D1B2E", fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 14, boxShadow: "0 4px 20px rgba(201,151,58,0.35)", textDecoration: "none" }}>↓ Download Tracker</a>
          </div>

        </div>
      </section>
    </div>
  );
}
