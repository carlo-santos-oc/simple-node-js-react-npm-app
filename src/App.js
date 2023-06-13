import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material'
import { css } from '@emotion/css';
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ClassNames } from '@emotion/react';

const cards = [
  { id: 1, header: 'Coming home', caption: 'First car ride back to Seattle.', source: 'https://olympiccollegefiles.s3.us-west-2.amazonaws.com/IMG-3081.jpg' },
  { id: 2, header: 'Exploring', caption: 'Rayna finding her spots in the apartment.', source: 'https://olympiccollegefiles.s3.us-west-2.amazonaws.com/IMG-3104.jpg' },
  { id: 3, header: 'New bed', caption: 'Enjoying her new bed.', source: 'https://olympiccollegefiles.s3.us-west-2.amazonaws.com/IMG-3149.jpg' },
  { id: 4, header: 'Couch sitting', caption: 'Watching the tv make noises.', source: 'https://olympiccollegefiles.s3.us-west-2.amazonaws.com/IMG-3166.jpg' },
  { id: 5, header: 'Vet visit', caption: 'First time at the vet.', source: 'https://olympiccollegefiles.s3.us-west-2.amazonaws.com/IMG-3219.jpg' },
  { id: 6, header: 'Another bed', caption: 'Enjoing yet another new bed.', source: 'https://olympiccollegefiles.s3.us-west-2.amazonaws.com/IMG-3291.jpg' },
  { id: 7, header: 'Hot weather', caption: 'Napping on the cool floor.', source: 'https://olympiccollegefiles.s3.us-west-2.amazonaws.com/IMG-3331.jpg' },
  { id: 9, header: 'Tuckered out', caption: 'Nap after playing.', source: 'https://olympiccollegefiles.s3.us-west-2.amazonaws.com/IMG-3351.jpg' },
  { id: 9, header: 'Bath time', caption: 'Not enjoying her first bath in the tub.', source: 'https://olympiccollegefiles.s3.us-west-2.amazonaws.com/IMG-3527.jpg' }
];

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={css`
          margin-right: 20px;
        `} />
          <Typography variant="h6">
            Carlo Santos IS491 Jenkins Project
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={css`
          background-color: #FFF;
          padding: 64px 0px 48px;
        `}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Rayna's Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              This is my IS491 project. I have created a React web application that is running in a pipeline on a Jenkins instance in a Docker Container. I recently got a new dog and decided to make my application a photo album of her as a puppy.
            </Typography>
            <div className={css`
          margin-top: 40px;
        `}>
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
        <Container maxWidth="md" className={css`
          padding: 20px 0;
        `}>
          <Grid container spacing={4}>
            {cards.map((val) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={css`
          height: 100%;
          display: flex;
          flex-direction: column;
        `}>
                  <CardMedia
                    key={val.id}
                    image={val.source}
                    title="Rayna image" className={css`
          padding-top: 66.67%;
        `} />
                  <CardContent className={css`
          flex-grow: 1;
        `}>
                    <Typography gutterBottom variant="h5">
                      {val.header}
                    </Typography>
                    <Typography>{val.caption}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="sm" color="primary">View</Button>
                    <Button size="sm" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}

          </Grid>
        </Container>

      </main>
      <footer className={css`
          padding: 50px 0;
          background color: #FFF;
        `}>
        <Typography variant="h6" align="center" gutterBottom>
          Created by: Carlo Santos
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          IS491 Jenkins project.
        </Typography>
      </footer>
    </>
  )
}

export default App;
