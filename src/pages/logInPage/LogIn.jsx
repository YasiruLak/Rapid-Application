import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./Styles";
import {ValidatorForm} from "react-material-ui-form-validator";
import {Grid} from "@mui/material";

class LogIn extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return(
            <>
                <ValidatorForm ref="form" className="pt-2">

                    <Grid className={classes.logIn_container} >

                    </Grid>

                </ValidatorForm>
            </>
        )
    }
}

export default withStyles(styleSheet)(LogIn)