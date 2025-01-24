import { Head, useForm } from '@inertiajs/react'
import React from 'react'

function CreateUser() {
    const {data, errors, post,setData} = useForm({
        name :'',
        username : '',
        password :'',
        email :'',
        

    })
    const handelSubmit = (e) => {
        e.preventDefault()
        post(route('storeuser'))
    }
    return (
       <>
      <Head>
        <title>
            Inscription
        </title>
      </Head>
        <div className='container'>
            <form className='row col-md-6 offset-md-3' onSubmit={handelSubmit}>
            <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"> Name</label>
                    <input type="text" onChange={(e) => {setData('name', e.target.value)}} value={data.name} className="form-control" id="exampleInputPassword1" name='name'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">UserName</label>
                    <input type="text" onChange={(e) => {setData('username', e.target.value)}} value={data.username} className="form-control" id="exampleInputPassword1" name='username' />
                </div>
               

                {/* <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Bio</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name='bio' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
                    <input type="file" className="form-control" id="exampleInputPassword1" name='image'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name='address' />
                </div>
               

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="exampleInputPassword1" name='phone' />
                </div> */}

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input type="email" onChange={(e) => {setData('email', e.target.value)}} value={data.email} className="form-control" id="exampleInputPassword1" name='email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={(e) => {setData('password', e.target.value)}} value={data.password} className="form-control" id="exampleInputPassword1" name='password' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
       </>
    )
}

export default CreateUser