import NextLink from 'next/link';
import type { ReactNode } from 'react';

interface StyledLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const StyledLink: React.FC<StyledLinkProps> = ({ href, children, className = '' }) => {
  return (
    <NextLink href={href}>
      <a href={href} className={`text-blue-600 hover:text-blue-800 underline ${className}`}>
        {children}
      </a>
    </NextLink>
  );
};

export default StyledLink;
