import React from "react";
import { useDispatch } from "react-redux";

//action import
import { close } from "../../../../../store/actions/forgottenPasswordActions";

//custom hook import
import useForm from "../../../../../hooks/useForm";

//styled-components imports
import InputField from "../../../../../shared-styled-components/InputField";
import Button from "../../../../../shared-styled-components/Button";
import FormErrorMessage from "../../../../../shared-styled-components/FormErrorMessage";
import StyledCloseIcon from "./StyledCloseIcon";
import Wrapper from "./Wrapper";
import Modal from "./Modal";
import Title from "./Title";
import Text from "./Text";
import Form from "./Form";

const ForgottenPasswordModal = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    submit,
    validate
  );

  const dispatch = useDispatch();

  function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = "E-mailová adresa musí být vyplněna.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "E-mailová adresa musí být ve správném tvaru.";
    }
    return errors;
  }

  function submit() {
    console.log("Úspěšně submitted.");
  }

  return (
    <Wrapper
      id="close"
      onClick={e => {
        //only close when clicking on this element
        if (e.target.id === "close") {
          dispatch(close());
        }
      }}
    >
      <Modal>
        <Title>Zapomenuté heslo?</Title>
        <StyledCloseIcon
          onClick={() => {
            dispatch(close());
          }}
        />
        <Text>
          Pokud jsi zapomněl své heslo, zadej prosím e-mailovou adresu, kterou
          jsi uvedl při registraci. <br />
          Pošleme ti na ni instrukce pro nastavení nového hesla.
        </Text>
        <Form onSubmit={handleSubmit} noValidate>
          <InputField
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Email"
          />
          {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
          <Button>Odeslat</Button>
        </Form>
      </Modal>
    </Wrapper>
  );
};

export default ForgottenPasswordModal;
