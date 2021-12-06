import { useState } from "react";
import { useDispatch } from "react-redux";
import { singupThunk } from '../redux/auth/thunks';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            default:
                alert('check input name please ');
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name,
            email,
            password
        }
    
        dispatch(singupThunk(user));
        reset();
    };
    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                        >
                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Full Name"
                            name="name"
                            helperText="example: Den Braun"
                            autoComplete="name"
                            color="secondary"
                            onChange={handleChange}
                            autoFocus
                        />
                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            helperText="example: DenBraun@mail.com"
                            autoComplete="email"
                            color="secondary"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            helperText="min 6 symbol"
                            autoComplete="current-password"
                            color="secondary"
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                    </Box>
                </Box>
            </Container>
            </ThemeProvider>
        </>
    )
}