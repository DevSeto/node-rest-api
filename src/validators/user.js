export const emailConstraints = {
  presence: true,
  email: true,

};
export const phoneConstraints = {
  presence: true,

  format: {
    pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    message: function(value, attribute, validatorOptions, attributes, globalOptions) {

     return 'Only even values are allowed!';
    }
  }
}

export const hashPasswordConstraints = {
  presence: true,
  length: {
    is: 6,
    message: "length must be 6"
  }
}
