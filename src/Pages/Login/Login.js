import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { BsGoogle } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

    const navigate = useNavigate();
    const loaction = useLocation();

    const from = loaction.state?.from?.pathname || '/';

    const { register, formState: { errors }, handleSubmit } = useForm();

    const { signIn, providerLogin } = useContext(AuthContext);

    const handleLogin = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }



    // login with google handle
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
                // setError(error.message)
            })
    }

    return (
        <div className='h-screen w-screen flex justify-center items-center '>
            <div className='shadow-xl p-10 rounded-md lg:w-3/12 w-full mx-5 mt-5'>
                <h1 className='text-center text-4xl  text-accent mb-5'>Login</h1>
                <form className='grid gap-6' onSubmit={handleSubmit(handleLogin)}>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input type='email'
                            {...register("email", {
                                required: 'Email required'
                            })}
                            className='input input-bordered w-full' />
                        {errors.email && <p className='text-red-600 mt-2' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Password</span>
                        </label>
                        <input type='password' {...register("password", {
                            required: 'Password required',
                            minLength: { value: 6, message: 'Have to be 6 character' }
                        })}
                            className='input input-bordered w-full' />
                        {errors.password && <p className='text-red-600 mt-2' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <Link className="label-text">Forgot Password?</Link>
                        </label>
                    </div>
                    {/* <p>{data}</p> */}
                    <button className='btn btn-primary text-white w-full'>Login</button>
                    <p className='text-center font-semibold'>New to Mamun's Furniture? <Link to='/signup' className='text-primary'> Create new account</Link> </p>
                    <div className="divider">OR</div>

                </form>
                <div className="form-control mt-2">
                    <button onClick={handleGoogleSignIn} className="btn btn-outline"> <span className='mx-2'> <BsGoogle /></span> Login with Google</button>
                </div>
            </div>
        </div>


    );
};

export default Login;