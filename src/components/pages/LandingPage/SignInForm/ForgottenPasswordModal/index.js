import React, { useState } from "react";
import { useDispatch } from "react-redux";

//action import
import { closeForgottenPassword } from "../../../../../store/actions/forgottenPasswordActions";

//custom hook import
import useForm from "../../../../../hooks/useForm";

//styled-components imports
import InputField from "../../../../../shared-styled-components/InputField";
import Button from "../../../../../shared-styled-components/Button";
import FormErrorMessage from "../../../../../shared-styled-components/FormErrorMessage";
import ModalCloseIcon from "../../../../../shared-styled-components/ModalCloseIcon";
import ModalWrapper from "../../../../../shared-styled-components/ModalWrapper";
import Modal from "../../../../../shared-styled-components/Modal";
import ModalTitle from "../../../../../shared-styled-components/ModalTitle";
import Text from "./Text";
import Form from "./Form";
import FormSuccessMessage from "../../../../../shared-styled-components/FormSuccessMessage";

const ForgottenPasswordModal = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    submit,
    validate
  );

  const [successMsg, setSuccessMsg] = useState("");

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
    setSuccessMsg(
      "V případě zadání registrované e-mailové adresy byl zaslán obnovovací e-mail."
    );
    setTimeout(() => {
      dispatch(closeForgottenPassword());
    }, 4000);
  }

  return (
    <ModalWrapper
      id="close"
      onClick={(e) => {
        //only close when clicking on this element
        if (e.target.id === "close") {
          dispatch(closeForgottenPassword());
        }
      }}
    >
      <Modal>
        <ModalTitle>Zapomenuté heslo?</ModalTitle>
        <ModalCloseIcon
          onClick={() => {
            dispatch(closeForgottenPassword());
          }}
        />
        <Text>
          Pokud jsi zapomněl své heslo, zadej prosím e-mailovou adresu, kterou
          jsi uvedl při registraci. <br />
          Pošleme ti na ni instrukce pro nastavení nového hesla.
          <br />
          <em style={{ fontSize: "11px" }}>
            Slouží pouze pro ukázku funkcionality modálního okna se vstupním
            polem.
          </em>
          <br />
        </Text>
        <Form onSubmit={handleSubmit} noValidate>
          <InputField
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            error={errors.email}
            placeholder="Email"
          />
          {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
          {successMsg === "" ? null : (
            <FormSuccessMessage>{successMsg}</FormSuccessMessage>
          )}
          <Button>Odeslat</Button>
        </Form>
      </Modal>
    </ModalWrapper>
  );
};

export default ForgottenPasswordModal;
