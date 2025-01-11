import Link from "next/link";

export default function Home() {
  
  return (<>
  <div className="h-screen flex justify-center items-center">
    <Link className="font-bold text-blue-500 text-3xl" href="/spanish">
      Spanish
    </Link>
  </div>
  </>)
}
