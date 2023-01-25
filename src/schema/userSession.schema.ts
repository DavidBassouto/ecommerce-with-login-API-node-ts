import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserLogin } from "../interfaces/users/user.interface";

export const userSessionSchema: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup
    .string()
    .email("Invalid Email")
    .required("<email> is a required field"),
  password: yup
    .string()
    .required("<password> is a required field")
    .min(4, "<password> field should have at least 4 characters")
    .max(8, "<password> field should have up to 8 characters"),
});
