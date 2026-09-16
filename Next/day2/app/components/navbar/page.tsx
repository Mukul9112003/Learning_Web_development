import Link from "next/link"
export default function Navbar(){
    return(
    <nav>
        <Link href="/home"> Home    </Link>{" "}
        <Link href="/patient"> Patient  </Link>{" "}
        <Link href="/dashboard"> DashBorad  </Link>
        <Link href="/about"> About  </Link>{" "}
    </nav>
    )
}