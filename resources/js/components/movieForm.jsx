import React,{Component} from 'react';
import Joi from 'joi-browser';
import Button from './common/button';
import Input from './common/input';
import {mapToModel,validate,validateProperty} from './utils';
import {getMovie,editMovie,addMovie} from './services/movieService';



const baseURL = process.env.MIX_BASE_URL;

class MovieForm extends Component {
    state = {
        
        data: { name:'',description:'',genre:'',rating:''},
        dataProps: [],
        errors: {}
       
    }
    schema = {
        name: Joi.string().required(),
        description: Joi.string().required(),
        genre: Joi.string().required(),
        rating: Joi.number().required().max(10)
    };

    constructor (){
        super();
        this.state.dataProps = Object.keys({...this.state.data});
    }
     
    async componentDidMount(){
        const {params} = this.props.match;
        const data = await getMovie(params.id);
        this.setState({data});
    }
   

    handleSubmit = async (e)=>{
        e.preventDefault();
        const {data} = this.state;
        const errors = validate(data,this.schema);
        this.setState({errors :errors || {}});

        const {params} = this.props.match;
        const obj = mapToModel(data);
        
        if(params.id === 'new') {
           await addMovie(obj);
           return window.location = baseURL;
        } 
        await editMovie(params.id,obj);
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
                <h1>Movie Form</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}> 
                    {dataProps.map(prop => 
                     <Input 
                     key={prop} 
                     error={errors[prop]} 
                     value={data[prop]} 
                     label={prop} 
                     onChange={this.handleChange}/>
                    )}
                   
                    <Button btnColor="btn-success" name="Save"/>
                </form>   
            </div>
           );
    }
}
 
export default MovieForm;