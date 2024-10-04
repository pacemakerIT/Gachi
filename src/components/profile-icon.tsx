import { IconButton, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface ProfileIconProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void; // Update the type to include the event
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ onClick }) => {
  const theme = useTheme();

  return (
    <IconButton
      color="inherit"
      onClick={onClick}
      sx={{
        backgroundColor: 'transparent',
        borderRadius: '8px',
        width: '40px',
        height: '40px',
        padding: '4px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Box
          sx={{
            width: '9px',
            height: '9px',
            border: `2px solid ${theme.palette.text.primary}`,
            borderRadius: '50%',
            marginBottom: '2px',
          }}
        />
        <Box
          sx={{
            width: '15px',
            height: '9px',
            border: `2px solid ${theme.palette.text.primary}`,
            borderRadius: '50%',
          }}
        />
      </Box>
    </IconButton>
  );
};

export default ProfileIcon;
