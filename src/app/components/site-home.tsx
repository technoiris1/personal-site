import Link from "next/link";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaLastfm } from "react-icons/fa";

export default function SiteHome() {
  return (
    <main className="site-page">
      <div className="construction-frame">
        <div className="frame-content">
          <nav className="site-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/things">Things</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <section id="home" className="intro-copy" aria-labelledby="intro-title">
            <h1 id="intro-title">Heyo!<br /><em>I&apos;m Manan</em></h1>
            <div id="things" className="bio-copy">
              <p>im a high schooler from india. i got my hands on a computer when i was around 10 (i think), since then computers have been a huge part of my life.</p>
              <p>it started with games like minecraft, but eventually i got bored of the handful of games my machine could run. so one random day i decided to dive into how these things actually work. i still remember the first thing i came across was an ASCII character sheet, i just wanted to see what makes the player move forward when i press W.   </p>
              <p>i believe people can do great things when they come together. it used to be quite hard to do that a couple of decades ago, but now it's much easier to find people, communities and ideas online. online communities shaped me and my life, and i try to make similar environment for kids around me, for them to learn and create.</p>
              <p>
                If you&apos;re a teen, JOIN HACK CLUB. <Link href="https://hackclub.com" className="text-[#8a1c0c] hover:underline" target="_blank">hackclub.com.</Link>
              </p>
            </div>
            <nav className="social-links" aria-label="Social links">
              <Link href="https://github.com/technoiris1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub aria-hidden="true" />
              </Link>
              <Link href="https://www.linkedin.com/in/manan-sharma-434091281/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin aria-hidden="true" />
              </Link>
              <Link href="mailto:sharmamanan190@gmail.com" aria-label="Email">
                <FaEnvelope aria-hidden="true" />
              </Link>
              <Link href="https://www.last.fm/user/sharmamanan190" target="_blank" rel="noopener noreferrer" aria-label="Last.fm">
                <FaLastfm aria-hidden="true" />
              </Link>
            </nav>
          </section>
        </div>
      </div>
    </main>
  );
}
