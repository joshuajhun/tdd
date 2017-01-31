const validateString = (string) => {
  if( typeof string !== 'string'){
    throw new Error('error')
  };

  if (!string){
    throw new Error('error')
  }
}

export default validateString
