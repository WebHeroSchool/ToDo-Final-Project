import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const InputItem = () => <div>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Type in what you have to do..." id="fullWidth" />
    </Box>
</div>;

export default InputItem;