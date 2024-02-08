import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import NavHeader from "../../components/NavHeader";
import MyCards from "../../components/MyCards";
import Footer from "../../components/Footer";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const cards = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_1280.jpg",
    title: "Notebook",
    description: "Notebook na mesa de trabalho",
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2018/06/07/16/49/virtual-3460451_640.jpg",
    title: "Notebook e Celular",
    description: "Notebook e celular",
  },
  {
    id: 3,
    image: "https://cdn.pixabay.com/photo/2020/05/21/21/28/ai-5202865_640.jpg",
    title: "Notebook e mulher",
    description: "Notebook e mulher sentada no escritorio",
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2015/06/01/19/57/bodyworn-794105_640.jpg",
    title: "Policias",
    description: "Policias olhando o celular",
  },
];

function App() {
  const classes = useStyles();

  return (
    <>
      <NavHeader />
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Lista de Técnologias
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Esse é o nosso Primeiro Projeto em React, nele aprendemos a criar
              arrays de objetos, components, sobre props e muito mais!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Entrar
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Cancelar
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <MyCards data={cards} />
        </Container>
        {/* End hero unit */}
      </main>
      <Footer />
    </>
  );
}

export default App;
