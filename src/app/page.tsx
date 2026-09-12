import Link from "next/link";


export default function Home() {
  return (
    <main className="site-page">
      <div className="construction-frame">
        <div className="frame-content">
          <section className="intro-copy" aria-labelledby="intro-title">
            <h1 id="intro-title">Heyo!<br /><em>I&apos;m Manan</em></h1>
            <p className="pronunciation">//muh-nun//</p>
            <div className="bio-copy">
              <p>I&apos;m a 17 y/o from India. I like to make webapps and hardware. One more thing I really REALLY love are hackathons. I have attended and organised a bunch. I got into computers when I was in 6th grade, my school had a workshop on how to make games with scratch.</p>
              <p>I&apos;m active in a few communities, like Hack Club. If you&apos;re a teen, JOIN HACK CLUB: <Link href="https://hackclub.com">hackclub.com.</Link></p>
            </div>
          </section>
        </div>
        <footer className="frame-footer">
          <div className="warning-stripes" aria-hidden="true" />
        </footer>
      </div>
    </main>
  );
}
