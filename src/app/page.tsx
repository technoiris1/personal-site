import Link from "next/link";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaLastfm } from "react-icons/fa";


export default function Home() {
  return (
    <main className="site-page">
      <div className="construction-frame">
        <div className="frame-content">
          <nav className="site-nav" aria-label="Main navigation">
            <Link href="#home">Home</Link>
            <Link href="#things">Things</Link>
            <Link href="/blogs/overglade.md">Blog</Link>
            <Link href="mailto:manan@hackclub.com">Contact</Link>
          </nav>
          <section id="home" className="intro-copy" aria-labelledby="intro-title">
            <h1 id="intro-title">Heyo!<br /><em>I&apos;m Manan</em></h1>
            <p className="pronunciation font-[#8a1c0c]">{"//muh-nun//"}</p>
            <div id="things" className="bio-copy">
              <p>ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger</p>
                <p>ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger </p>
                <p>ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger ich bin ein heidelberger </p>
                
                <p>
                If you&apos;re a teen, JOIN HACK CLUB. <Link href="https://hackclub.com" className="text-[#8a1c0c] hover:underline">hackclub.com.</Link> </p>
            </div>
            <nav className="social-links" aria-label="Social links">
              <Link href="https://github.com/technoiris1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub aria-hidden="true" />
              </Link>
              <Link href="https://www.instagram.com/technoiris1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram aria-hidden="true" />
              </Link>
              <Link href="https://www.linkedin.com/in/manan-sharma-434091281/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin aria-hidden="true" />
              </Link>
              <Link href="mailto:manan@hackclub.com" aria-label="Email">
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
