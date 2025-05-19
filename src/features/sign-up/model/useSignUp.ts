import React, {useRef, useState} from "react";
import type {SignUpFormData, SignUpFormErrors, ValidationEvents} from "./useSignUp.types";
import {Events, Fields} from "./consts";
import {EMAIL_REGEX, MAX_PASSWORD, MIN_PASSWORD, PASSWORD_REGEX} from "./validationRules";

const initialState: SignUpFormData = {
    email: '',
    password: '',
    confirmPassword: '',
}

export const useSignUp = () => {
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState<SignUpFormErrors>({});
    const [loading, setLoading] = useState(false);

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const validateField = (fieldName: keyof SignUpFormData, value: string, valEvent: ValidationEvents): string[] => {
        const fieldErrors: string[] = [];

        if (valEvent === Events.OnBlur && !value.trim()) {
            fieldErrors.push('This field is required!');
        }

        switch (fieldName) {
            case Fields.Email:
                if (valEvent === Events.OnBlur && value && !EMAIL_REGEX.test(value)) {
                    fieldErrors.push('Invalid email format.');
                }
                break;
            case Fields.Password:
                if (value.length < MIN_PASSWORD) {
                    fieldErrors.push(`Password must be at least ${MIN_PASSWORD} characters.`);
                }
                if (value.length > MAX_PASSWORD) {
                    fieldErrors.push(`Password must be no more than ${MAX_PASSWORD} characters.`);
                }
                if (valEvent === Events.OnBlur && value && !PASSWORD_REGEX.lowerCase.test(value)) {
                    fieldErrors.push('Password must include at least one LOWERCASE letter.')
                }
                if (valEvent === Events.OnBlur && value && !PASSWORD_REGEX.upperCase.test(value)) {
                    fieldErrors.push('Password must include at least one UPPERCASE letter.')
                }
                if (valEvent === Events.OnBlur && value && !PASSWORD_REGEX.number.test(value)) {
                    fieldErrors.push('Password must include at least one number.')
                }
                if (valEvent === Events.OnBlur && value && !PASSWORD_REGEX.specialChar.test(value)) {
                    fieldErrors.push('Password must include at least special character(#?!@$%^&*-).')
                }
                break;
            case Fields.ConfirmPassword:
                if (valEvent === Events.OnBlur && value !== form.password) {
                    fieldErrors.push('Passwords do not match');
                }
                break;
        }

        return fieldErrors;
    }

    const hasErrors = (): boolean => {
        return Object.values(errors).some((value) => {
            return Array.isArray(value) && value.length > 0
        });
    };

    return {
        getForm: () => form,
        getErrors: () => errors,
        getLoading: () => loading,
        getButtonRef: () => buttonRef,
        hasErrors: hasErrors,
        onChange: (fieldName: keyof SignUpFormData, newValue: string) => {
            setForm({...form, [fieldName]: newValue});
            const fieldErrors = validateField(fieldName, newValue, Events.OnChange);
            setErrors(prevErrors => ({
                ...prevErrors,
                [fieldName]: fieldErrors.length ? fieldErrors : null
            }));
        },
        onBlur: (fieldName: keyof SignUpFormData) => {
            const fieldValue: string = form[fieldName];
            setForm({...form, [fieldName]: fieldValue});
            const fieldErrors = validateField(fieldName, fieldValue, Events.OnBlur);
            setErrors(prevErrors => ({
                ...prevErrors,
                [fieldName]: fieldErrors.length ? fieldErrors : null
            }));
            if (!hasErrors()) {
                buttonRef.current?.focus();
            }
        },
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setLoading(true);
            setTimeout(() => {
                console.log(form)
                setLoading(false);
            }, 2000);
        },
    }
}