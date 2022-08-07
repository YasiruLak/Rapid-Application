import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./Styles";
import {Card, CardContent, Grid, Typography} from "@mui/material";
// import {Card, CardContent,IconButton} from "@material-ui/core";

class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <Grid className={classes.dashboard_container}>
                <Grid className={classes.admin_card}>
                    <Grid
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <Card sx={{minWidth: 275}} style={{
                            backgroundColor: '#808e9b',
                            color: 'white',
                            width: '200px',
                            height:'150px',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <CardContent style={{
                                alignItems: 'center', justifyContent: 'center', display: 'flex',
                                flexWrap: 'wrap', flexDirection: 'column',
                            }}>
                                <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom
                                            style={{fontSize: '30px',color:'black'}}>
                                    Product
                                </Typography>
                                <Typography lg={{mb: 1.5}} color="text.secondary" style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '26px',
                                    color:'black'
                                }}>
                                    60
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <Card sx={{minWidth: 275}} style={{
                            backgroundColor: '#808e9b',
                            color: 'white',
                            width: '200px',
                            height:'150px',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <CardContent style={{
                                alignItems: 'center', justifyContent: 'center', display: 'flex',
                                flexWrap: 'wrap', flexDirection: 'column',
                            }}>
                                <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom
                                            style={{fontSize: '30px',color:'black'}}>
                                    Cart
                                </Typography>
                                <Typography lg={{mb: 1.5}} color="text.secondary" style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '26px',
                                    color:'black'
                                }}>
                                    12
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <Card sx={{minWidth: 275}} style={{
                            backgroundColor: '#808e9b',
                            color: 'white',
                            width: '200px',
                            height:'150px',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <CardContent style={{
                                alignItems: 'center', justifyContent: 'center', display: 'flex',
                                flexWrap: 'wrap', flexDirection: 'column',
                            }}>
                                <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom
                                            style={{fontSize: '30px',color:'black'}}>
                                    User
                                </Typography>
                                <Typography lg={{mb: 1.5}} color="text.secondary" style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '26px',
                                    color:'black'
                                }}>
                                  43
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(DashBoard)