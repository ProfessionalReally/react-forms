import React from "react";
import type {MultipleFieldErrors, UseFormRegister} from "react-hook-form";


type TextFieldProps = {
    type?: 'text' | 'email' | 'password';
    label?: string;
    placeholder?: string;
    name: string;
    required?: boolean;
    errors?: MultipleFieldErrors;
    register: UseFormRegister<any>;
};

export const TextField: React.FC<TextFieldProps> = ({
                                                        label,
                                                        name,
                                                        type = 'text',
                                                        register,
                                                        required = false,
                                                        errors,
                                                        ...props
                                                    }) => {
    return (
        <div className={'flex flex-col gap-1'}>
            {label && <label htmlFor={name} className={'block text-sm font-medium text-gray-900'}>{label}</label>}
            <input
                id={name}
                type={type}
                required={required}
                {...register(name)}
                {...props}
                className={'block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs ' +
                    'focus:ring-blue-500 focus:outline-blue-500'}
            />
            {errors && Object.entries(errors).map(([type, message]) => (
                (Array.isArray(message) ? message : [message]).map((error, i) => (
                    <p key={`${type}-${i}`} className={'text-sm font-medium text-red-600'}>
                        {error}
                    </p>
                ))
            ))}
        </div>
    )
}


