import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-rose-600 p-4 mb-2.5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Pets Showcase</Link>
        </div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/add-pet">Add a new pet</Link>
          <Link href="/search">Search</Link>
          <Link href="/contact">Contatct Us</Link>
        </div>
      </div>
    </nav>
  );
}
