import Link from "next/link";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Home() {
  return (
    <main className="site-page">
      <div className="construction-frame">
        <div className="frame-content">
          <section className="intro-copy" aria-labelledby="intro-title">
            <h1 id="intro-title">Heyo!<br /><em>I&apos;m Manan</em></h1>
            <p className="pronunciation">{"//muh-nun//"}</p>
            <div className="bio-copy">
              <p>I&apos;m a 17 y/o from India. I like to make webapps and hardware. One thing I really REALLY love are hackathons. I have attended and organised a bunch, and they&apos;ve been a huge part of my life. </p>
                <p>I got into computers when I was in 6th grade. Since then I&apos;ve been trying to learn more about machines. </p>
                <p>These days, I help run events @ <Link href="https://hackclub.com" target="_blank">Hack Club </Link> and work as an Operations Contributor @ <Link href="https://hackclub.com/fiscal-sponsorship" target="_blank"> HCB.</Link> I&apos;m active in a few communities like Hack Club. It has introduced me to some of the most incredible people I know. </p>
                
                <p>
                If you&apos;re a teen, JOIN HACK CLUB. <Link href="https://hackclub.com">hackclub.com.</Link> </p>
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
            </nav>

          </section>
        </div>
      </div>
    </main>
  );
}
