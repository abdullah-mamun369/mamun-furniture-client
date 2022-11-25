import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const { signIn } = useContext(AuthContext);

    const handleLogin = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
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
                    <p className='text-center font-semibold'>New to Doctors Portal? <Link to='/signup' className='text-primary'> Create new account</Link> </p>
                    <div className="divider">OR</div>

                </form>
                <button className='btn btn-outline btn-secondary text-white w-full'>Continue with google</button>
            </div>
        </div>


    );
};

export default Login;