import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form } from "react-bootstrap";
import CustomInput from "./customInput";
import { createUser } from "../axios/userAxios";

const intitalFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const [formData, setFormData] = useState(intitalFormData);

  const { name, email, password, confirmPassword } = formData;

  // Handle on change
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form Submit
  const handleOnSumbit = async (e) => {
    e.preventDefault();

    // Logic For Signup
    // call axios to make api request
    const result = await createUser(formData);

    // error
    if (result.status === "error") {
      return toast.error(result.message);
    }

    // Success
    toast.success(result.message);
  };

  return (
    <Form onSubmit={handleOnSumbit}>
      <CustomInput
        label="Name"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "text",
          name: "name",
          placeholder: "Enter your name",
          value: name,
          required: true,
        }}
      />

      <CustomInput
        label="Email"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "email",
          name: "email",
          placeholder: "Enter your email",
          value: email,
          required: true,
        }}
      />

      <CustomInput
        label="Password"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "password",
          name: "password",
          placeholder: "Enter your password",
          value: password,
          required: true,
        }}
      />

      <CustomInput
        label="Confirm Password"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "password",
          name: "confirmPassword",
          placeholder: "Confirm your password",
          value: confirmPassword,
          required: true,
        }}
      />

      <Button variant="primary" type="submit">
        Sign up
      </Button>
    </Form>
  );
};

export default SignupForm;
