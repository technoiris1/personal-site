type SocialsProps = {
    className?: string
}

export default function Socials({ className = '' }: SocialsProps){
    return(
    <div className={`bg-[#fffdf6] w-full h-full border-[3px] border-[#201d15] flex flex-col ${className}`}>
    <div className="pt-8 pl-8">
    <p className="hero-name text-5xl tracking-normal text-[#201d15]">Socials</p>
    </div>
    <div className="flex-1 pt-4 pl-8">
        <p className="text-[#201d15]" style={{ fontFamily: 'var(--font-montserrat)', fontWeight: '550' }}>I'm 16 and I like machines.</p>
        </div>
    </div>)}