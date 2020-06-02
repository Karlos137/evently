import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { auth } from "../../../../firebase";

import axios from "axios";

//actions imports
import { openInviteUsers } from "../../../../store/actions/inviteUsersActions";
import { removeGroupUsers } from "../../../../store/actions/groupInvitedUsersActions";

//styled components imports
import Form from "./Form";
import InputField from "../../../../shared-styled-components/InputField";
import FormErrorMessage from "../../../../shared-styled-components/FormErrorMessage";
import Button from "../../../../shared-styled-components/Button";
import Label from "../../../../shared-styled-components/Label";
import UsersWrapper from "./UsersWrapper";
import Text from "./Text";
import AddIcon from "../../../../shared-styled-components/AddIcon";
import InvitedUser from "./InvitedUser";
import StyledLink from "../../../../shared-styled-components/StyledLink";
import FormSuccessMessage from "../../../../shared-styled-components/FormSuccessMessage";

//custom hook import
import useForm from "../../../../hooks/useForm";

const CreateGroupForm = () => {
  const { values, setValues, errors, handleChange, handleSubmit } = useForm(
    submit,
    validate
  );
  const invitedUsers = useSelector((state) => state.groupInvitedUsersReducer);
  const [successMsg, setSuccessMsg] = useState("");

  const location = useLocation();
  const dispatch = useDispatch();

  //need to be function declarations, because of hoisting (or move up above useForm())
  function validate(values) {
    let errors = {};

    if (!values.groupName) {
      errors.groupName = "Jméno skupiny musí být vyplněno.";
    }

    return errors;
  }

  async function submit() {
    try {
      setSuccessMsg("");
      if (location.state) {
        await axios.patch("/api/group", {
          id: location.state.id,
          name: values.groupName,
        });
        await invitedUsers.forEach((user) => {
          axios.patch("/api/user/invite/group/add", {
            userId: user.id,
            group: { id: location.state.id, name: values.groupName },
          });
        });
        location.state.name = values.groupName;
        setSuccessMsg("Skupina úspěšně upravena");
      } else {
        const response = await axios.post("/api/group", {
          name: values.groupName,
          users: [auth.currentUser.uid],
          createdBy: auth.currentUser.uid,
        });
        await invitedUsers.forEach((user) => {
          axios.patch("/api/user/invite/group/add", {
            userId: user.id,
            group: { id: response.data, name: values.groupName },
          });
        });

        setSuccessMsg("Skupina úspěšně vytvořena");
      }

      setTimeout(() => {
        setSuccessMsg("");
      }, 2000);
      setValues({ ...values, groupName: "" });
      dispatch(removeGroupUsers());
      console.log("Submitted.");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Label>NÁZEV</Label>
      <InputField
        type="text"
        name="groupName"
        placeholder="Název skupiny"
        value={values.groupName || (location.state ? location.state.name : "")}
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
        {invitedUsers.map((user) => {
          return (
            <StyledLink key={user.id} to={`/profile/${user.id}`}>
              <InvitedUser>{user.name}</InvitedUser>
            </StyledLink>
          );
        })}
      </UsersWrapper>
      {successMsg === "" ? null : (
        <FormSuccessMessage>{successMsg}</FormSuccessMessage>
      )}
      <Button type="submit">
        {location.state ? "Upravit skupinu" : "Vytvořit skupinu"}
      </Button>
    </Form>
  );
};

export default CreateGroupForm;
