import { useState, useEffect } from "react";
import CustomInput from "./customInput";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../redux/user/userActions";

const intitalFormData = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [formData, setFormData] = useState(intitalFormData);

  const { email, password } = formData;

  // Handle on change
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Navigating
  const navigate = useNavigate();

  // dispatch
  const dispatch = useDispatch();

  // Form Submit
  const handleOnSumbit = async (e) => {
    e.preventDefault();

    dispatch(loginUserAction(formData));
  };

  // Logic For redirecting after login
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/transactions");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Form onSubmit={handleOnSumbit}>
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

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
