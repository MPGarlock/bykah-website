// AFFILIATE LINKS: All links below are currently direct links.
// Replace with affiliate tracking URLs from your affiliate programs:
// - Flights: Skyscanner (skyscanner.pxf.io), Kayak (kayak.com/affiliate)
// - Hotels: Booking.com (booking.com/affiliate-program), Hotels.com (affiliates.expediagroup.com)
// - Cruises: CruiseCompete (direct affiliate program), Royal Caribbean (rcl.com/affiliates)

import React from 'react';

var FLIGHTS = [
  {
    name: 'Google Flights',
    url: 'https://flights.google.com',
    desc: 'Best for comparing prices across dates and airports. Use the calendar view to find the cheapest travel window.'
  },
  {
    name: 'Skyscanner',
    url: 'https://www.skyscanner.com',
    desc: 'Great for finding hidden deals. Set price alerts and book when it drops.'
  },
  {
    name: 'Kayak',
    url: 'https://www.kayak.com',
    desc: 'Compare airlines, set price alerts, and explore flexible destination searches.'
  }
];

var HOTELS = [
  {
    name: 'Booking.com',
    url: 'https://www.booking.com',
    desc: 'Huge selection, free cancellation on most properties, and loyalty rewards.'
  },
  {
    name: 'Hotels.com',
    url: 'https://www.hotels.com',
    desc: 'Earn a free night for every 10 nights stayed.'
  },
  {
    name: 'Expedia',
    url: 'https://www.expedia.com',
    desc: 'Bundle flights and hotels for extra savings.'
  }
];

var CRUISES = [
  {
    name: 'Carnival Cruise Line',
    url: 'https://www.carnival.com',
    desc: 'Most affordable major cruise line. Great for first-time cruisers and families.'
  },
  {
    name: 'Royal Caribbean',
    url: 'https://www.royalcaribbean.com',
    desc: 'Best ships and onboard experiences. Watch for early booking deals.'
  },
  {
    name: 'Norwegian Cruise Line',
    url: 'https://www.ncl.com',
    desc: 'Freestyle dining and flexible itineraries. Strong value on longer voyages.'
  },
  {
    name: 'CruiseCompete',
    url: 'https://www.cruisecompete.com',
    desc: 'Get competing quotes from multiple travel agents on the same cruise. Often beats booking direct.'
  }
];

var cardStyle = {
  display: 'block',
  background: '#0d1f35',
  border: '1px solid #C9973A',
  borderRadius: '12px',
  padding: '24px 28px',
  textDecoration: 'none',
  flex: '1',
  minWidth: '220px',
  transition: 'transform 0.2s, box-shadow 0.2s'
};

function TravelCard(props) {
  var item = props.item;
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      style={cardStyle}
      onMouseEnter={function(e) {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,151,58,0.25)';
      }}
      onMouseLeave={function(e) {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ fontSize: '1.125rem', fontWeight: '700', color: '#C9973A', marginBottom: '8px' }}>{item.name}</div>
      <div style={{ color: '#CBD5E8', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</div>
    </a>
  );
}

export default function TravelPage() {
  return (
    <div style={{ background: '#0A1628', minHeight: '100vh', color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '80px 24px' }}>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', color: '#C9973A', marginBottom: '16px', lineHeight: 1.2 }}>
            Travel Smart
          </h1>
          <p style={{ color: '#CBD5E8', fontSize: '1.125rem', maxWidth: '640px', margin: '0 auto', lineHeight: '1.7' }}>
            Use your Wants budget wisely. These are the BYKAH-approved tools for booking flights, hotels, and cruises without blowing your 50/30/20.
          </p>
        </div>

        {/* Section 1: Flights */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.875rem', color: '#C9973A', marginBottom: '8px' }}>
            Find Flights
          </h2>
          <p style={{ color: '#CBD5E8', fontSize: '0.9rem', marginBottom: '24px' }}>
            Compare prices across dates and airports before you commit to anything.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {FLIGHTS.map(function(item) {
              return <TravelCard key={item.name} item={item} />;
            })}
          </div>
        </div>

        {/* Section 2: Hotels */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.875rem', color: '#C9973A', marginBottom: '8px' }}>
            Book Hotels
          </h2>
          <p style={{ color: '#CBD5E8', fontSize: '0.9rem', marginBottom: '24px' }}>
            Loyalty programs and free cancellation policies matter. These sites do both well.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {HOTELS.map(function(item) {
              return <TravelCard key={item.name} item={item} />;
            })}
          </div>
        </div>

        {/* Section 3: Cruises */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.875rem', color: '#C9973A', marginBottom: '8px' }}>
            Cruises -- Best Value Per Dollar
          </h2>
          <p style={{ color: '#CBD5E8', fontSize: '0.9rem', marginBottom: '24px' }}>
            Cruises offer some of the best value for families -- all-inclusive meals, entertainment, and multiple destinations in one trip.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {CRUISES.map(function(item) {
              return <TravelCard key={item.name} item={item} />;
            })}
          </div>
        </div>

        {/* BYKAH Budget Tip */}
        <div style={{ background: '#0d1f35', border: '2px solid #C9973A', borderRadius: '16px', padding: '36px 40px', marginBottom: '40px' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#C9973A', marginBottom: '12px' }}>
            BYKAH Budget Tip
          </h3>
          <p style={{ color: '#CBD5E8', fontSize: '1rem', lineHeight: '1.75', marginBottom: '24px' }}>
            Before you book: run the trip through the BYKAH App calculator to make sure it fits your Wants budget. A $2,000 vacation should feel like a reward for good planning, not the reason you miss your Forever Fund contribution.
          </p>
          <a
            href="https://app.buyyourkidsahouse.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '13px 28px',
              borderRadius: '10px',
              border: 'none',
              background: 'linear-gradient(135deg,#C9973A,#A07828)',
              color: '#0A1628',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '700',
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(201,151,58,0.35)'
            }}
          >
            Check Your Budget
          </a>
        </div>

        {/* Footer note */}
        <p style={{ color: '#5A6B85', fontSize: '0.8rem', textAlign: 'center', lineHeight: '1.6' }}>
          Links on this page may include affiliate partnerships that support the BYKAH podcast at no extra cost to you.
        </p>

      </div>
    </div>
  );
}
