import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import axios from "axios";

import { auth, storage } from "../../../../firebase";

//actions import
import { openInviteUsers } from "../../../../store/actions/inviteUsersActions";
import { openInviteGroups } from "../../../../store/actions/inviteGroupsActions";
import { removeEventUsers } from "../../../../store/actions/eventInvitedUsersActions";

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
import StyledLink from "../../../../shared-styled-components/StyledLink";
import InvitedUser from "./InvitedUser";
import FormSuccessMessage from "../../../../shared-styled-components/FormSuccessMessage";

const CreateEventForm = () => {
  const { values, setValues, errors, handleChange, handleSubmit } = useForm(
    submit,
    validate
  );

  const [image, setImage] = useState(null);

  const invitedUsers = useSelector(state => state.eventInvitedUsersReducer);
  const [successMsg, setSuccessMsg] = useState("");

  const location = useLocation();
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

    if (!values.date) {
      errors.date = "Datum události musí být vyplněno.";
    }

    if (!values.time) {
      errors.time = "Čas události musí být vyplněn.";
    }

    // if (!values.dateTo) {
    //   errors.dateTo = "Datum události musí být vyplněno.";
    // }

    // if (!values.timeTo) {
    //   errors.timeTo = "Čas události musí být vyplněn.";
    // }

    return errors;
  }

  async function submit() {
    try {
      setSuccessMsg("");
      if (image !== null) {
        await storage
          .ref()
          .child(`images/${image.name}`)
          .put(image);
      }

      if (location.state) {
        await axios.patch("/api/edit/event", {
          id: location.state.id,
          name: values.eventName,
          location: values.place,
          date: `${values.date}T${values.time}`,
          description: values.description
        });

        await invitedUsers.forEach(user => {
          axios.patch("/api/user/invite/event/add", {
            userId: user.id,
            event: { id: location.state.id, name: values.eventName }
          });
        });

        location.state = {
          name: values.eventName,
          description: values.description,
          date: values.date,
          time: values.time,
          place: values.place
        };

        setSuccessMsg("Událost úspěšně upravena");
      } else {
        const response = await axios.post("/api/event", {
          name: values.eventName,
          location: values.place,
          date: `${values.date}T${values.time}`,
          description: values.description,
          image: image
            ? `https://firebasestorage.googleapis.com/v0/b/evently-cfb26.appspot.com/o/images%2F${image.name}?alt=media`
            : "https://images.unsplash.com/photo-1572649296821-441d570ae49e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          createdBy: auth.currentUser.uid,
          users: [auth.currentUser.uid]
        });

        await invitedUsers.forEach(user => {
          axios.patch("/api/user/invite/event/add", {
            userId: user.id,
            event: { id: response.data, name: values.eventName }
          });
        });

        const user = await axios.get(`/api/user/${auth.currentUser.uid}`);

        await axios.post("/api/activity", {
          type: "create",
          text: "vytvořil/a událost!",
          eventName: values.eventName,
          eventId: response.data,
          user: user.data.name,
          for: null
        });

        await axios.patch("/api/user/create/event/add", {
          userId: auth.currentUser.uid,
          eventId: response.data
        });

        if (Array.isArray(invitedUsers) && invitedUsers.length) {
          const invitedUsersIds = invitedUsers.map(user => user.id);
          await axios.post("/api/activity", {
            type: "invite",
            text: "tě pozval na událost!",
            eventName: values.eventName,
            eventId: response.data,
            user: user.data.name,
            for: invitedUsersIds
          });
        }
        setSuccessMsg("Událost úspěšně vytvořena");
      }

      setTimeout(() => {
        setSuccessMsg("");
      }, 2000);
      setValues({
        ...values,
        eventName: "",
        place: "",
        date: "",
        time: "",
        description: ""
      });
      setImage(null);
      dispatch(removeEventUsers());
      console.log("Submitted.");
    } catch (error) {
      console.log(error);
    }
  }

  const handleImageChange = e => {
    setImage(e.target.files[0]);
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Label>NÁZEV</Label>
      <InputField
        type="text"
        name="eventName"
        placeholder="Název události"
        value={values.eventName || (location.state ? location.state.name : "")}
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
        value={values.place || (location.state ? location.state.place : "")}
        onChange={handleChange}
        error={errors.place}
      />
      {errors.place && <FormErrorMessage>{errors.place}</FormErrorMessage>}
      <DateContainer>
        <Label>DATUM</Label>
        <DateInputField
          type="date"
          name="date"
          value={values.date || (location.state ? location.state.date : "")}
          onChange={handleChange}
          error={errors.date}
        />
        <TimeInputField
          type="time"
          name="time"
          value={values.time || (location.state ? location.state.time : "")}
          onChange={handleChange}
          error={errors.time}
        />
        {console.log(values.date, values.time)}
      </DateContainer>
      {errors.date && <FormErrorMessage>{errors.date}</FormErrorMessage>}
      {errors.time && <FormErrorMessage>{errors.time}</FormErrorMessage>}
      {/* <DateContainer>
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
      </DateContainer> */}
      {errors.dateTo && <FormErrorMessage>{errors.dateTo}</FormErrorMessage>}
      {errors.timeTo && <FormErrorMessage>{errors.timeTo}</FormErrorMessage>}
      <Label>POPIS</Label>
      <TextArea
        name="description"
        value={
          values.description ||
          (location.state ? location.state.description : "")
        }
        placeholder="Informace o události"
        onChange={handleChange}
        error={errors.description}
      ></TextArea>
      <UploadContainer>
        {location.state ? (
          <UploadLabel htmlFor="fileUpload" disabled>
            Nahrát obrázek
          </UploadLabel>
        ) : (
          <UploadLabel htmlFor="fileUpload">Nahrát obrázek</UploadLabel>
        )}

        <UploadInputField
          id="fileUpload"
          type="file"
          name="image"
          onChange={handleImageChange}
        />
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
        {invitedUsers.map(user => {
          return (
            <StyledLink key={user.id} to={`/profile/${user.id}`}>
              <InvitedUser>{user.name}</InvitedUser>
            </StyledLink>
          );
        })}
      </GroupsWrapper>
      {successMsg === "" ? null : (
        <FormSuccessMessage>{successMsg}</FormSuccessMessage>
      )}
      <Button type="submit">
        {location.state ? "Upravit událost" : "Vytvořit událost"}
      </Button>
    </Form>
  );
};

export default CreateEventForm;
