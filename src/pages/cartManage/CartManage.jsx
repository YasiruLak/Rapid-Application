import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./Styles";
import {Autocomplete, Button, Grid, TextField, Typography} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";

class CartManage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            userNames: [

            ],
            productTitles: [

            ],
        }

    }

    render() {
        const {classes} = this.props
        return(
            <>
                <ValidatorForm ref="form" className="pt-2">
                    <Grid className={classes.cart_container}>
                        <Grid container className="pt-2" spacing={2}>
                            <Grid item lg={12} xs={12} sm={12} md={12}
                                  style={{
                                      height:'20vh',
                                      alignItems: 'center',
                                      display: 'flex',
                                      flexWrap: 'wrap',
                                      justifyContent: 'center',
                                      backgroundColor: '#ffffff'
                                  }}>
                                <Typography variant="h4" style={{margin: '30px 0 60px 0', color: 'black',}}>Cart
                                    Manage</Typography>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="center" alignItems="center" style={{height:'15vh'}}>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '20px 0 10px 0'}} container
                                      justifyContent="center" alignItems="center">
                                    <Autocomplete
                                        // onChange={(e, value, r) => {
                                        //
                                        //     let formData = this.state.formData
                                        //     formData.fuelType = value.type
                                        //     this.setState({formData})
                                        //
                                        // }}
                                        getOptionLabel={
                                            (option) => option.type
                                        }
                                        style={{width: '40vw'}}
                                        id="controllable-states-demo"
                                        options={this.state.userNames}
                                        size="small"
                                        renderInput={(params) => <TextField {...params} label="User Name"/>}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '20px 0 10px 0'}} container
                                      justifyContent="center" alignItems="center"
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder=""
                                        variant="outlined"
                                        size="small"
                                        style={{width: '40vw'}}
                                        label="Price"
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
                            <Grid width="100%" container direction="row" justifyContent="space-evenly"
                                  alignItems="center" style={{height:'15vh'}}>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '30px 0 40px 0'}} container
                                      justifyContent="center" alignItems="center"
                                >
                                    <Autocomplete
                                        // onChange={(e, value, r) => {
                                        //
                                        //     let formData = this.state.formData
                                        //     formData.fuelType = value.type
                                        //     this.setState({formData})
                                        //
                                        // }}
                                        getOptionLabel={
                                            (option) => option.type
                                        }
                                        style={{width: '40vw'}}
                                        id="controllable-states-demo"
                                        options={this.state.productTitles}
                                        size="small"
                                        renderInput={(params) => <TextField {...params} label="Product Title"/>}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '30px 0 40px 0'}} container
                                      justifyContent="center" alignItems="center"
                                >
                                    <TextValidator

                                        id="outlined-multiline-flexible"
                                        placeholder="10"
                                        variant="outlined"
                                        size="small"
                                        maxRows={4}
                                        style={{width: '40vw'}}
                                        label="Qty"
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
                            <Grid width="100%" container direction="row" justifyContent="flex-end" alignItems="flex-end" style={{height:'50vh'}}>
                                <Button variant="contained" color="error" style={{margin:'20px 0 100px 0',width:'120px'}}>Clear</Button>
                                <Button variant="contained" style={{margin:'20px 60px 100px 20px',width:'120px'}}>Save</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </>
        )
    }
}

export default withStyles(styleSheet)(CartManage)