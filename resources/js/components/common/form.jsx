// import React, { Component } from 'react';
// import Input from './input';
// const baseApi = 'http://localhost:81/laravel_react/public/api/cities';

// class Form extends Component {
//     state = {
//         data: {}
//     }
    
//     handleSubmit = async (e)=>{
//         e.preventDefault();
//      //    const {params} = this.props.match;
//      //    const citie = {...this.state.data};
//      //    delete citie.id;
//      //    console.log(params.id,citie)
//      //    const {data} = await editCitie(params.id,citie);
//      //    console.log(data);
//      //    window.location = 'http://localhost:81/laravel_react/public/';
//      //    }
 
//      //    const {history} = this.props;
//      //    console.log(this.props.history);
//      //    window.location = 'http://localhost:81/laravel_react/public';
//     }
//      handleChange = ({currentTarget: input})=> {
//     //   const data = {...this.state.data};
//     //   data[name]  = value;
//     //     // console.log(data[name]);
//     //   this.setState({data});
//     }
//     renderInput = (name,label,type="text") => {
//         let {data} = this.state;
//         //  const {data} = this.state;
//         console.log(data,label);
//         return <Input type={type}
//         name={name}
//         value={data[name]}
//         lable={label} 
//         onChange={this.handleChange}
        
//         />
            
//       }
  
// }
 
// export default Form;