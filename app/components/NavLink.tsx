'use client';

import FlipText from './FlipText';

type NavLinkProps = {
  href: string;
  children: string;
};

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="header-nav-link"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <FlipText
        text={children}
        className="header-nav-flip"
        rotateDirection="top"
        staggerMs={35}
      />
    </a>
  );
}
