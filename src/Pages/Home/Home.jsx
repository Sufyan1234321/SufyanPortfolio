import portrait from '../../assets/sufyan-portrait.png'
import realEstateDesktop from '../../assets/pagespeed-desktop-real-estate.png'
import realEstateMobile from '../../assets/pagespeed-mobile-real-estate.png'
import servicesDesktop from '../../assets/pagespeed-desktop-services.png'
import servicesMobile from '../../assets/pagespeed-mobile-services.png'
import './Home.css'

const services = [
  { number: '01', title: 'WordPress development & optimization', text: 'Custom WordPress sites, Core Web Vitals improvements and a faster experience that keeps visitors moving.' },
  { number: '02', title: 'Full-stack web applications', text: 'Modern, reliable applications built with React, Node.js, Express and SQL.' },
  { number: '03', title: 'REST API & UI integration', text: 'Clean API development, third-party integrations and responsive interfaces that work together.' },
  { number: '04', title: 'Frontend fixes & refinement', text: 'Responsive layout repairs and focused HTML, CSS, JavaScript, React and WordPress support.' },
]

const projects = [
  { type: 'WORDPRESS / ECOMMERCE', title: 'Pepticore', style: 'project-one', preview: 'PEPTICORE', detail: 'Research starts here', url: 'https://pepticore.co/', tags: ['WordPress', 'WooCommerce'] },
  { type: 'WORDPRESS / ECOMMERCE', title: 'Primrose Trading', style: 'project-two', preview: 'PRIMROSE', detail: 'Wholesale plants', url: 'https://primrose-trading.com/', tags: ['WordPress', 'WooCommerce'] },
  { type: 'MERN STACK', title: 'Siya AI', style: 'project-three', preview: 'siya', detail: 'AI worksheet intelligence', url: 'https://heysiya.ai/', tags: ['React', 'Node.js'] },
  { type: 'MERN STACK', title: 'Cloudevolve', style: 'project-four', preview: 'cloudevolve', detail: 'Cloud FinOps platform', url: 'https://cloudevolve.com/', tags: ['React', 'REST API'] },
]

function Arrow() { return <span className="arrow">&#8599;</span> }

function Home() {
  return (
    <>
      <section className="hero section-shell" id="top">
        <div className="hero-copy"><p className="eyebrow"><span></span> AVAILABLE FOR SELECT PROJECTS</p><h1>Building faster,<br /><em>smarter</em> digital<br />experiences.</h1><p className="hero-intro">I&apos;m Abu Sufyan - a full-stack and WordPress developer helping ideas become polished, high-performing products.</p><div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <Arrow /></a><a className="text-link" href="https://www.fiverr.com/ansari_sufyan" target="_blank" rel="noreferrer">View Fiverr profile <Arrow /></a></div><div className="hero-proof"><strong>4+ years</strong><span>building for the web</span><strong>4.9 stars</strong><span>from 260+ Fiverr reviews</span></div></div>
        <div className="hero-visual"><div className="arch arch-back"></div><div className="portrait-wrap"><img src={portrait} alt="Abu Sufyan, full-stack developer" /></div><div className="hero-note"><span className="spark">*</span><span>CODE WITH<br />PURPOSE</span></div><div className="hero-disc">FULL<br />STACK</div></div>
      </section>
      <section className="marquee" aria-label="Skills"><div>REACT <i>*</i> NODE.JS <i>*</i> WORDPRESS <i>*</i> PERFORMANCE <i>*</i> REST APIS <i>*</i> REACT <i>*</i> NODE.JS <i>*</i></div></section>
      <section className="about section-shell" id="about"><div><p className="section-kicker">01 / ABOUT ME</p><h2>More than code.<br /><em>Built for impact.</em></h2></div><div className="about-copy"><p>I combine practical full-stack expertise with a sharp eye for the details that make a website feel effortless. From a first concept to the final deploy, I focus on useful, fast and thoughtful solutions.</p><a className="text-link" href="#contact">Let&apos;s work together <Arrow /></a></div></section>
      <section className="services section-shell" id="services"><div className="section-heading"><div><p className="section-kicker">02 / SERVICES</p><h2>How I can help</h2></div><a className="button button-light" href="https://www.fiverr.com/ansari_sufyan" target="_blank" rel="noreferrer">See all services <Arrow /></a></div><div className="service-list">{services.map((service) => <article className="service-card" key={service.number}><span>{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><Arrow /></article>)}</div></section>
      <section className="work section-shell" id="work"><div className="section-heading"><div><p className="section-kicker">03 / SELECTED WORK</p><h2>A few things<br /><em>I&apos;ve shaped.</em></h2></div><p className="placeholder-note">Live websites crafted for real businesses,<br />from WordPress commerce to MERN products.</p></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><a className={'project-art ' + project.style} href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}><div className="browser"><span></span><span></span><span></span></div><div className="site-preview"><b>{project.preview}</b><small>{project.detail}</small><div className="preview-shapes"><span></span><span></span><span></span></div></div><span className="project-visit">Visit site <Arrow /></span></a><p>{project.type}</p><h3><a href={project.url} target="_blank" rel="noreferrer">{project.title} <Arrow /></a></h3><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>
      <section className="performance section-shell"><div className="section-heading"><div><p className="section-kicker">04 / PERFORMANCE</p><h2>Measured speed.<br /><em>Real results.</em></h2></div><p className="placeholder-note">WordPress performance optimization<br />verified with PageSpeed Insights.</p></div><div className="performance-grid"><article className="performance-card"><div className="score-summary"><span>REAL ESTATE WEBSITE</span><strong>96</strong><p>Desktop performance</p><div><b>91</b> Mobile <b>96</b> Desktop</div></div><div className="speed-shots"><img src={realEstateDesktop} alt="PageSpeed score of 96 on desktop" /><img src={realEstateMobile} alt="PageSpeed score of 91 on mobile" /></div></article><article className="performance-card"><div className="score-summary"><span>LOCAL SERVICES WEBSITE</span><strong>97</strong><p>Desktop performance</p><div><b>93</b> Mobile <b>97</b> Desktop</div></div><div className="speed-shots"><img src={servicesDesktop} alt="PageSpeed score of 97 on desktop" /><img src={servicesMobile} alt="PageSpeed score of 93 on mobile" /></div></article></div></section>
      <section className="contact" id="contact"><div className="contact-inner section-shell"><p className="section-kicker">05 / CONTACT</p><h2>Have a project<br />in mind? <em>Let&apos;s talk.</em></h2><div className="contact-actions"><a className="button button-coral" href="https://wa.me/917083655602" target="_blank" rel="noreferrer">Chat on WhatsApp <Arrow /></a><a className="text-link contact-email" href="mailto:ahmedsufyan434@gmail.com">ahmedsufyan434@gmail.com <Arrow /></a><p>Available for freelance work<br />and long-term collaborations.</p></div></div><div className="contact-orb">*</div></section>
      <footer className="footer section-shell"><a className="brand" href="#top"><span className="brand-mark">AS</span><span>Abu Sufyan</span></a><p>Copyright 2026 Abu Sufyan. Crafted with care.</p><a href="#top">Back to top &#8593;</a></footer>
    </>
  )
}

export default Home
