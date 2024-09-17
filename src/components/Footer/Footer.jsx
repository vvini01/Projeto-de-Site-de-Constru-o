import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'Endereço'} />
        <FooterLink 
        text={'São Paulo, São Paulo'} 
        />
        <FooterLink 
        text={'11 99999-9999'} 
        />
        <FooterLink 
        text={'casapravoce@gmail.com'} 
        />
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'Nossos Serviços'} />
        <FooterLink text={'Comprar Casa'} />
        <FooterLink text={'Vender Casa'} />
        <FooterLink text={'Alugar Casa'} />
        <FooterLink text={'Construir Casa'} />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'Nossa Empresa'} />
        <FooterLink text={'Reportar'} />
        <FooterLink text={'Entre em Contato'} />
        <FooterLink text={'Gerenciamento'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Casa pra Você'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; 2020 CPV LTDA
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer