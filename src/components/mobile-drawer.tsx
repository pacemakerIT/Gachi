import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  anchor?: 'left' | 'right'; // Allow both left and right anchors
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  open,
  onClose,
  links,
  anchor = 'left',
}) => (
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
    </List>
  </Drawer>
);

export default MobileDrawer;
