import * as yup from 'yup'
import {MAX_PASSWORD, MIN_PASSWORD, PASSWORD_REGEX} from "./validationRules";

export const signUpSchema = yup.object({
    email: yup.string().email('Invalid email format.').required('Email is required!'),
    password: yup
        .string()
        .min(MIN_PASSWORD, `Password must be at least ${MIN_PASSWORD} characters.`)
        .max(MAX_PASSWORD, `Password must be no more than ${MAX_PASSWORD} characters.`)
        .matches(PASSWORD_REGEX.lowerCase, 'Password must include at least one LOWERCASE letter')
        .matches(PASSWORD_REGEX.upperCase, 'Password must include at least one UPPERCASE letter.')
        .matches(PASSWORD_REGEX.number, 'Password must include at least one number.')
        .matches(PASSWORD_REGEX.specialChar, 'Password must include at least special character(#?!@$%^&*-)')
        .required('Password is required!'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords do not match")
        .required('Confirm Password is required!'),
})

export type SignUpFormData = yup.InferType<typeof signUpSchema>;