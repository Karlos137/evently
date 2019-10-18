import React from "react";
import { useDispatch } from "react-redux";

//action import
import { openInviteUsers } from "../../../../store/actions/inviteUsersActions";

//styled components imports
import Form from "./Form";
import InputField from "../../../../shared-styled-components/InputField";
import FormErrorMessage from "../../../../shared-styled-components/FormErrorMessage";
import Button from "../../../../shared-styled-components/Button";
import Label from "../../../../shared-styled-components/Label";
import UsersWrapper from "./UsersWrapper";
import Text from "./Text";
import AddIcon from "../../../../shared-styled-components/AddIcon";

//custom hook import
import useForm from "../../../../hooks/useForm";

const CreateGroupForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    submit,
    validate
  );

  const dispatch = useDispatch();

  //need to be function declarations, because of hoisting (or move up above useForm())
  function validate(values) {
    let errors = {};

    if (!values.groupName) {
      errors.groupName = "Jméno skupiny musí být vyplněno.";
    }

    return errors;
  }

  function submit() {
    console.log("Úspěšně submitted.");
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Label>NÁZEV</Label>
      <InputField
        type="text"
        name="groupName"
        placeholder="Název skupiny"
        value={values.groupName || ""}
        onChange={handleChange}
        error={errors.groupName}
      />
      {errors.groupName && (
        <FormErrorMessage>{errors.groupName}</FormErrorMessage>
      )}
      <UsersWrapper>
        <Text>Uživatelé</Text>
        <AddIcon
          normalText
          onClick={() => {
            dispatch(openInviteUsers());
          }}
        />
      </UsersWrapper>
      <Button type="submit">Vytvořit skupinu</Button>
    </Form>
  );
};

export default CreateGroupForm;
