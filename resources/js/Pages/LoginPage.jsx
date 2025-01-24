import { useForm } from '@inertiajs/react'
import React from 'react'

function LoginPage() {
    const {setData, data,errors,post,processing} = useForm({
        email:'',
        password:''
    })
    const handelSubmit = (e) => {
        e.preventDefault()
        post(route('login'))
    }
    return (
        <div className='container mt-2'>
            <form className='row col-md-6 offset-md-3' onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={(e) => {setData('email', e.target.value)}} value={data.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {errors.email && <div className='text-danger'>{errors.email}</div>}                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={data.password} onChange={(e) => {setData('password', e.target.value)}}  className="form-control" id="exampleInputPassword1" />
                    {errors.password && <div className='text-danger'>{errors.password}</div>}                    

                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage