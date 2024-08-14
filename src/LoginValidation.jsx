function Validation(values) {
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    if (values.email === "") {
      errors.email = "Please enter your email";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Email format is incorrect";
    }
  
    if (values.password === "") {
      errors.password = "Please enter your password";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number";
    }
  
    return errors;
  }
  
  export default Validation;
  