import Link from "next/link";

export default function Header() {
    return (
    <div className="flex justify-between p-5">
      <Link href="/" className="text-3xl">Muzer</Link>
      <div className="flex gap-5">
        <Link href="/">Features</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
    </div>
    )
}
