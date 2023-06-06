import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material'
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  return(
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Rayna's Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              This is my IS491 project. I have created a React web application that is running in a pipeline on a Jenkins instance in a Docker Container. I recently got a new dog and decided to make my application a photo album of her as a puppy.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    
                      <Button variant="contained" color="primary">
                        See photos
                      </Button>
                    
                </Grid>
                <Grid item>
                 
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item>
              <Card>
                <CardMedia
                image="https://source.unsplash.com/random"
                title="image title" />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>This is a media card</Typography>
                </CardContent>
                <CardActions>
                  <Button size="sm" color="primary">View</Button>
                  <Button size="sm" color="primary">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default App;
