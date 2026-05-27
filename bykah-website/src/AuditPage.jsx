import React from 'react';

export default function AuditPage() {

  const tiers = [
    {
      badge: 'MOST POPULAR',
      badgeStyle: 'bg-gold text-navy',
      title: 'Podcast Edition',
      price: '$97',
      description: 'A live 60-minute 1:1 budget audit over Zoom. Same session quality, discounted in exchange for permission to record and potentially feature your story on the podcast. Your name and sensitive details stay protected â just real numbers and real breakthroughs.',
      includes: [
        '60-min Zoom session with Matt & Andrew',
        'Custom 50/30/20 breakdown for your household',
        'Written action plan delivered within 48 hours',
        'Consent form â you control what gets published',
      ],
      cta: 'Book Podcast Edition',
      href: 'https://calendly.com/buyyourkidsahouse/50-30-20-budget-audit-podcast-edition',
      highlight: true,
      comingSoon: false,
    },
    {
      badge: null,
      badgeStyle: '',
      title: 'Private Audit',
      price: '$197',
      description: 'Everything in the Podcast Edition, fully private. Not recorded, not published. Just you, us, and your numbers â completely confidential.',
      includes: [
        '60-min private Zoom session',
        'Custom 50/30/20 breakdown for your household',
        'Written action plan within 48 hours',
        '100% confidential â never recorded or published',
      ],
      cta: 'Book Private Session',
      href: 'https://calendly.com/buyyourkidsahouse/30min',
      highlight: false,
      comingSoon: false,
    },
    {
      badge: 'COMING SOON',
      badgeStyle: 'bg-white/10 text-slate',
      title: 'Generational Wealth Blueprint',
      price: 'Starting at $497',
      description: 'A comprehensive 2-3 session engagement covering your full financial picture: kids house fund, retirement timeline, life insurance, investment allocation, estate planning, and a written 5-year roadmap. Built for families serious about generational wealth.',
      includes: [
        '2-3 deep-dive sessions',
        'Full financial picture assessment',
        "Kids' house fund + retirement projections",
        'Life insurance and investment review',
        'Written 5-year generational wealth roadmap',
      ],
      cta: 'Join the Waitlist',
      href: '#waitlist',
      highlight: false,
      comingSoon: true,
    },
  ];

  const steps = [
    { number: '01', title: 'Book and Pay', body: 'Choose your session type and book directly through our calendar. Payment is collected at booking through Stripe.' },
    { number: '02', title: 'Prep Your Numbers', body: "We'll send a simple prep sheet before your session so we can hit the ground running. No need to have everything organized â rough numbers work." },
    { number: '03', title: 'Get Your Plan', body: 'Walk away with a clear written action plan tailored to your household. No more guessing â just a roadmap you can actually follow.' },
  ];

  const faqs = [
    { q: 'Do I need to have my finances organized beforehand?', a: "No. We'll work with whatever you have. A rough sense of your income and major monthly expenses is enough to start." },
    { q: 'How is the Podcast Edition different from Private?', a: 'Same session quality, different privacy. The Podcast Edition may be edited and published as a podcast episode. You sign a consent form and can review anything before it goes live. Names and sensitive details can be edited out.' },
    { q: "What if I'm not ready for a full Blueprint?", a: 'Start with a Budget Audit. Most people find that one session gives them 80% of the clarity they need. The Blueprint is for people who want to go deeper after that.' },
    { q: 'How do I pay?', a: 'Payment is collected at the time of booking through our secure Calendly and Stripe integration. No invoices, no chasing.' },
  ];

  return (
    <div style={{ fontFamily: 'DM Sans, sans-serif', color: '#cbd5e8', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px 48px', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#c9973a', marginBottom: '16px' }}>
          WORK WITH US
        </p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#e8d5a3', lineHeight: 1.2, marginBottom: '20px' }}>
          Get Your Personal Budget Audit
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#8a9bb5', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
          You know the 50/30/20 framework. Now let us apply it to your actual numbers together. Walk away with a clear plan, not just a concept.
        </p>
      </section>

      {/* Tier Cards */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', alignItems: 'start' }}>
          {tiers.map(function(tier) {
            var cardStyle = {
              borderRadius: '16px',
              padding: '32px',
              border: tier.highlight ? '1px solid rgba(201,151,58,0.5)' : '1px solid rgba(255,255,255,0.08)',
              background: tier.highlight ? 'linear-gradient(135deg, rgba(201,151,58,0.08), rgba(255,255,255,0.01))' : 'rgba(255,255,255,0.02)',
              opacity: tier.comingSoon ? 0.7 : 1,
              position: 'relative',
            };
            return (
              React.createElement('div', { key: tier.title, style: cardStyle },
                tier.badge && React.createElement('div', {
                  style: {
                    display: 'inline-block',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    marginBottom: '16px',
                    background: tier.highlight ? '#c9973a' : 'rgba(255,255,255,0.1)',
                    color: tier.highlight ? '#0a1628' : '#cbd5e8',
                  }
                }, tier.badge),
                React.createElement('h2', {
                  style: { fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 700, color: '#e8d5a3', marginBottom: '8px', marginTop: tier.badge ? '0' : '26px' }
                }, tier.title),
                React.createElement('p', {
                  style: { fontFamily: 'Cormorant Garamond, serif', fontSize: '2.4rem', fontWeight: 700, color: '#c9973a', marginBottom: '16px' }
                }, tier.price),
                React.createElement('p', {
                  style: { fontSize: '0.95rem', color: '#8a9bb5', lineHeight: 1.7, marginBottom: '24px' }
                }, tier.description),
                React.createElement('ul', { style: { listStyle: 'none', padding: 0, margin: '0 0 28px' } },
                  tier.includes.map(function(item) {
                    return React.createElement('li', {
                      key: item,
                      style: { fontSize: '0.9rem', color: '#cbd5e8', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '10px' }
                    },
                      React.createElement('span', { style: { color: '#c9973a', flexShrink: 0 } }, '+'),
                      item
                    );
                  })
                ),
                React.createElement('a', {
                  href: tier.href,
                  target: tier.comingSoon ? undefined : '_blank',
                  rel: tier.comingSoon ? undefined : 'noopener noreferrer',
                  style: {
                    display: 'block',
                    textAlign: 'center',
                    padding: '14px 24px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    background: tier.highlight ? '#c9973a' : 'transparent',
                    color: tier.highlight ? '#0a1628' : '#c9973a',
                    border: tier.highlight ? 'none' : '1px solid #c9973a',
                    cursor: tier.comingSoon ? 'default' : 'pointer',
                  }
                }, tier.cta + ' â')
              )
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 80px' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 700, color: '#e8d5a3', textAlign: 'center', marginBottom: '48px' }}>
          How It Works
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {steps.map(function(step) {
            return React.createElement('div', {
              key: step.number,
              style: { display: 'flex', gap: '24px', alignItems: 'flex-start' }
            },
              React.createElement('div', {
                style: { fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 700, color: 'rgba(201,151,58,0.3)', lineHeight: 1, flexShrink: 0, width: '56px' }
              }, step.number),
              React.createElement('div', null,
                React.createElement('h3', { style: { fontSize: '1.1rem', fontWeight: 600, color: '#e8d5a3', marginBottom: '8px' } }, step.title),
                React.createElement('p', { style: { fontSize: '0.95rem', color: '#8a9bb5', lineHeight: 1.7 } }, step.body)
              )
            );
          })}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
        <div style={{ borderRadius: '16px', padding: '48px 32px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#c9973a', marginBottom: '12px' }}>COMING SOON</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 700, color: '#e8d5a3', marginBottom: '16px' }}>
            Generational Wealth Blueprint
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#8a9bb5', lineHeight: 1.7, marginBottom: '28px' }}>
            We are building out our full-service offering. Join the waitlist to get notified first and lock in early-access pricing.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#cbd5e8' }}>
            Email us at{' '}
            <a href="mailto:buyyourkidsahouse@gmail.com?subject=Blueprint Waitlist" style={{ color: '#c9973a', textDecoration: 'underline' }}>
              buyyourkidsahouse@gmail.com
            </a>
            {' '}with "Blueprint Waitlist" in the subject line.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px 80px' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 700, color: '#e8d5a3', textAlign: 'center', marginBottom: '40px' }}>
          Common Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map(function(faq) {
            return React.createElement('div', {
              key: faq.q,
              style: { padding: '24px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }
            },
              React.createElement('h3', { style: { fontSize: '1rem', fontWeight: 600, color: '#e8d5a3', marginBottom: '10px' } }, faq.q),
              React.createElement('p', { style: { fontSize: '0.95rem', color: '#8a9bb5', lineHeight: 1.7 } }, faq.a)
            );
          })}
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px 80px', textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', color: '#3a4d65' }}>
          These sessions are educational and coaching in nature, not licensed financial advice.
        </p>
      </section>

    </div>
  );
}
