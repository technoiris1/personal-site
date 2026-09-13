import Link from "next/link";


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
          </section>
        </div>
      </div>
    </main>
  );
}
