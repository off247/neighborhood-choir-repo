import { useState } from 'react';
import Overline from '../components/Overline.jsx';
import Button from '../components/Button.jsx';

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    part: 'Not sure yet — help me figure it out',
    hasNameTag: 'No',
    note: '',
  });

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  if (submitted) {
    return (
      <div className="page-narrow" style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '8px 18px',
            background: 'var(--color-harriet-soft)',
            color: 'var(--color-harriet-deep)',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          got it
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.1,
            textTransform: 'lowercase',
            letterSpacing: '-0.015em',
            margin: '0 0 18px',
          }}
        >
          we&apos;ll be in touch, {form.firstName || 'neighbor'}.
        </h1>
        <p className="lead" style={{ margin: '0 auto 32px', maxWidth: '50ch' }}>
          Expect a friendly email from our director within a few days with rehearsal details
          and what to bring (mostly: a water bottle and an open mind).
        </p>
        <Button variant="ghost" onClick={() => setSubmitted(false)}>
          ← Submit another
        </Button>
      </div>
    );
  }

  return (
    <div className="page">
      <Overline>join the choir</Overline>
      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 700,
          fontSize: '3rem',
          lineHeight: 1.05,
          textTransform: 'lowercase',
          letterSpacing: '-0.015em',
          margin: '8px 0 18px',
        }}
      >
        come sing with us this fall.
      </h1>
      <p
        className="lead"
        style={{
          marginBottom: 48,
          fontSize: 18,
          color: 'var(--color-ink-soft)',
          lineHeight: 1.55,
          maxWidth: 'none',
        }}
      >
        Come join The Neighborhood Choir! It&apos;s a great way to meet new people and dig into
        some fun, interesting music with our director, Nathan Knoll. No experience or audition
        needed — just a willingness to sing. Everyone is welcome!
      </p>

      <div
        style={{
          marginBottom: 48,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '48px 24px',
        }}
      >
        <div>
          <h4 style={{ fontFamily: 'var(--font-serif)', margin: '0 0 6px' }}>
            Thursdays, 6:30–8:30pm
          </h4>
          <p style={{ fontSize: 14, color: 'var(--color-ink-soft)', margin: 0 }}>
            Friends Meetinghouse, 4401 York Ave S. Enter on the York Ave side; street parking
            available.
          </p>
        </div>
        <div>
          <h4 style={{ fontFamily: 'var(--font-serif)', margin: '0 0 6px' }}>
            Cost and commitment
          </h4>
          <p style={{ fontSize: 14, color: 'var(--color-ink-soft)', margin: 0 }}>
            $125 for the spring session, covering rent, music, and directing. Bring cash or a
            check (&ldquo;The Neighborhood Choir&rdquo;) to your first rehearsal — no cards.
            Scholarships available: email theneighborhoodchoir@outlook.com.
          </p>
        </div>
        <div>
          <h4 style={{ fontFamily: 'var(--font-serif)', margin: '0 0 6px' }}>Getting settled</h4>
          <p style={{ fontSize: 14, color: 'var(--color-ink-soft)', margin: 0 }}>
            If it&apos;s snowy, rainy, or muddy out, the Friends Meetinghouse asks that we
            remove our shoes at the entrance — slippers optional. If you&apos;re a former
            member with your old name tag, bring it along; we&apos;ll make new ones for new
            members.
          </p>
        </div>
      </div>

      <div
        style={{
          background: 'var(--color-paper)',
          padding: 36,
          borderRadius: 14,
          boxShadow: '0 2px 8px rgba(42,38,32,.06)',
          maxWidth: 560,
          margin: '0 auto',
        }}
      >
        <h3 style={{ fontFamily: 'var(--font-serif)', margin: '0 0 6px', fontSize: 22, fontWeight: 700 }}>
          Tell us a little about you
        </h3>
        <p style={{ margin: '0 0 28px', fontSize: 14, color: 'var(--color-ink-quiet)', maxWidth: 'none' }}>
          We&apos;ll only email about choir news — rehearsals, shows, and the occasional
          update. Promise.
        </p>

        {/* TODO: wire this form up to a real submission endpoint (e.g. Formspree) */}
        <div className="field-row">
          <div className="field">
            <label>First name</label>
            <input
              value={form.firstName}
              onChange={(e) => update('firstName', e.target.value)}
              placeholder="Maya"
            />
          </div>
          <div className="field">
            <label>Last name</label>
            <input
              value={form.lastName}
              onChange={(e) => update('lastName', e.target.value)}
              placeholder="Hartwell"
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="you@somewhere.com"
            />
          </div>
        </div>

        <div className="field">
          <label>What do you usually sing?</label>
          <select value={form.part} onChange={(e) => update('part', e.target.value)}>
            <option>Soprano</option>
            <option>Alto</option>
            <option>Tenor</option>
            <option>Baritone</option>
            <option>Bass</option>
            <option>Not sure yet — help me figure it out</option>
          </select>
        </div>

        <div className="field">
          <label>Do you already have a Neighborhood Choir name tag?</label>
          <select value={form.hasNameTag} onChange={(e) => update('hasNameTag', e.target.value)}>
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>

        <div className="field">
          <label>Anything else you&apos;d like us to know?</label>
          <textarea
            rows={4}
            value={form.note}
            onChange={(e) => update('note', e.target.value)}
            placeholder="I haven't sung since high school but my neighbor told me to come."
          />
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 8 }}>
          <Button variant="primary" onClick={() => setSubmitted(true)}>
            Send it
          </Button>
        </div>
      </div>
    </div>
  );
}
