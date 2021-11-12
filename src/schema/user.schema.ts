import { object, string, TypeOf } from "zod";
import { isValidDateFormat } from '../utils/date';

export const createUserSchema = object({
  body: object({
    username: string({
      required_error: "Username is required",
    }),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password too short - should be 6 chars minimum"),
    passwordConfirmation: string({
      required_error: "passwordConfirmation is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
    birthDate: string({
      required_error: "birthDate is required",
    }).refine(data => isValidDateFormat(data), {
      message: "Birth Date is invalid format YYYY-MM-DD"
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  })
});

export const getAllUsersSchema = object({
  query: object({
    username: string().optional(),
    email: string().optional(),
  })
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;

export type FindUserInput = TypeOf<typeof getAllUsersSchema>;
