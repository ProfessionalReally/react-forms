import {TextField} from "@shared/index";
import {Button} from "@shared/index";
import {useSignUp} from "@features/sign-up/model/useSignUp.ts";
import {PulseLoader} from "react-spinners";

export const SignUpForm = () => {
    const {
        getForm,
        getErrors,
        getLoading,
        getButtonRef,
        hasErrors,
        onChange,
        onBlur,
        onSubmit
    } = useSignUp();

    const {email, password, confirmPassword} = getForm();
    const loading = getLoading();
    const errors = getErrors();
    const buttonRef = getButtonRef();

    const isDisabled = hasErrors();

    if (loading) {
        return (
            <div className={'flex justify-center'}>
                <PulseLoader color='#3b82f6'/>
            </div>
        );
    }

    return (
        <form className={'flex flex-col justify-center items-stretch gap-4'} onSubmit={onSubmit}>
            <TextField
                label='Email'
                type='email'
                name='email'
                value={email}
                onChange={({target}) => onChange('email', target.value)}
                onBlur={() => onBlur('email')}
                placeholder='Enter Your Email'
                required
                errors={errors?.email}
            />
            <TextField
                label='Password'
                type='password'
                name='password'
                value={password}
                onChange={({target}) => onChange('password', target.value)}
                onBlur={() => onBlur('password')}
                placeholder='Enter Your Password'
                required
                errors={errors?.password}
            />
            <TextField
                label='Confirm Password'
                type='password'
                name='confirm-password'
                value={confirmPassword}
                onChange={({target}) => onChange('confirmPassword', target.value)}
                onBlur={() => onBlur('confirmPassword')}
                placeholder='Confirm Your Password'
                required
                errors={errors?.confirmPassword}
            />
            <Button disabled={isDisabled} ref={buttonRef}>
                Sign Up
            </Button>
        </form>
    )

}


