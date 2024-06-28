import Link from 'next/link';
import { sigmar } from '@/app/layout';

export default function Navbar() {
  const links = [
    {
      href: '/',
      text: 'Home'
    }, {
      href: '/add-pet',
      text: 'Submit a Pet'
    }, {
      href: '/pets',
      text: 'Browse Pets'
    }, {
      href: '/about',
      text: 'About'
    }
  ]
  return (
    <nav className="p-4 mb-2.5 text-black ">
      <div className="container mx-auto flex justify-between items-center">
        <div className={`${sigmar.className} text-5xl font-bold`}>
          <Link href="/">Pet Parade</Link>
        </div>
        <div className="space-x-4">
          {links.map(link => <Link href={link.href}>{link.text}</Link>)}
        </div>
      </div>
    </nav>
  );
}
