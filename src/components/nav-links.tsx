import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface NavLinksProps {
  links: { href: string; label: string }[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {links.map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
          passHref
          style={{
            textDecoration: 'none',
            color: theme.palette.text.primary,
            marginRight: index === links.length - 1 ? '50px' : '20px',
            fontSize: theme.typography.body1.fontSize,
            transition: 'color 0.3s',
            padding: '0 5px',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = theme.palette.text.secondary)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = theme.palette.text.primary)
          }
        >
          {link.label}
        </Link>
      ))}
    </Box>
  );
};

export default NavLinks;
