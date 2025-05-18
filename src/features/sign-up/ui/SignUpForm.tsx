import {TextField} from "@shared/index";
import {Button} from "@shared/index";

export const SignUpForm = () => {
    return (
        <form className={'flex flex-col justify-center items-stretch gap-4'}>
            <TextField
                label='Email'
                type='email'
                name='email'
                placeholder='Enter Your Email'
                required
            />
            <TextField
                label='Password'
                type='password'
                name='password'
                placeholder='Enter Your Password'
                required/>
            <TextField
                label='Confirm Password'
                type='password'
                name='confirm-password'
                placeholder='Confirm Your Password'
                required
            />
            <Button>
                Sign Up
            </Button>
        </form>
    )
}


