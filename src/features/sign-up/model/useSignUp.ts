import {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {signUpSchema} from "./signUp.schema";
import type {SignUpFormData} from "./signUp.schema";

const initialState: SignUpFormData = {
    email: '',
    password: '',
    confirmPassword: '',
}

export const useSignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isValid, isSubmitting},
    } = useForm<SignUpFormData>({
        mode: 'onBlur',
        defaultValues: initialState,
        resolver: yupResolver(signUpSchema, {abortEarly: false}),
        criteriaMode: 'all',
    });

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const formValues = watch();

    useEffect(() => {
        if (isValid && buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [isValid, formValues]);

    const onSubmit = async (data: SignUpFormData) => {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 2000);
        }).then((resolvedData) => {
            console.log(resolvedData);
        });
    }

    return {
        register,
        errors,
        isValid,
        isSubmitting,
        buttonRef,
        handleSubmit: handleSubmit(onSubmit),
    }
}