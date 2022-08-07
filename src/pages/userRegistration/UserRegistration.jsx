import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./Styles";
import {Autocomplete, Button, Grid, TextField, Typography} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from "@mui/material/IconButton";

class UserRegistration extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (

            <>
                <ValidatorForm ref="form" className="pt-2">
                    <Grid className={classes.customer_container}>
                        <Grid container className="pt-2" spacing={2}>
                            <Grid item lg={12} xs={12} sm={12} md={12}
                                  style={{
                                      height: '15vh',
                                      alignItems: 'center',
                                      display: 'flex',
                                      flexWrap: 'wrap',
                                      justifyContent: 'center',
                                      backgroundColor: '#ffffff'
                                  }}>
                                <Typography variant="h4" style={{margin: '30px 0 60px 0', color: 'black',}}>User
                                    Registration</Typography>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="center" alignItems="center" style={{height: '10vh'}}>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '20px 0 5px 0'}} container justifyContent="center" alignItems="center">
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder=""
                                        variant="outlined"
                                        size="small"
                                        style={{width: '40vw'}}
                                        label="First Name"
                                        // value={this.state.formData.id}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.id = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                        validators={['required']}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '20px 0 5px 0'}} container justifyContent="center" alignItems="center">
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder=""
                                        variant="outlined"
                                        size="small"
                                        style={{width: '40vw'}}
                                        label="Last Name"
                                        // value={this.state.formData.id}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.id = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                        validators={['required']}
                                    />
                                </Grid>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="space-evenly" alignItems="center" style={{height: '10vh'}}>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '10px 0 5px 0'}} container justifyContent="center" alignItems="center">
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder=""
                                        variant="outlined"
                                        size="small"
                                        style={{width: '40vw'}}
                                        label="Email"
                                        // value={this.state.formData.id}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.id = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                        validators={['required']}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '10px 0 5px 0'}} container justifyContent="center" alignItems="center">
                                    <TextValidator

                                        id="outlined-multiline-flexible"
                                        placeholder="10"
                                        variant="outlined"
                                        size="small"
                                        maxRows={4}
                                        style={{width: '40vw'}}
                                        label="User Name"
                                        // value={this.state.formData.id}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.id = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                        validators={['required']}
                                    />
                                </Grid>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="space-evenly" alignItems="center" style={{height: '10vh'}}>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '10px 0 5px 0'}} container justifyContent="center" alignItems="center">
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder=""
                                        variant="outlined"
                                        size="small"
                                        style={{width: '40vw'}}
                                        label="Password"
                                        // value={this.state.formData.id}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.id = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                        validators={['required']}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '10px 0 5px 0'}} container justifyContent="center" alignItems="center">
                                    <TextValidator

                                        id="outlined-multiline-flexible"
                                        placeholder="10"
                                        variant="outlined"
                                        size="small"
                                        maxRows={4}
                                        style={{width: '40vw'}}
                                        label="City"
                                        // value={this.state.formData.id}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.id = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                        validators={['required']}
                                    />
                                </Grid>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="space-evenly" alignItems="center" style={{height: '10vh'}}>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '10px 0 5px 0'}} container justifyContent="center" alignItems="center">
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder=""
                                        variant="outlined"
                                        size="small"
                                        style={{width: '40vw'}}
                                        label="Street"
                                        // value={this.state.formData.id}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.id = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                        validators={['required']}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '10px 0 5px 0'}} container justifyContent="center" alignItems="center">
                                    <TextValidator

                                        id="outlined-multiline-flexible"
                                        placeholder="10"
                                        variant="outlined"
                                        size="small"
                                        maxRows={4}
                                        style={{width: '40vw'}}
                                        label="Street No"
                                        // value={this.state.formData.id}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.id = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                        validators={['required']}
                                    />
                                </Grid>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="space-evenly" alignItems="center" style={{height: '10vh'}}>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '10px 0 5px 0'}} container justifyContent="center" alignItems="center">
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder=""
                                        variant="outlined"
                                        size="small"
                                        style={{width: '40vw'}}
                                        label="Zip Code"
                                        // value={this.state.formData.id}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.id = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                        validators={['required']}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '10px 0 5px 0'}} container justifyContent="center" alignItems="center">
                                    <TextValidator

                                        id="outlined-multiline-flexible"
                                        placeholder="10"
                                        variant="outlined"
                                        size="small"
                                        maxRows={4}
                                        style={{width: '40vw'}}
                                        label="Lat Value"
                                        // value={this.state.formData.id}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.id = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                        validators={['required']}
                                    />
                                </Grid>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="space-evenly" alignItems="center" style={{height: '10vh'}}>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '10px 0 5px 0'}} container justifyContent="center" alignItems="center">
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder=""
                                        variant="outlined"
                                        size="small"
                                        style={{width: '40vw'}}
                                        label="Long Value"
                                        // value={this.state.formData.id}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.id = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                        validators={['required']}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '10px 0 5px 0'}} container justifyContent="center" alignItems="center">
                                    <TextValidator

                                        id="outlined-multiline-flexible"
                                        placeholder="10"
                                        variant="outlined"
                                        size="small"
                                        maxRows={4}
                                        style={{width: '40vw'}}
                                        label="Mobile No"
                                        // value={this.state.formData.id}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.id = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                        validators={['required']}
                                    />
                                </Grid>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="flex-end" alignItems="flex-end" style={{height: '20vh'}}>
                                <Button variant="contained" color="error"
                                        style={{margin: '20px 0 100px 0', width: '120px'}}>Clear</Button>
                                <Button variant="contained"
                                        style={{margin: '20px 60px 100px 20px', width: '120px'}}>Save</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Grid>
                    <TableContainer component={Paper}
                                    style={{height: '45vh', width: '95vw',margin:'0 5px 0 20px', backgroundColor: '#eeeff1'}}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">First Name</TableCell>
                                    <TableCell align="left">Last Name</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">User Name</TableCell>
                                    <TableCell align="left">Password</TableCell>
                                    <TableCell align="left">City</TableCell>
                                    <TableCell align="left">Street</TableCell>
                                    <TableCell align="left">Street No</TableCell>
                                    <TableCell align="left">Zip Code</TableCell>
                                    <TableCell align="left">Lat Value</TableCell>
                                    <TableCell align="left">Long Value</TableCell>
                                    <TableCell align="left">Mobile No</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    // this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        // onClick={() => {
                                                        //     this.updateVehicle(row);
                                                        //     //this.updateCarImage();
                                                        // }}
                                                    >
                                                        <EditIcon color="primary"/>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        // onClick={() => {
                                                        //     this.deleteVehicle(row.vehicleId)
                                                        // }}
                                                    >
                                                        <DeleteIcon color="error"/>
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    // ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </>
        )
    }
}

export default withStyles(styleSheet)(UserRegistration)