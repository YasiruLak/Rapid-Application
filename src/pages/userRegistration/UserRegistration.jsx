import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./Styles";
import {Grid} from "@mui/material";

class UserRegistration extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return(

            <Grid className={classes.customer_container}>

            </Grid>
        )
    }
}

export default withStyles(styleSheet)(UserRegistration)