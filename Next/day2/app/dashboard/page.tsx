import Link from "next/link"
export default function dashboard() {
  return (
    <>
      <h1>Dashboard </h1>
      <p>This is my first Next.js application.</p>
      <Link href="/patient/101">Patient</Link>
    </>
  );
}
