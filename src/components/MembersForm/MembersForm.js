import React, { useState } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useLocation } from "react-router-dom";
import ModalSidebar from "../ModalSidebar/ModalSidebar";
import formStyles from "../ProjectCreationForm/ProjectCreationForm.module.css";
import addMember from "../../redux/operations/addMember";

const EmailTextField = withStyles({
  root: {
    "& .MuiInputBase-root": {
      marginBottom: "50px",
    },
    "& .MuiInputBase-root.Mui-error": {
      marginBottom: "0px",
    },
    "& label.Mui-focused": {
      color: "#181c2799",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#181c2799",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      marginBottom: "50px",
      fontFamily: "Montserrat",
      color: "red",
      fontSize: "12px",
    },
    "& > *": {
      width: "430px",
      fontFamily: "Montserrat",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "22px",
    },
  },
})(TextField);

const MembersForm = ({ addMember, status, onClose }) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  let newLocation = useLocation();

  const handleInput = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const validate = (email) => {
    const errors = {};

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errors.title = "Введіть існуючий email";
    }

    if (email.length === 0) {
      errors.description = "Це поле є обов'язковим";
    }

    setErrors(errors);

    return !!Object.keys(errors).length;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    const projectId = newLocation.pathname.split("/")[2];
    const value = { projectId, email };

    const result = validate(email);

    if (!result) {
      addMember(value);
      setEmail("");
      onClose();
    }
  };

  return (
    <ModalSidebar onSubmit={handleSubmit} status={status} onClose={onClose}>
      <form
        className={formStyles.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h2 className={formStyles.formTitle}>Додати людей</h2>

        <EmailTextField
          id="custom-css-standard-input"
          label="E-mail учасника"
          name="title"
          value={email}
          onChange={handleInput}
          error={errors.title ? true : undefined}
          helperText={errors.title}
          type="email"
        />
      </form>
    </ModalSidebar>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addMember: (value) => dispatch(addMember(value)),
});

export default connect(null, mapDispatchToProps)(MembersForm);
