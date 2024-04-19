import React from 'react'
import "./CarouselComponent.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import AddIcons from '@mui/icons-material/AddCircle';

const CarouselComponent = (props: any) => {

  return (
    <div className='carousel-container'>
      <h1 className='carousel-top-text'>Lista de {props.name}</h1>
      <div className="carousel">
        <Card sx={{ maxWidth: 400 }} className='card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="540"
              image="kicthen.png"
              alt="Coisas para casa"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Coisas para Casa
              </Typography>
              <Typography variant="body2" color="text.secondary">
                30 itens
              </Typography>
              <Divider />
              <Typography variant="body2" color="text.secondary">
                Total da lista:
              </Typography>
              <Typography variant='h5'  >
                R$ 10.000,00
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* newcard */}
        <Card sx={{ maxWidth: 400 }} className='card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="540"
              image="kicthen.png"
              alt="Coisas para casa"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Coisas para Casa
              </Typography>
              <Typography variant="body2" color="text.secondary">
                30 itens
              </Typography>
              <Divider />
              <Typography variant="body2" color="text.secondary">
                Total da lista:
              </Typography>
              <Typography variant='h5'  >
                R$ 10.000,00
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* newcard */}
        <Card sx={{ maxWidth: 400 }} className='card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="540"
              image="kicthen.png"
              alt="Coisas para casa"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Coisas para Casa
              </Typography>
              <Typography variant="body2" color="text.secondary">
                30 itens
              </Typography>
              <Divider />
              <Typography variant="body2" color="text.secondary">
                Total da lista:
              </Typography>
              <Typography variant='h5'  >
                R$ 10.000,00
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* newcard */}
        <Card sx={{ maxWidth: 400 }} className='card'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="540"
              image="kicthen.png"
              alt="Coisas para casa"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Coisas para Casa
              </Typography>
              <Typography variant="body2" color="text.secondary">
                30 itens
              </Typography>
              <Divider/>
              <Typography variant="body2" color="text.secondary">
                Total da lista: 
              </Typography>
              <Typography variant='h5'  >
                R$ 10.000,00
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <Button variant="contained" startIcon={<AddIcons />} color='inherit'>
        Nova Lista
      </Button>
    </div>
  )
}

export default CarouselComponent
