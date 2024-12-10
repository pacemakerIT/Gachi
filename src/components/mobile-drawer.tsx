import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { useAuth } from 'context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  anchor?: 'left' | 'right'; // Allow both left and right anchors
  isProfileDrawer: boolean;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  open,
  onClose,
  links,
  anchor = 'left',
  isProfileDrawer,
}) => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          top: '80px', // This sets the drawer lower, to appear below the nav bar
          zIndex: (theme) => theme.zIndex.appBar + 2, // Ensure it's above the nav bar
        },
      }}
    >
      <List>
        {links.map((link) => (
          <ListItemButton
            component={Link}
            href={link.href}
            key={link.href}
            onClick={onClose}
          >
            <ListItemText primary={link.label} />
          </ListItemButton>
        ))}

        {isProfileDrawer && isLoggedIn ? (
          <ListItemButton key="1" onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItemButton>
        ) : null}
      </List>
    </Drawer>
  );
};

export default MobileDrawer;
