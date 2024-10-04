'use client';
import React from 'react';
import Image from 'next/image';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Container,
  Link,
  useMediaQuery,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  YouTube,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const logoUrl = '/images/logo.png';

// Social Media Link Type Definition
type SocialMediaLink = {
  href: string;
  icon: React.ReactNode;
};

type LinkItem = {
  name: string;
  href: string;
};

// Props type definition
interface LogoSectionProps {
  socialMediaLinks: SocialMediaLink[];
}

interface CategoryAccountSectionProps {
  categories: LinkItem[];
  accountLinks: LinkItem[];
}


// Logo and SNS Section
const LogoSnsSection: React.FC<LogoSectionProps> = ({ socialMediaLinks }) => {
  const theme = useTheme();
  return (
    <Grid size={{ md: 4 }} sx={{ textAlign: 'left' }}>
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: '1rem' }}>
          <Image
            src={logoUrl}
            alt="Gachi.live Logo"
            width={40}
            height={40}
            style={{
              marginRight: '10px',
            }}
          />

          <Typography variant="h6" gutterBottom>
            Gachi.live
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.customColor.gray, mb: '1rem' }}
        >
          Vivamus tristique odio sit amet velit semper, eu posuere turpis
          interdum. Cras egestas purus.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2 }}>
        {socialMediaLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>{link.icon}</IconButton>
          </Link>
        ))}
      </Box>
    </Grid>
  );
};

// Social Media Section
const SocialMediaSection: React.FC<{
  socialMediaLinksTop: SocialMediaLink[];
  socialMediaLinksBottom: SocialMediaLink[];
}> = ({ socialMediaLinksTop, socialMediaLinksBottom }) => {
  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      sx={{
        textAlign: 'justify',
        mt: '0.1rem',
        minWidth: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          mb: 3,
          paddingLeft: '-1rem',
        }}
      >
        <Link href="/" underline="none">
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Image
              src={logoUrl}
              alt="Gachi.live Logo"
              width={40}
              height={40}
              style={{
                marginRight: '10px',
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Gachi.live
            </Typography>
          </Box>
        </Link>
        <Link
          href="/help"
          underline="hover"
          color="inherit"
          sx={{ fontSize: '12px', color: 'gray' }}
        >
          Help
        </Link>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          justifyItems: 'center',
        }}
      >
        <Box sx={{ gridColumn: 'span 2' }}>
          {socialMediaLinksTop.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>{link.icon}</IconButton>
            </Link>
          ))}
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          {socialMediaLinksBottom.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>{link.icon}</IconButton>
            </Link>
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

// Category and Account Section
const CategoryAccountSection: React.FC<CategoryAccountSectionProps> = ({
  categories,
  accountLinks,
}) => {
  const theme = useTheme();
  return (
    <Grid
      size={{ xs: 12, md: 3 }}
      sx={{
        textAlign: { xs: 'center', md: 'left' },
        display: { xs: 'none', md: 'block' },
      }}
    >
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              mb: '1rem',
              color: theme.palette.customColor.gray,
              fontSize: { xs: '0.875rem', md: '1rem' },
            }}
          >
            CATEGORY
          </Typography>
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              underline="hover"
              color="inherit"
            >
              <Typography variant="body2" gutterBottom>
                {category.name}
              </Typography>
            </Link>
          ))}
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              mb: '1rem',
              color: theme.palette.customColor.gray,
              fontSize: { xs: '0.875rem', md: '1rem' },
            }}
          >
            YOUR ACCOUNT
          </Typography>
          {accountLinks.map((account) => (
            <Link
              key={account.name}
              href={account.href}
              underline="hover"
              color="inherit"
            >
              <Typography variant="body2" gutterBottom>
                {account.name}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

// Newsletter Section
const NewsletterSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); //Mobile

  return (
    <Grid
      size={{ xxs: 12, md: 4 }}
      sx={{
        textAlign: isMobile ? 'center' : 'left',
        margin: isMobile ? '1rem' : '0',
        ml: !isMobile ? '4rem' : '0',
      }}
    >
      {isMobile ? (
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.secondary,
            mb: '1rem',
            mt: '-1rem',
          }}
        >
          뉴스레터를 통해 <br /> 매주 새로운 소식을 만나보세요!
        </Typography>
      ) : (
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.customColor?.gray, mb: '1rem' }}
        >
          NEWSLETTER
        </Typography>
      )}

      {isMobile && (
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.customColor?.gray,
            mb: '1rem',
            mt: isMobile ? '0' : '1rem',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt erat enim.
        </Typography>
      )}

      <Box
        sx={{
          display: 'flex',
          gap: '0.5rem',
          flexDirection: isMobile ? 'column' : 'row',
          width: '100%',
          maxWidth: isMobile ? '100%' : '500px',
          justifyContent: isMobile ? 'center' : 'flex-start',
          margin: isMobile ? '0 auto' : '0',
          alignItems: 'center',
        }}
      >
        <TextField
          variant="outlined"
          label="Your email"
          size="small"
          fullWidth={isMobile}
          sx={{
            flex: 1,
            maxWidth: isMobile ? '90%' : '300px',
            mb: { xxs: '0.5rem', md: 0 },
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.primary.main,
            whiteSpace: 'nowrap',
            width: isMobile ? '90%' : 'auto',
            flexShrink: { md: 0 },
            borderRadius: '8px',
          }}
        >
          Subscribe
        </Button>
      </Box>
      {!isMobile && (
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.customColor?.gray,
            mt: '0.5rem',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt erat enim.
        </Typography>
      )}
    </Grid>
  );
};

// Footer Main Component
export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const socialMediaLinks: SocialMediaLink[] = [
    { href: 'https://www.facebook.com', icon: <Facebook /> },
    { href: 'https://www.twitter.com', icon: <Twitter /> },
    { href: 'https://www.instagram.com', icon: <Instagram /> },
    { href: 'https://www.pinterest.com', icon: <Pinterest /> },
    { href: 'https://www.youtube.com', icon: <YouTube /> },
  ];

  const socialMediaLinksTop = socialMediaLinks.slice(0, 2);
  const socialMediaLinksBottom = socialMediaLinks.slice(2);

  const categories = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Mentors', href: '/mentors' },
    { name: 'About', href: '/about' },
  ];

  const accountLinks = [
    { name: 'My Schedules', href: '/my-schedules' },
    { name: 'Log out', href: '/logout' },
    { name: 'Help', href: '/help' },
  ];

  return (
    <Box component="footer" sx={{ padding: '2rem 0', width: '100%' }}>
      {isMobile ? (
        //Mobile view
        <Container maxWidth="sm" sx={{ paddingX: '1.5rem' }}>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            {/* Newsletter section */}
            <NewsletterSection />

            {/* Social Media Section */}
            <SocialMediaSection
              socialMediaLinksTop={socialMediaLinksTop}
              socialMediaLinksBottom={socialMediaLinksBottom}
            />
          </Grid>
        </Container>
      ) : (
        //Desktop view
        <Container maxWidth="lg" sx={{ paddingX: '1rem' }}>
          <Grid
            container
            spacing={4}
            alignItems="flex-start"
            justifyContent="center"
            sx={{ mt: '1.5rem', mb: '2rem' }}
          >
            <LogoSnsSection socialMediaLinks={socialMediaLinks} />
            <CategoryAccountSection
              categories={categories}
              accountLinks={accountLinks}
            />
            <NewsletterSection />
          </Grid>
        </Container>
      )}
    </Box>
  );
}
