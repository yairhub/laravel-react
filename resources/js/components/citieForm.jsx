import React,{Component} from 'react';
import axios from 'axios';
import Joi from 'joi-browser';
import Button from './common/button';
import Input from './common/input';
import {mapToModel,validate,validateProperty} from './utils';
import {getCitie,editCitie,addCitie} from './services/citieService';


import Form from './common/form';

const baseApi = process.env.MIX_BASE_API;
const baseURL = process.env.MIX_BASE_URL;

class CitieForm extends Component {
    state = {
        
        data: { Name:'',CountryCode:'',District:'',Population:''},
        dataProps: [],
        errors: {}
       
    }
    schema = {
        Name: Joi.string().required(),
        CountryCode: Joi.string().required(),
        District: Joi.string().required(),
        Population: Joi.number().required()
    };
     
    constructor (){
        super();
        this.state.dataProps = Object.keys({...this.state.data});
    }
     
    // You can also pass a callback which will be called synchronously with the validation result.
    async componentWillMount(){
        const {params} = this.props.match;
        const data = await getCitie(params.id);
        this.setState({data});
    }
   

    handleSubmit = async (e)=>{
        e.preventDefault();
        const {data} = this.state
        const errors = validate(data,this.schema);
        this.setState({errors :errors || {}});

        const {params} = this.props.match;
        const obj = mapToModel(data);
        
        if(params.id === 'new') {
           await addCitie(obj);
           return window.location = baseURL;
        } 
        await editCitie(params.id,obj);
        return window.location = baseURL;
    }
    
    handleChange = ({currentTarget: input})=> {
        const errorMessage = validateProperty(input,this.schema);
        const errors = {...this.state.errors};
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data,errors});
    }

    render() { 
        const {data,dataProps,errors} = this.state;
      

        // console.log(process.env.MIX_BASE_URL);
        return ( 
            <div className="my-5">
                <h1>CitieForm</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}> 
                    {dataProps.map(prop => 
                     <Input 
                     key={prop} 
                     error={errors[prop]} 
                     value={data[prop] || '' } 
                     label={prop} 
                     onChange={this.handleChange}/>
                    )}
                   
                    <Button btnColor="btn-success" name="Save"/>
                </form>   
            </div>
           );
    }
}
 
export default CitieForm;