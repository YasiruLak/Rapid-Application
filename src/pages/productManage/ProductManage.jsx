import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./Styles";
import {Autocomplete, Button, Grid, TextField, Typography} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import PersonIcon from '@mui/icons-material/Person';

class ProductManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryTypes: [
                {
                    type: 'Small'
                },
                {
                    type: 'Medium'
                },
                {
                    type: 'Large'
                }
            ],
        }
    }


    render() {
        const {classes} = this.props
        return (
            <>
                <ValidatorForm ref="form" className="pt-2">
                    <Grid className={classes.product_container}>
                        <Grid container className="pt-2" spacing={2}>
                            <Grid item lg={12} xs={12} sm={12} md={12}
                                  style={{
                                      alignItems: 'center',
                                      display: 'flex',
                                      flexWrap: 'wrap',
                                      justifyContent: 'center',
                                      backgroundColor: '#ffffff'
                                  }}>
                                <Typography variant="h4" style={{margin: '20px 0 60px 0', color: 'black',}}>Product
                                    Manage</Typography>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '20px 0 10px 0'}} container
                                      justifyContent="center" alignItems="center">
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder="D00-001"
                                        variant="outlined"
                                        size="small"
                                        style={{width: '40vw'}}
                                        label="Title"
                                        // value={this.state.formData.id}
                                        // onChange={(e) => {
                                        //     let formData = this.state.formData
                                        //     formData.id = e.target.value
                                        //     this.setState({formData})
                                        // }}
                                        validators={['required']}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '20px 0 10px 0'}} container
                                      justifyContent="center" alignItems="center"
                                >
                                    <TextValidator
                                        id="outlinedbasic"
                                        placeholder="D00-001"
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
                                  alignItems="center">
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
                                        options={this.state.categoryTypes}
                                        size="small"
                                        renderInput={(params) => <TextField {...params} label="Category"/>}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={6} style={{margin: '30px 0 40px 0'}} container
                                      justifyContent="center" alignItems="center"
                                >
                                    <TextValidator

                                        id="outlined-multiline-flexible"
                                        placeholder="D00-001"
                                        variant="outlined"
                                        multiline
                                        maxRows={4}
                                        style={{width: '40vw'}}
                                        label="Description"
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
                            <Grid width="100%" container direction="row" justifyContent="flex-start" alignItems="center">
                                <div className={classes.img_div}>
                                    <PersonIcon style={{color:'D9D9D9',fontSize:'180px'}}/>
                                </div>
                                <div><input

                                    style={{display: 'none'}}
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file01"
                                    multiple
                                    type="file"
                                    // onChange={(e) => {
                                    //     this.setState({
                                    //         frontImage: e.target.files[0],
                                    //         frontView : URL.createObjectURL(e.target.files[0])
                                    //     })
                                    // }}
                                />
                                    <label htmlFor="contained-button-file01">
                                        <Button variant="contained" size="small" component="span"
                                        style={{margin:'40px 0 0 20px',backgroundColor:'white',color:'black'}}
                                        >
                                            Choose Image
                                        </Button>
                                    </label>

                                </div>
                            </Grid>
                            <Grid width="100%" container direction="row" justifyContent="flex-end" alignItems="flex-end">
                                <Button variant="contained" color="error" style={{margin:'20px 0 30px 0',width:'120px'}}>Clear</Button>
                                <Button variant="contained" style={{margin:'20px 60px 30px 20px',width:'120px'}}>Save</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </ValidatorForm>
            </>
        )
    }
}

export default withStyles(styleSheet)(ProductManage)