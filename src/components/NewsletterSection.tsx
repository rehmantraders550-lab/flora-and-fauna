import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);

    if (!valid) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <section
      id="newsletter"
      className="relative min-h-[640px] flex items-center justify-center overflow-hidden py-28 text-white"
      aria-labelledby="newsletter-title"
    >
      {/* Background Floral Tapestry */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://floria-landing-page.vercel.app/661a0f84-d9cb-4189-9c93-a023dfc18423.webp"
          alt=""
          className="w-full h-full object-cover object-center filter brightness-[0.4] saturate-90"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-[min(90vw,720px)] mx-auto text-center px-4">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[#d2ba85] font-semibold mb-4">
          Private Notes / Bi-weekly
        </p>

        <h2
          id="newsletter-title"
          className="font-serif text-[clamp(3.6rem,7.5vw,7.2rem)] leading-[0.92] tracking-[-0.04em] font-normal text-white text-balance"
        >
          Join the Studio <em className="italic text-[#f4eee0]">Archive.</em>
        </h2>

        <p className="mt-6 text-[1.05rem] md:text-[1.15rem] leading-relaxed text-white/85 font-light max-w-lg mx-auto">
          Receive bi-weekly essays on spatial design, exclusive access to limited botanical runs, and
          nothing else.
        </p>

        {status === 'success' ? (
          <div className="mt-12 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center gap-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            <h4 className="font-serif text-2xl text-white">Welcome to the Archive.</h4>
            <p className="text-[12px] text-white/70">
              Your dispatch request has been recorded. The next botanical folio arrives this Sunday.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 w-full max-w-xl mx-auto" noValidate>
            <div className="flex flex-col sm:flex-row items-center border-b border-white/60 focus-within:border-white transition-colors pb-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your email address..."
                aria-label="Email address"
                required
                className="w-full min-h-[52px] bg-transparent text-white placeholder-white/60 text-base md:text-lg focus:outline-none px-2"
              />
              <button
                type="submit"
                className="mt-3 sm:mt-0 whitespace-nowrap min-h-[48px] px-6 text-[11px] uppercase tracking-[0.16em] font-medium text-white flex items-center justify-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer self-end sm:self-auto"
              >
                <span>Subscribe</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {status === 'error' && (
              <p className="mt-3 text-[11px] text-rose-300 text-left font-mono tracking-wide">
                {errorMessage}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};
