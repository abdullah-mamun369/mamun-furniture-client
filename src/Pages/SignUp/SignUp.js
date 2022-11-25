import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const Signup = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signUpError, setSignUpError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const { createUser, updateUserInfo } = useContext(AuthContext);


    const handleSignUp = data => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                if (result.user) {
                    toast.success('Success')
                }

                const userInfo = {
                    displayName: data.name,
                    photoUrl: data.photoUrl
                }

                updateUserInfo(userInfo)
                    .then(() => {
                        storeUser(data.name, data.email)
                    })
                    .catch(err => {
                        console.error(err);
                    })

            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message)
            });
    }

    const storeUser = (name, email) => {
        const user = {
            name,
            email
        };

        fetch('https://final-server-one.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className='shadow-xl p-10 rounded-md lg:w-3/12 w-full mx-5 mt-5'>
                <h1 className='text-center text-4xl  text-accent mb-5'>Sign Up</h1>
                <form className='grid gap-6' onSubmit={handleSubmit(handleSignUp)}>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Name</span>
                        </label>
                        <input type='text'
                            {...register("name", {
                                required: 'Name required'
                            })}
                            className='input input-bordered w-full' />
                        {errors.name && <p className='text-red-600 mt-2' role="alert">{errors.name?.message}</p>}
                    </div>
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

                    </div>
                    {/* <p>{data}</p> */}
                    <button className='btn btn-primary text-white w-full'>Sign Up</button>
                    <p className='text-center font-semibold'>Already have an account? <Link to='/login' className='text-primary'>Login</Link> </p>
                    <div className="divider">OR</div>

                </form>
                <button className='btn btn-outline btn-secondary text-white w-full'>Continue with google</button>
            </div>
        </div>
    );
};

export default Signup;