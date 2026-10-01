import { useEffect, useRef, useState } from 'react';
import { luminaSections, technicalHighlights } from '../data/lumina';
import './LuminaCaseStudy.css';

const navigationSections = [
  { id: 'stack', label: 'Overview & stack' },
  ...luminaSections.map((section) => ({
    id: section.id,
    label: section.navLabel || `${section.id.charAt(0).toUpperCase()}${section.id.slice(1)}`,
  })),
  { id: 'engineering', label: 'Technical highlights' },
];

function ScreenshotViewer({ image, caption, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    dialog.showModal();
    return () => dialog.close();
  }, []);

  return (
    <dialog
      ref={ref}
      className="lumina-viewer"
      aria-label="Enlarged Lumina screenshot"
      onCancel={(event) => { event.preventDefault(); event.stopPropagation(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div className="lumina-viewer__bar">
        <span>{caption}</span>
        <button type="button" onClick={onClose} autoFocus aria-label="Close screenshot">Close ×</button>
      </div>
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} />
    </dialog>
  );
}

function FeatureSection({ section, onEnlarge }) {
  const [selected, setSelected] = useState(0);
  const feature = section.features[selected];
  const panelId = `lumina-${section.id}-feature`;

  useEffect(() => {
    const nextFeature = section.features[selected + 1];
    if (!nextFeature) return;

    const nextImage = new Image();
    nextImage.src = nextFeature.image.src;
  }, [section.features, selected]);

  return (
    <section className="lumina-section" id={`lumina-${section.id}`} aria-labelledby={`lumina-${section.id}-title`}>
      <p className="lumina-eyebrow">{section.eyebrow}</p>
      <h3 id={`lumina-${section.id}-title`}>{section.title}</h3>
      <p className="lumina-section__intro">{section.description}</p>
      {section.steps && (
        <ol className="lumina-flow" aria-label={`${section.title} workflow`}>
          {section.steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      )}
      <div className="lumina-feature">
        <div className="lumina-feature__copy">
          <div className="lumina-feature__choices" role="group" aria-label={`${section.title} views`}>
            {section.features.map((item, index) => (
              <button
                type="button"
                key={item.title}
                aria-pressed={selected === index}
                aria-controls={panelId}
                onClick={() => setSelected(index)}
              >
                <span className="lumina-feature__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                {item.title}
                <span className="lumina-feature__arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          <div id={panelId} className="lumina-feature__detail" aria-live="polite" aria-atomic="true">
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        </div>
        <figure className="lumina-shot">
          <button type="button" className="lumina-shot__button" onClick={() => onEnlarge(feature)} aria-label={`Enlarge ${feature.title} screenshot`}>
            <img
              key={feature.image.src}
              src={feature.image.src}
              alt={feature.image.alt}
              width={feature.image.width}
              height={feature.image.height}
              loading="lazy"
              decoding="async"
            />
            <span className="lumina-shot__zoom" aria-hidden="true">View full size ↗</span>
          </button>
          <figcaption>{feature.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default function LuminaCaseStudy({ project, onClose }) {
  const ref = useRef(null);
  const [enlarged, setEnlarged] = useState(null);
  const [activeSection, setActiveSection] = useState('stack');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const dialog = ref.current;
    const scrollContainer = dialog.querySelector('.lumina-dialog__scroll');
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();

    const updateReadingPosition = () => {
      const availableScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const progress = availableScroll > 0 ? (scrollContainer.scrollTop / availableScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      const threshold = scrollContainer.getBoundingClientRect().top + 150;
      let current = 'stack';

      navigationSections.forEach(({ id }) => {
        const section = dialog.querySelector(`#lumina-${id}`);
        if (section && section.getBoundingClientRect().top <= threshold) current = id;
      });

      setActiveSection(current);
    };

    scrollContainer.addEventListener('scroll', updateReadingPosition, { passive: true });
    requestAnimationFrame(updateReadingPosition);

    return () => {
      scrollContainer.removeEventListener('scroll', updateReadingPosition);
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const navigateToSection = (id) => {
    const section = ref.current?.querySelector(`#lumina-${id}`);
    if (!section) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    setActiveSection(id);
  };

  return (
    <dialog
      ref={ref}
      className="lumina-dialog"
      aria-labelledby="lumina-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div className="lumina-dialog__bar">
        <span>Lumina <span className="lumina-dialog__label">/ Project case study</span></span>
        <button type="button" onClick={onClose} autoFocus aria-label="Close Lumina case study">Close ×</button>
        <div className="lumina-progress" aria-hidden="true">
          <span
            className="lumina-progress__bar"
            data-progress={scrollProgress.toFixed(1)}
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
      <div className="lumina-dialog__scroll">
        <header className="lumina-hero" id="lumina-overview">
          <p className="lumina-eyebrow">Full-stack engineering · Multi-tenant SaaS</p>
          <h2 id="lumina-title">Lumina</h2>
          <p className="lumina-hero__headline">One platform.<br />The complete commerce journey.</p>
          <p className="lumina-hero__summary">
            A commerce platform for boutique merchants, connecting branded storefronts,
            day-to-day operations and platform administration. From a customer’s first
            purchase to a merchant’s subscription, each role has a focused workspace.
          </p>
          <div className="lumina-actions">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Explore live storefront ↗</a>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View source code ↗</a>
          </div>
          <div className="lumina-roles" aria-label="Three connected workspaces">
            <div><span>01 / Customer</span><strong>Discover → order → track</strong></div>
            <div><span>02 / Merchant</span><strong>Manage → fulfil → measure</strong></div>
            <div><span>03 / Platform owner</span><strong>Review → approve → oversee</strong></div>
          </div>
        </header>

        <nav className="lumina-nav" aria-label="Case study sections">
          {navigationSections.map((section) => (
            <button
              type="button"
              key={section.id}
              aria-current={activeSection === section.id ? 'true' : undefined}
              onClick={() => navigateToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className="lumina-body">
          <section className="lumina-stack" id="lumina-stack" aria-labelledby="lumina-stack-title">
            <div>
              <p className="lumina-eyebrow">Project overview</p>
              <h3 id="lumina-stack-title">Built around three distinct roles.</h3>
              <p>The engineering challenge is keeping store data and permissions separate while connecting shopping, fulfilment and merchant access in one system.</p>
              <h4 className="lumina-scope__title">Engineering scope</h4>
              <ul className="lumina-scope">
                <li><span>Tenant boundaries</span>Store-scoped routes, membership checks and RLS</li>
                <li><span>Transactional workflows</span>Checkout, inventory, payments and fulfilment</li>
                <li><span>Platform operations</span>Merchant approval and subscription access</li>
              </ul>
            </div>
            <div>
              <h4>Tech stack</h4>
              <ul className="lumina-tags">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
              <p className="lumina-stack__note">Next.js application · Supabase Auth, PostgreSQL & Storage · Vercel deployment</p>
            </div>
          </section>

          {luminaSections.map((section) => <FeatureSection key={section.id} section={section} onEnlarge={setEnlarged} />)}

          <section className="lumina-section" id="lumina-engineering" aria-labelledby="lumina-engineering-title">
            <p className="lumina-eyebrow">Engineering decisions</p>
            <h3 id="lumina-engineering-title">Technical highlights</h3>
            <p className="lumina-section__intro">The implementation behind the workflows.</p>
            <div className="lumina-highlights">
              {technicalHighlights.map((highlight, index) => (
                <article key={highlight.title}>
                  <span className="lumina-highlight__index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </article>
              ))}
            </div>
          </section>

          <footer className="lumina-footer">
            <div><h3>Explore Lumina</h3><p>Try the customer journey or inspect the implementation.</p></div>
            <div className="lumina-actions">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live demo ↗</a>
              <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub repository ↗</a>
            </div>
          </footer>
        </div>
      </div>
      {enlarged && <ScreenshotViewer {...enlarged} onClose={() => setEnlarged(null)} />}
    </dialog>
  );
}
