import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      callback();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  //handle change - set values
  const handleChange = e => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  //handle submit - prevent default on event (refreshing page) & handle errors
  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
  };

  return { values, setValues, errors, handleChange, handleSubmit };
};

export default useForm;
