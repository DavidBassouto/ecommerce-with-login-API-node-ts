import * as yup from "yup";
import { SchemaOf } from "yup";

import { IProductCreate } from "../interfaces/products/products.interface";

export const productCreateSchema: SchemaOf<IProductCreate> = yup
  .object()
  .shape({
    productName: yup.string().required("<productName> is a required field"),
    price: yup
      .number()
      .required("<price> is a required field")
      .min(0, "Must be positive"),
    description: yup
      .string()
      .max(150, "<description> must have up to 150 characters"),
  });
