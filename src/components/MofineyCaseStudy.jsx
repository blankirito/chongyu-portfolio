import { useLayoutEffect, useRef, useState } from 'react';
import { mofineySections } from '../data/mofiney';
import './MofineyCaseStudy.css';

const navigation = [{ id: 'overview', label: 'Overview & stack' }, ...mofineySections];

function ScreenshotViewer({ feature, onClose }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const dialog = ref.current;
    dialog.showModal();
    return () => dialog.close();
  }, []);

  return (
    <dialog
      ref={ref}
      className="mofiney-viewer"
      aria-label={`Enlarged Mofiney screenshot: ${feature.title}`}
      onCancel={(event) => { event.preventDefault(); event.stopPropagation(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div className="mofiney-bar">
        <span>{feature.title}</span>
        <button type="button" autoFocus onClick={onClose} aria-label="Close Mofiney screenshot">Close ×</button>
      </div>
      <img {...feature.image} />
      <p>{feature.caption}</p>
    </dialog>
  );
}

function FeatureSection({ section, onEnlarge }) {
  const [selected, setSelected] = useState(0);
  const feature = section.features[selected];
  const panelId = `mofiney-${section.id}-detail`;

  return (
    <section className="mofiney-section" id={`mofiney-${section.id}`} aria-labelledby={`mofiney-${section.id}-title`}>
      <div className="mofiney-feature__copy">
        <p className="mofiney-eyebrow">{section.eyebrow}</p>
        <h3 id={`mofiney-${section.id}-title`}>{section.title}</h3>
        <p className="mofiney-section__intro">{section.description}</p>
        <div className="mofiney-choices" role="group" aria-label={`${section.label} screenshots`}>
          {section.features.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-pressed={selected === index}
              aria-controls={panelId}
              onClick={() => setSelected(index)}
            >
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              {item.title}
              <span className="mofiney-choice-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <div id={panelId} className="mofiney-detail" aria-live="polite" aria-atomic="true">
          {feature.status && <p className="mofiney-preview-note">{feature.status}</p>}
          <h4>{feature.title}</h4>
          <p>{feature.description}</p>
        </div>
      </div>
      <figure className="mofiney-shot">
        <button type="button" onClick={() => onEnlarge(feature)} aria-label={`Enlarge ${feature.title} screenshot`}>
          <img key={feature.image.src} {...feature.image} loading="lazy" decoding="async" />
          <span className="mofiney-shot__zoom" aria-hidden="true">View full size ↗</span>
        </button>
        <figcaption>{feature.caption}</figcaption>
      </figure>
    </section>
  );
}

export default function MofineyCaseStudy({ project, onClose }) {
  const ref = useRef(null);
  const [enlarged, setEnlarged] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const dialog = ref.current;
    const scroll = dialog.querySelector('.mofiney-scroll');
    const nav = dialog.querySelector('.mofiney-nav');
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();

    const updatePosition = () => {
      const available = scroll.scrollHeight - scroll.clientHeight;
      setProgress(available > 0 ? Math.min(100, Math.max(0, scroll.scrollTop / available * 100)) : 0);
      const threshold = scroll.getBoundingClientRect().top + nav.offsetHeight + 32;
      let current = 'overview';
      for (const { id } of navigation) {
        if (dialog.querySelector(`#mofiney-${id}`).getBoundingClientRect().top <= threshold) current = id;
      }
      if (available > 0 && scroll.scrollTop >= available - 2) current = navigation.at(-1).id;
      setActiveSection(current);
    };

    const frame = requestAnimationFrame(updatePosition);
    scroll.addEventListener('scroll', updatePosition, { passive: true });
    window.addEventListener('resize', updatePosition);
    return () => {
      cancelAnimationFrame(frame);
      scroll.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const navigate = (id) => {
    const dialog = ref.current;
    const scroll = dialog.querySelector('.mofiney-scroll');
    const nav = dialog.querySelector('.mofiney-nav');
    const section = dialog.querySelector(`#mofiney-${id}`);
    scroll.scrollTo({
      top: scroll.scrollTop + section.getBoundingClientRect().top - scroll.getBoundingClientRect().top - nav.offsetHeight - 16,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  return (
    <dialog
      ref={ref}
      className="mofiney-dialog"
      aria-labelledby="mofiney-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div className="mofiney-bar">
        <span>Mofiney <span className="mofiney-bar__label">/ Project case study</span></span>
        <button type="button" autoFocus onClick={onClose} aria-label="Close Mofiney case study">Close ×</button>
        <div className="mofiney-progress" aria-hidden="true"><span data-progress={progress.toFixed(1)} style={{ width: `${progress}%` }} /></div>
      </div>
      <div className="mofiney-scroll">
        <header className="mofiney-hero">
          <div>
            <p className="mofiney-eyebrow">Mobile engineering · Personal finance</p>
            <h2 id="mofiney-title">Mofiney</h2>
            <p className="mofiney-hero__headline">Everyday money.<br />A clearer picture.</p>
            <p className="mofiney-hero__summary">A local-first finance app that connects accounts, transactions and monthly plans. From reviewing a receipt to understanding a spending pattern, each screen keeps the next step within reach.</p>
            <a className="mofiney-source" href={project.link} target="_blank" rel="noopener noreferrer">View source code ↗</a>
            <ul className="mofiney-hero__tags" aria-label="Project focus"><li>Flutter & Dart</li><li>Local-first storage</li><li>8 app screens</li></ul>
          </div>
          <figure className="mofiney-hero__phone">
            <img {...mofineySections[0].features[0].image} decoding="async" />
            <figcaption>A daily overview, built for mobile.</figcaption>
          </figure>
        </header>

        <nav className="mofiney-nav" aria-label="Mofiney case study sections">
          {navigation.map(({ id, label }) => <button key={id} type="button" aria-current={activeSection === id ? 'true' : undefined} onClick={() => navigate(id)}>{label}</button>)}
        </nav>

        <div className="mofiney-body">
          <section className="mofiney-overview" id="mofiney-overview" aria-labelledby="mofiney-overview-title">
            <div>
              <p className="mofiney-eyebrow">Project overview</p>
              <h3 id="mofiney-overview-title">One connected view of personal finances.</h3>
              <p>Accounts and transaction records form the foundation. Budgets, recurring payments and reports make that information useful throughout the month.</p>
            </div>
            <div>
              <h4>Tech stack</h4>
              <ul className="mofiney-tags">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
              <p>Flutter interface · Dart application logic · Drift & SQLite for local persistence</p>
              <p className="mofiney-overview__note">Select a view in each section, then open the screenshot for a closer look.</p>
            </div>
          </section>
          {mofineySections.map((section) => <FeatureSection key={section.id} section={section} onEnlarge={setEnlarged} />)}
          <footer className="mofiney-footer">
            <div><h3>Explore the implementation.</h3><p>View the Flutter project and its local-first approach.</p></div>
            <a className="mofiney-source" href={project.link} target="_blank" rel="noopener noreferrer">GitHub repository ↗</a>
          </footer>
        </div>
      </div>
      {enlarged && <ScreenshotViewer feature={enlarged} onClose={() => setEnlarged(null)} />}
    </dialog>
  );
}
