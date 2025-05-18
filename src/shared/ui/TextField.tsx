import React from "react";

type TextFieldProps = {
    value?: string;
    type?: 'text' | 'email' | 'password';
    label?: string;
    placeholder?: string;
    name?: string;
    required?: boolean;
    error?: string;
};

export const TextField: React.FC<TextFieldProps> = ({
                                                        label,
                                                        name,
                                                        type = 'text',
                                                        required = false,
                                                        error,
                                                        ...props
                                                    }) => {
    return (
        <div className={'flex flex-col gap-1'}>
            {label && <label htmlFor={name} className={'block text-sm font-medium text-gray-900'}>{label}</label>}
            <input
                id={name}
                name={name}
                type={type}
                required={required}
                {...props}
                className={'block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs ' +
                    'focus:ring-blue-500 focus:outline-blue-500'}
            />
            {error && <p className={'text-sm font-medium text-red-600'}>{error}</p>}
        </div>
    )
}


