import React from 'react';
import {
  Home,
  Users,
  BookOpen,
  group,
  SquareDashedBottom,
  Cog,
  Truck,
  Boxes
} from 'lucide-react';
import Link from 'next/link';

const links = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Books', href: '/store', icon: BookOpen },
  { name: 'Sell or Lend', href: '/store/sell-lend', icon: SquareDashedBottom },
  { name: 'Track Order', href: '/store/track-order', icon: Truck },
  { name: 'Community', href: '/store/communities', icon: Users },
  { name: 'Settings', href: '/store/setting', icon: Cog },
  { name: 'About', href: '/store/about', icon: Boxes },
  { name: 'Admin', href: '/store/admin', icon: group },
];

const About = () => {
  return (
    <>
      {links.map((link) => {
        const IconComponent = link.icon;

        // Check if IconComponent is a valid React component
        if (IconComponent) {
          return (
            <Link key={link.name} href={link.href} className='flex h-[48px] grow items-center justify-start p-2 gap-3 mt-1 rounded-md bg-white '>
              <IconComponent className='w-6' />
              <p className='hidden md:block font-bold'>{link.name}</p>
            </Link>
          );
        } else {
          // Handle the case where link.icon is not a valid component
          console.error(`Invalid icon component for link: ${link.name}`);
          return null;
        }
      })}
    </>
  );
};


export default About;
