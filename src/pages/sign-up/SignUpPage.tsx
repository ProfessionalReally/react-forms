import {SignUpForm} from "@features/sign-up";

export const SignUpPage = () => {
    return (
        <div className={'flex flex-col justify-center items-center margin m-auto h-screen'}>
            <div className={'flex flex-col w-md gap-6 bg-white rounded-lg shadow px-10 py-10'}>
                <h1 className={'text-xl font-bold leading-tight tracking-tight text-gray-900'}>Sign up Account</h1>
                <SignUpForm/>
            </div>
        </div>
    )
}


