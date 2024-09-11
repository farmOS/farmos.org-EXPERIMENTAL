import * as React from "react"
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import theme from '../../../theme';
import ContribModule from '../../../components/contrib-module';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  main: {
    '& h1': {
      color: theme.palette.text.secondary,
      fontWeight: 300,
      fontSize: '2rem',
      lineHeight: 1.3,
      letterSpacing: '-.01em',
      margin: '0 0 1.25rem',
    },
    '& h2': {
      margin: '1.6rem 0 0.64rem',
      fontSize: '1.5625rem',
      fontWeight: 300,
      lineHeight: 1.4,
      letterSpacing: '-.01em',
    }
  },
  modules: {
    flexGrow: 1,
  }
});

const ProjectsPage = () => {
  const classes = useStyles();
  const [contribModules, setContribModules] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://raw.githubusercontent.com/wotnak/farmos-community-projects/main/projects.json`)
      const data = await response.json();
      if (data.projects) {
        setContribModules(data.projects)
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Helmet title="Contrib modules"></Helmet>
      <Box component='main' className={classes.main}>
        <Typography variant='h1'>Contrib modules</Typography>
        <Grid container className={classes.modules} spacing={2}>
          {contribModules.length > 0 && contribModules.map(module => {
            return (<Grid item xs={12} md={6}><ContribModule module={module} /></Grid>)
          })}
        </Grid>
      </Box>
    </>
  );
};

export default ProjectsPage;
