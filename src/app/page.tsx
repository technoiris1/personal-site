import Link from "next/link";


export default function Home() {
return ( 
<div className="flex min-h-screen flex-col items-center justify-between bg-[#f5f5f5] p-24"> <div className="flex flex-col items-center"> <p className="text-2xl text-black">
Heyo! I'm Manan </p>
    <span className="text-lg text-gray-500 italic leading-tight">
      /muh-nun/
    </span>

    <p className="mt-2 text-lg text-gray-500">
      I'm a 17 y/o from India. I like to make webapps and hardware. One more thing I really REALLY love are hackathons. I have attended and organised a bunch. I got into computers when I was in 6th grade, my school had a workshop on how to make games with scratch. 
      <br />
      I'm active in a few communities, like Hack Club. If you're a teen, JOIN HACK CLUB: <Link href="https://hackclub.com" className="text-blue-500 hover:underline"> hackclub.com. </Link>
    </p>
  </div>
</div>


);
}
