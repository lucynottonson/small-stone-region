'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import React from 'react';

export default function Navbar(): React.ReactElement {
  const pathname = usePathname();

  const links = [
    { name: 'Pond', href: '/pond' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Cave', href: '/cave' },
    { name: 'Garden', href: '/garden' },
    { name: 'Elsewhere', href: '/otherprojects' },
    { name: 'Info', href: '/info' },
  ];

  const hoverAnim = { scale: 1.1, y: -2 };
  const tapAnim = { scale: 0.95 };
  const spring = { type: 'spring', stiffness: 300, damping: 20 };

  return (
    <nav className="navbar" role="navigation" aria-label="Primary">
      <ul className="navbar__list" role="menubar">
        {links.map(({ name, href }) => {
          const isActive = pathname === href || pathname?.startsWith(`${href}/`);
          return (
            <li key={href} className="navbar__item" role="none">
              <motion.div
                className="navbar__link-wrap"
                {...(!isActive && { whileHover: hoverAnim, whileTap: tapAnim, transition: spring })}
              >
                <Link
                  href={href}
                  role="menuitem"
                  className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {name}
                </Link>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}