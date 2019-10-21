import React from "react";

//custom hook import
import useForm from "../../../../hooks/useForm";

//styled components imports
import InputField from "../../../../shared-styled-components/InputField";
import FormErrorMessage from "../../../../shared-styled-components/FormErrorMessage";
import Button from "../../../../shared-styled-components/Button";
import StyledFormLink from "../../../../shared-styled-components/StyledFormLink";
import Form from "./Form";
import SignInText from "./SignInText";

const SignUpForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    submit,
    validate
  );

  //need to be function declarations, because of hoisting (or move up above useForm())
  function validate(values) {
    let errors = {};

    if (!values.name) {
      errors.name = "Jméno musí být vyplněno.";
    }

    if (!values.email) {
      errors.email = "E-mailová adresa musí být vyplněna.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "E-mailová adresa musí být ve správném tvaru.";
    }

    if (!values.password) {
      errors.password = "Heslo musí být vyplněno.";
    } else if (values.password.length < 8) {
      errors.password = "Heslo musí mít minimálně 8 znaků.";
    }

    if (!values.passwordConfirmation && values.password) {
      errors.passwordConfirmation = "Heslo pro potvrzení musí být vyplněno.";
    }

    if (values.password !== values.passwordConfirmation) {
      errors.passwordConfirmation = "Heslo pro potvrzení nesouhlasí.";
    }
    return errors;
  }

  function submit() {
    console.log("Uživatel byl úspěšně zaregistrován.");
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <InputField
        type="text"
        name="name"
        placeholder="Jméno"
        value={values.name || ""}
        onChange={handleChange}
        error={errors.name}
      />
      {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
      <InputField
        type="email"
        name="email"
        placeholder="Email"
        value={values.email || ""}
        onChange={handleChange}
        error={errors.email}
      />
      {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
      <InputField
        type="password"
        name="password"
        placeholder="Heslo"
        value={values.password || ""}
        onChange={handleChange}
        error={errors.password}
      />
      {errors.password && (
        <FormErrorMessage>{errors.password}</FormErrorMessage>
      )}
      <InputField
        type="password"
        name="passwordConfirmation"
        placeholder="Potvrzení hesla"
        value={values.passwordConfirmation || ""}
        onChange={handleChange}
        error={errors.passwordConfirmation}
      />
      {errors.passwordConfirmation && (
        <FormErrorMessage>{errors.passwordConfirmation}</FormErrorMessage>
      )}
      <Button type="submit">Zaregistrovat se</Button>
      <SignInText>
        Již máš účet? <StyledFormLink to="/">Přihlaš se</StyledFormLink>
      </SignInText>
    </Form>
  );
};

export default SignUpForm;
