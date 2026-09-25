import Link from "next/link";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaLastfm } from "react-icons/fa";

export default function Things() {
  return (
    <main className="site-page">
      <div className="construction-frame">
        <div className="frame-content">
          <nav className="site-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/things">Things</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <section id="home" className="intro-copy" aria-labelledby="intro-title">
            <h1 id="intro-title">WIP</h1>
          </section>
        </div>
      </div>
    </main>
  );
}
