import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./Styles";
import {ValidatorForm} from "react-material-ui-form-validator";
import {Button, Grid, TextField, Typography} from "@mui/material";

class LogIn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <>
                <ValidatorForm ref="form" className="pt-2">

                    <Grid className={classes.logIn_container}>
                        <Grid className={classes.logIn_form}>
                            <Grid className={classes.logIn_header}>
                                <Typography variant="h4" gutterBottom component="div" >
                                    Login
                                </Typography>
                            </Grid>
                            <Grid className={classes.text_field}>
                                <TextField id="outlined-basic" label="User Name" variant="outlined" size="small"/>
                                <TextField id="outlined-basic" label="Password" type="password" variant="outlined"
                                           size="small"/>
                            </Grid>
                            <Grid className={classes.logIn_button}>
                                <Button variant="contained" color="primary" href={"/"} style={{width:'150px'}}>Login</Button>
                            </Grid>
                            <Grid className={classes.click_here}>
                                <Typography variant="body2" gutterBottom component="div" style={{color:'black'}}>
                                    Create new user account? <span style={{color:'blue'}}>click here</span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                </ValidatorForm>
            </>
        )
    }
}

export default withStyles(styleSheet)(LogIn)