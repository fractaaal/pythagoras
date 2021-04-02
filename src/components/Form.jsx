import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const Form = (props) => {
    const classes = useStyles();

    return(
        <div>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField name="s" label="sを入力" variant="outlined" onChange={props.handleChange}/>
            <TextField name="t" label="tを入力" variant="outlined" onChange={props.handleChange}/>
            <Button variant="contained" color="primary" href="#contained-buttons" onClick = {props.calculate}>
                Link
            </Button>
        </form>


        </div>

    )
}

export default Form