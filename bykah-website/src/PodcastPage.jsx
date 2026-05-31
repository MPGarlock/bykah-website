import React from 'react';

export default function PodcastPage() {
  return (
    <div style={{ background: '#0A1628', minHeight: '100vh', color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', color: '#C9973A', marginBottom: '16px', lineHeight: 1.2 }}>The BYKAH Podcast</h1>
          <p style={{ color: '#CBD5E8', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>Buy Your Kids A House - building generational wealth one episode at a time.</p>
        </div>

        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginBottom: '48px' }}>
          <iframe
            src="https://www.youtube.com/embed?listType=user_uploads&list=BuyYourKidsAHousePodcast"
            title="BYKAH Podcast on YouTube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '12px' }}
          />
        </div>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', color: '#C9973A', marginBottom: '24px' }}>Listen to the Podcast</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
          <a href="https://open.spotify.com/show/6qbo9eGFKCmqoIdNsDt9c0" target="_blank" rel="noopener noreferrer"
            style={{ display: 'block', background: '#0d1f35', border: '1px solid #C9973A', borderRadius: '12px', padding: '24px 32px', textDecoration: 'none', flex: '1', minWidth: '200px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.125rem', fontWeight: '700', color: '#C9973A', marginBottom: '4px' }}>Spotify</div>
            <div style={{ color: '#CBD5E8', fontSize: '0.875rem' }}>Listen on Spotify</div>
          </a>
          <a href="https://podcasts.apple.com/us/podcast/id1875387591" target="_blank" rel="noopener noreferrer"
            style={{ display: 'block', background: '#0d1f35', border: '1px solid #C9973A', borderRadius: '12px', padding: '24px 32px', textDecoration: 'none', flex: '1', minWidth: '200px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.125rem', fontWeight: '700', color: '#C9973A', marginBottom: '4px' }}>Apple Podcasts</div>
            <div style={{ color: '#CBD5E8', fontSize: '0.875rem' }}>Listen on Apple</div>
          </a>
        </div>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', color: '#C9973A', marginBottom: '24px' }}>Follow Along</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {[
            { label: 'YouTube', url: 'https://www.youtube.com/@BuyYourKidsAHousePodcast' },
            { label: 'Instagram', url: 'https://www.instagram.com/buyyourkidsahouse' },
            { label: 'TikTok', url: 'https://www.tiktok.com/@buyyourkidsahouse' }
          ].map(function(s) {
            return (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                style={{ background: '#0d1f35', border: '1px solid #2a3a50', borderRadius: '8px', padding: '12px 20px', color: '#CBD5E8', textDecoration: 'none', fontWeight: '600', fontSize: '0.875rem' }}>
                {s.label}
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
}
