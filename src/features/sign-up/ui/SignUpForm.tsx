import {TextField} from "@shared/index";
import {Button} from "@shared/index";
import {useSignUp} from "@features/sign-up/model/useSignUp.ts";
import {PulseLoader} from "react-spinners";

export const SignUpForm = () => {
    const {
        register,
        errors,
        isValid,
        isSubmitting,
        buttonRef,
        handleSubmit,
    } = useSignUp();

    if (isSubmitting) {
        return (
            <div className={'flex justify-center'}>
                <PulseLoader color='#3b82f6'/>
            </div>
        );
    }

    return (
        <form className={'flex flex-col justify-center items-stretch gap-4'} onSubmit={handleSubmit}>
            <TextField
                label='Email'
                type='email'
                name='email'
                placeholder='Enter Your Email'
                register={register}
                errors={errors.email?.types}
                required
            />
            <TextField
                label='Password'
                type='password'
                name='password'
                placeholder='Enter Your Password'
                register={register}
                errors={errors.password?.types}
                required
            />
            <TextField
                label='Confirm Password'
                type='password'
                name='confirmPassword'
                placeholder='Confirm Your Password'
                register={register}
                errors={errors.confirmPassword?.types}
                required
            />
            <Button disabled={!isValid} ref={buttonRef}>
                Sign Up
            </Button>
        </form>
    )

}


