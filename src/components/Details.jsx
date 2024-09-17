import React from 'react'
import {  
    Box,
    Button,
    Stack,
    TextField
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'

const Details = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            phone: data.get('phone'),
        });
    }


    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            px: 2,
        }}
        >
            <Title 
            text={
                'Interessado em comprar uma propriedade?'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Se você está interessado em comprar uma propriedade, nos contate.'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />

            <Box 
            component="form" 
            noValidate 
            onSubmit={handleSubmit} 
            sx={{ 
                mt: 1,
                py: 2
            }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Seu número"
                    type="phone"
                    id="phone"
                    autoComplete="current-phone"
                />
                <Button 
                variant="contained" 
                fullWidth
                type="submit"
                size="medium"
                sx= {{ 
                    fontSize: '0.9rem',
                    textTransform: 'capitalize', 
                    py: 2,
                    mt: 3, 
                    mb: 2,
                    borderRadius: 0,
                    backgroundColor: '#14192d',
                    "&:hover": {
                        backgroundColor: '#1e2a5a',
                    }
                }}
                >
                    Enviar
                </Button>
            </Box>
        </Stack>
    )
}

export default Details;