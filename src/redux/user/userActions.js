// File responsible to call axios functions and dispatch actions for updating states based on response
// Uses the actions given by slice

import { toast } from "react-toastify";
import { setIsAuthenticated, setUser } from "./userSlice";
import { loginUser } from "../../axios/userAxios";

// UI --------[ACTION]--------API-------comes with response-----dispatch actions

// Login Action
export const loginUserAction = (userObject) => async (dispatch) => {
  // call axios
  const result = await loginUser(userObject);

  if (result.status === "error") {
    return toast.error(result.message);
  }

  dispatch(setIsAuthenticated(true));
  dispatch(setUser(result.data));
  toast.success(result.message);
};
