type HeroProps = {
    className?: string
}
import Link from "next/link";
export default function Hero({ className = '' }: HeroProps){
    return(
    <div className={`bg-[#fffdf6] w-full h-full flex flex-col ${className} border-[3px] border-[#201d15]`}>
    <div className="pt-4 pl-4 sm:pt-6 sm:pl-6 lg:pt-8 lg:pl-8">
    <p className="hero-name text-7xl sm:text-6xl lg:text-6xl 2xl:text-7xl leading-[0.95] tracking-normal text-[#201d15]">Hi, I'm Manan.</p>
    </div>
    <div className="flex-1 pt-3 pl-4 pr-4 sm:pt-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
        <nav
            aria-label="Social links"
            className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600 }}
        >
            <Link
                href="https://github.com/technoiris1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border-2 border-[#201d15] bg-[#f4e9d2] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[#201d15] transition hover:bg-[#ead9ba]"
            >
                GitHub
            </Link>
            <Link
                href="https://www.linkedin.com/in/manan-sharma-434091281/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border-2 border-[#201d15] bg-[#f4e9d2] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[#201d15] transition hover:bg-[#ead9ba]"
            >
                LinkedIn
            </Link>
            <Link
                href="https://hackclub.enterprise.slack.com/team/U0807ADEC6L"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border-2 border-[#201d15] bg-[#f4e9d2] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[#201d15] transition hover:bg-[#ead9ba]"
            >
                HC Slack
            </Link>
            <Link
                href="https://www.last.fm/user/sharmamanan190"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border-2 border-[#201d15] bg-[#f4e9d2] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[#201d15] transition hover:bg-[#ead9ba]"
            >
                Last.fm
            </Link>
            
        </nav>
        </div>
    </div>)}