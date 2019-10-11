import React from "react";
import { useSelector, useDispatch } from "react-redux";

//action import
import { openForgottenPassword } from "../../../../store/actions/forgottenPasswordActions";

//custom hook import
import useForm from "../../../../hooks/useForm";

//react components imports
import ForgottenPasswordModal from "./ForgottenPasswordModal";

//styled-componnets imports
import InputField from "../../../../shared-styled-components/InputField";
import FormErrorMessage from "../../../../shared-styled-components/FormErrorMessage";
import Button from "../../../../shared-styled-components/Button";
import StyledFormLink from "../../../../shared-styled-components/StyledFormLink";
import Form from "./Form";
import PasswordText from "./PasswordText";
import SignUpText from "./SignUpText";

const SignInForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    submit,
    validate
  );

  const dispatch = useDispatch();

  const isFpOpen = useSelector(state => state.forgottenPasswordReducer);

  //need to be function declarations, because of hoisting

  function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = "E-mailová adresa musí být vyplněna.";
    }
    if (!values.password) {
      errors.password = "Heslo musí být vyplněno.";
    }
    return errors;
  }

  function submit() {
    console.log("Úspěšně submitted.");
  }

  return (
    <>
      <Form onSubmit={handleSubmit} noValidate>
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
        <InputField
          type="password"
          name="password"
          placeholder="Heslo"
          value={values.password}
          onChange={handleChange}
          marginBottom="8px"
          error={errors.password}
        />
        {errors.password && (
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        )}
        <PasswordText
          onClick={() => {
            dispatch(openForgottenPassword());
          }}
        >
          Zapomněl jsi heslo?
        </PasswordText>
        <Button type="submit">Přihlásit se</Button>
        <SignUpText>
          Ještě nemáš účet?{" "}
          <StyledFormLink to="/sign-up">Zaregistruj se</StyledFormLink>
        </SignUpText>
      </Form>
      {isFpOpen ? <ForgottenPasswordModal /> : null}
    </>
  );
};

export default SignInForm;
