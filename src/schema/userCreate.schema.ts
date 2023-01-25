import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserCreate } from "../interfaces/users/user.interface";

export const userCreateSchema: SchemaOf<IUserCreate> = yup.object().shape({
  name: yup.string().required("<name> is a required field"),
  email: yup
    .string()
    .email("Invalid Email")
    .required("<email> is a required field"),
  password: yup
    .string()
    .required()
    .min(4, "<password> field should have at least 4 characters")
    .max(50, "<password> field should have up to 50 characters"),
  cellphone: yup
    .string()
    .required("<cellphone> is a required field")
    .min(0, "Must be positive"),
  address: yup
    .string()
    .required("<address> is a required field")
    .max(150, "<address> must have up to 150 characters"),
});
