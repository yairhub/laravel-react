import Joi from 'joi-browser';
export function mapToModel(dataState){
  const data = {...dataState};
  const obj = {
        name: data.name,
        description: data.description,
        genre: data.genre,
        rating: data.rating
    }  
    return obj;
}
export function mapToUserModel(dataState){
  const data = {...dataState};
  const obj = {
        name: data.name,
        email: data.email,
        password: data.password
    }  
    return obj;
}

export function validate(data,schema){
  const options = {abortEarly: false};  
  const {error} = Joi.validate(data,schema,options);
  if(!error) return null;
  const errors = {};
  for(let item of error.details){
      errors[item.path[0]] = item.message;
  }
  return errors;
}

export function validateProperty({name,value},sch){
  const obj = {[name]: value}
  const schema = {[name]:sch[name]};
  
  const {error} = Joi.validate(obj,schema);
  return error ? error.details[0].message : null;      
}

