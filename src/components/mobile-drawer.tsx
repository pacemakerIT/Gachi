import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose, links }) => (
  <Drawer anchor="left" open={open} onClose={onClose}>
    <List>
      {links.map((link) => (
        <ListItemButton component={Link} href={link.href} key={link.href} onClick={onClose}>
          <ListItemText primary={link.label} />
        </ListItemButton>
      ))}
    </List>
  </Drawer>
);

export default MobileDrawer;
