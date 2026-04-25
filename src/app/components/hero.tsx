type HeroProps = {
    className?: string
}

export default function Hero({ className = '' }: HeroProps){
    return(
    <div className={`bg-[#fffdf6] w-full h-full flex flex-col ${className} border-[3px] border-[#201d15]`}>
    <div className="pt-4 pl-4 sm:pt-6 sm:pl-6 lg:pt-8 lg:pl-8">
    <p className="hero-name text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl leading-[0.95] tracking-normal text-[#201d15]">Hi, I'm Manan.</p>
    </div>
    <div className="flex-1 pt-3 pl-4 pr-4 sm:pt-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8">
        <p className="text-sm sm:text-base lg:text-lg text-[#201d15] leading-snug" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: '550' }}>I'm 16 and I like machines.</p>
        </div>
    </div>)}