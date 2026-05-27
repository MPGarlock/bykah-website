import React from 'react';

export default function AboutPage() {
  var mattBio = [
    'The idea for Buy Your Kids A House started on an ordinary school morning. I was dropping my daughter off for kindergarten when she told me, with complete confidence, exactly what she wanted to be when she grew up: a teacher. My first instinct was to think about the salary - and then immediately feel guilty for thinking it. I didn\'t want to dim her excitement for a single second. But that moment stuck with me, because it crystallized something I\'d been circling around for years: the goal isn\'t to steer your kids toward high-paying careers. It\'s to build a foundation strong enough that they never have to make career decisions out of financial desperation.',
    'That\'s what Buy Your Kids A House is really about. A house bought for them early. A forever car fund. An early Roth IRA. Stack those three things and your kid can become a teacher, an artist, an entrepreneur - whatever lights them up - without their finances ever holding them back. I\'m actively running this strategy with my own kids right now, well on our way.',
    'I came to this work through a winding road. I originally started college in aerospace engineering, until the end of NASA\'s Space Shuttle program triggered a wave of industry layoffs and made it clear my career in that field was over before it started. I pivoted to business - earning a bachelor\'s in Business Administration with a double focus in finance and marketing - and found my footing helping families untangle their budgets, build toward retirement, and protect what they\'d worked for. That turned into 15 years in personal finance, including time as a licensed Series 65 and Series 6 representative.',
    'I later went back for a master\'s in Data Science, which gave me a sharper eye for what\'s actually happening in housing markets, stock markets, and the broader economic trends that quietly shape family finances. Eventually I made a deliberate choice to let those licenses lapse - because as a licensed representative, there are real limits on what you can say and how many people you can say it to at once. The podcast removes those guardrails. No compliance filter, no limitations on reach, just straight talk about money.',
    'Dad of two. Firm believer that the best thing you can give your kids isn\'t a career path - it\'s options.'
  ];

  var andrewBio = [
    'Andrew came to Buy Your Kids A House from the opposite direction. His background is in filmography - not finance. Not married, no kids, and for most of his adult life, not particularly focused on retirement planning either. Like a lot of millennials and Gen Z, he\'d looked at the system and quietly concluded it wasn\'t built for people like him. Why obsess over a plan that seems designed to work only for people who already have a head start?',
    'The podcast changed that. Working through the BYKAH framework episode by episode, Andrew has started putting the strategy into practice for himself - proving out a core thesis of the show: this stuff works even if you\'re starting from zero, even if you don\'t have a family yet, and even if you were skeptical going in.',
    'He brings the production chops that make the show sound the way it does, and an honest outsider\'s perspective that keeps the financial conversation grounded. If you\'ve ever felt like personal finance advice wasn\'t written for you, Andrew\'s the reason this podcast probably sounds different.'
  ];

  function BioCard(name, title, image, bio) {
    return React.createElement('div', {
      style: {
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 20,
        padding: 40,
        flex: '1 1 420px',
        minWidth: 0,
      }
    },
      React.createElement('div', {
        style: {
          width: 160,
          height: 160,
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: 24,
          border: '2px solid rgba(201,151,58,0.4)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 40px rgba(201,151,58,0.1)',
          background: 'rgba(255,255,255,0.04)',
        }
      },
        React.createElement('img', {
          src: image,
          alt: name,
          style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' }
        })
      ),
      React.createElement('div', {
        style: {
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: 30,
          color: '#E8D5A3',
          fontWeight: 700,
          marginBottom: 6,
        }
      }, name),
      React.createElement('div', {
        style: {
          fontSize: 11,
          color: '#C9973A',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          marginBottom: 24,
        }
      }, title),
      React.createElement('div', null,
        bio.map(function(para, i) {
          return React.createElement('p', {
            key: i,
            style: {
              fontSize: 15,
              color: '#8B9BB4',
              lineHeight: 1.8,
              marginBottom: i < bio.length - 1 ? 16 : 0,
            }
          }, para);
        })
      )
    );
  }

  return React.createElement('div', {
    style: {
      background: '#060E1A',
      color: '#CBD5E8',
      fontFamily: "'DM Sans',sans-serif",
      minHeight: '100vh',
    }
  },
    React.createElement('style', null,
      "@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');" +
      "* { box-sizing: border-box; margin: 0; padding: 0; }" +
      "@media (max-width: 768px) {" +
      "  .about-hero { padding: 100px 20px 40px !important; }" +
      "  .about-hero h1 { font-size: 38px !important; }" +
      "  .about-cards { padding: 0 20px 60px !important; flex-direction: column !important; }" +
      "  .about-cta { padding: 60px 20px !important; }" +
      "  .about-cta h2 { font-size: 32px !important; }" +
      "}"
    ),
    React.createElement('section', {
      className: 'about-hero',
      style: {
        padding: '140px 40px 60px',
        maxWidth: 1140,
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }
    },
      React.createElement('div', {
        style: {
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(201,151,58,0.06) 0%,transparent 70%)',
          pointerEvents: 'none',
        }
      }),
      React.createElement('div', {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 14px',
          borderRadius: 20,
          background: 'rgba(201,151,58,0.1)',
          border: '1px solid rgba(201,151,58,0.25)',
          marginBottom: 28,
        }
      },
        React.createElement('span', {
          style: {
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#C9973A',
            display: 'inline-block',
          }
        }),
        React.createElement('span', {
          style: {
            fontSize: 11,
            color: '#C9973A',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }
        }, 'ABOUT')
      ),
      React.createElement('h1', {
        style: {
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: 64,
          lineHeight: 1.05,
          color: '#E8D5A3',
          fontWeight: 700,
          marginBottom: 20,
          maxWidth: 700,
        }
      }, 'The People Behind the Podcast'),
      React.createElement('p', {
        style: {
          fontSize: 17,
          color: '#5A6B85',
          lineHeight: 1.75,
          maxWidth: 560,
        }
      }, 'Two people building in public - one with a family strategy decades in the making, one learning it in real time.')
    ),
    React.createElement('section', {
      className: 'about-cards',
      style: {
        padding: '0 40px 100px',
        maxWidth: 1140,
        margin: '0 auto',
        display: 'flex',
        gap: 32,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
      }
    },
      BioCard('Matt Garlock', 'Co-Host & Financial Strategist', '/matt-garlock.PNG', mattBio),
      BioCard('Andrew Higgins', 'Co-Host & Creative Director', '/Andrew-Higgins.JPG', andrewBio)
    ),
    React.createElement('section', {
      className: 'about-cta',
      style: {
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '80px 40px',
        textAlign: 'center',
      }
    },
      React.createElement('div', { style: { maxWidth: 600, margin: '0 auto' } },
        React.createElement('div', {
          style: {
            fontSize: 11,
            color: '#C9973A',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: 20,
          }
        }, 'Work With Us'),
        React.createElement('h2', {
          style: {
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: 48,
            color: '#E8D5A3',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 16,
          }
        }, 'Ready to work together?'),
        React.createElement('p', {
          style: {
            fontSize: 16,
            color: '#5A6B85',
            lineHeight: 1.75,
            marginBottom: 36,
          }
        }, "Book a 1:1 audit and get a personalized plan for your family's financial future."),
        React.createElement('a', {
          href: '/audit',
          style: {
            display: 'inline-block',
            padding: '15px 36px',
            borderRadius: 12,
            background: 'linear-gradient(135deg,#C9973A,#A07828)',
            color: '#0D1B2E',
            fontFamily: "'DM Sans',sans-serif",
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(201,151,58,0.3)',
            cursor: 'pointer',
          }
        }, 'Book a 1:1 audit ->')
      )
    ),
    React.createElement('footer', {
      style: {
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '40px 24px',
      }
    },
      React.createElement('div', {
        style: {
          maxWidth: 1140,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 20,
        }
      },
        React.createElement('div', null,
          React.createElement('div', {
            style: {
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: 18,
              color: '#E8D5A3',
              fontWeight: 700,
            }
          }, 'Buy Your Kids A House'),
          React.createElement('div', {
            style: { fontSize: 12, color: '#3A4D65', marginTop: 4 }
          }, '2025 For educational purposes only. Not financial advice.')
        )
      )
    )
  );
}
