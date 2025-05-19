export type SignUpFormData = {
    email: string;
    password: string;
    confirmPassword: string;
}

export type SignUpFormErrors = {
    [key in keyof SignUpFormData]?: string[];
}

export type ValidationEvents = 'onChange' | 'onBlur';
