import * as yup from "yup";

export const contactFormSchema = yup.object({
    firstName: yup
        .string()
        .matches(/^[a-zA-ZñÑ\s]+$/, "The first name can only contain letters")
        .required("The first name is required"),
    lastName: yup
        .string()
        .matches(/^[a-zA-ZñÑ\s]+$/, "The last name can only contain letters")
        .required("The last name is required"),
    email: yup.string().email("The email is not valid").required("The email is required"),
    message: yup
        .string()
        .matches(
            /^[a-zA-ZñÑ0-9\(\)\?\¿\¡\!\,.\:\s\áéíóúÁÉÍÓÚ]+$/,
            "The message can only contain letters, numbers and the following characters: ( ) ? ¿ ¡ , . :"
        ),
});