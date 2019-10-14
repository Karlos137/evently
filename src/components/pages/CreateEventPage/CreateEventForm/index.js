import React from "react";
import { useDispatch } from "react-redux";

//actions import
import { openInviteUsers } from "../../../../store/actions/inviteUsersActions";
import { openInviteGroups } from "../../../../store/actions/inviteGroupsActions";

//custom hook import
import useForm from "../../../../hooks/useForm";

//styled components imports
import Form from "./Form";
import InputField from "../../../../shared-styled-components/InputField";
import FormErrorMessage from "../../../../shared-styled-components/FormErrorMessage";
import Button from "../../../../shared-styled-components/Button";
import Label from "../../../../shared-styled-components/Label";
import DateContainer from "./DateContainer";
import DateInputField from "./DateInputField";
import TimeInputField from "./TimeInputField";
import TextArea from "./TextArea";
import UploadContainer from "./UploadContainer";
import UploadLabel from "./UploadLabel";
import UploadInputField from "./UploadInputField";
import UsersWrapper from "./UsersWrapper";
import Text from "./Text";
import AddIcon from "../../../../shared-styled-components/AddIcon";
import GroupsWrapper from "./GroupsWrapper";

const CreateEventForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    submit,
    validate
  );

  const dispatch = useDispatch();

  //need to be function declarations, because of hoisting (or move up above useForm())
  function validate(values) {
    let errors = {};

    if (!values.eventName) {
      errors.eventName = "Jméno události musí být vyplněno.";
    }
    if (!values.place) {
      errors.place = "Místo události musí být vyplněno.";
    }

    if (!values.dateFrom) {
      errors.dateFrom = "Datum události musí být vyplněno.";
    }

    if (!values.timeFrom) {
      errors.timeFrom = "Čas události musí být vyplněn.";
    }

    if (!values.dateTo) {
      errors.dateTo = "Datum události musí být vyplněno.";
    }

    if (!values.timeTo) {
      errors.timeTo = "Čas události musí být vyplněn.";
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
        name="eventName"
        placeholder="Název události"
        value={values.eventName || ""}
        onChange={handleChange}
        error={errors.eventName}
      />
      {errors.eventName && (
        <FormErrorMessage>{errors.eventName}</FormErrorMessage>
      )}
      <Label>MÍSTO</Label>
      <InputField
        type="text"
        name="place"
        placeholder="Kde?"
        value={values.place || ""}
        onChange={handleChange}
        error={errors.place}
      />
      {errors.place && <FormErrorMessage>{errors.place}</FormErrorMessage>}
      <DateContainer>
        <Label>OD</Label>
        <DateInputField
          type="date"
          name="dateFrom"
          value={values.dateFrom || ""}
          onChange={handleChange}
          error={errors.dateFrom}
        />
        <TimeInputField
          type="time"
          name="timeFrom"
          value={values.timeFrom || ""}
          onChange={handleChange}
          error={errors.timeFrom}
        />
      </DateContainer>
      {errors.dateFrom && (
        <FormErrorMessage>{errors.dateFrom}</FormErrorMessage>
      )}
      {errors.timeFrom && (
        <FormErrorMessage>{errors.timeFrom}</FormErrorMessage>
      )}
      <DateContainer>
        <Label>DO</Label>
        <DateInputField
          type="date"
          name="dateTo"
          value={values.dateTo || ""}
          onChange={handleChange}
          error={errors.dateTo}
        />
        <TimeInputField
          type="time"
          name="timeTo"
          value={values.timeTo || ""}
          onChange={handleChange}
          error={errors.timeTo}
        />
      </DateContainer>
      {errors.dateTo && <FormErrorMessage>{errors.dateTo}</FormErrorMessage>}
      {errors.timeTo && <FormErrorMessage>{errors.timeTo}</FormErrorMessage>}
      <Label>POPIS</Label>
      <TextArea
        name="description"
        value={values.description || ""}
        placeholder="Informace o události"
        onChange={handleChange}
        error={errors.description}
      ></TextArea>
      <UploadContainer>
        <UploadLabel htmlFor="fileUpload">Nahrát obrázek</UploadLabel>
        <UploadInputField id="fileUpload" type="file" />
      </UploadContainer>
      <UsersWrapper>
        <Text>Uživatelé</Text>
        <AddIcon
          normalText
          onClick={() => {
            dispatch(openInviteUsers());
          }}
        />
      </UsersWrapper>
      <GroupsWrapper>
        <Text>Skupiny</Text>
        <AddIcon
          normalText
          onClick={() => {
            dispatch(openInviteGroups());
          }}
        />
      </GroupsWrapper>
      <Button type="submit">Vytvořit událost</Button>
    </Form>
  );
};

export default CreateEventForm;
