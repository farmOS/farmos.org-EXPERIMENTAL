import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby-material-ui-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import Paper from '@material-ui/core/Paper';
import theme from '../theme';

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1.3rem !important',
    marginTop: '0 !important',
  },
  pos: {
    marginBottom: 12,
  },
  consideration: {
    background: theme.palette.primary.light,
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    fontSize: '.8rem',
    lineHeight: '1.2',
    marginTop: '.5rem',
    color: 'white',
  },
  'consideration--warning': {
    background: '#ffc107'
  },
  icon: {
    marginRight: '5px',
    fontSize: '1.3rem'
  }
});

export default function ContribModule({module}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="h6" component="h2" className={classes.title}>{module.name}</Typography>
        <Typography variant="body2" component="p" color='textSecondary'>{module.description}</Typography>
        {module.considerations && module.considerations.map(info => {
          return (
            <Paper className={classes.consideration + ' ' + classes['consideration--' + info.type]}>
              { info.type === 'info' && (<InfoIcon className={classes.icon} />)}
              { info.type === 'warning' && (<WarningIcon className={classes.icon} />)}
              {info.value}
            </Paper>
          )
        })}
      </CardContent>
      <CardActions>
        <Button component={Link} to={'https://www.drupal.org/project/' + module['id']} size="small" variant='contained' color='primary'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
