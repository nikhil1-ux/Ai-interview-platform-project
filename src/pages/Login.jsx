import React from 'react'

import { useForm } from "react-hook-form";


const Login = () => {

  const {
  register,
  handleSubmit,
  formState: { errors }
} = useForm()

const onSubmit = (data)=>{

  console.log(data)
}


  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    
    <select {...register("role",{    required: "Role is required"})}>
           <option value="">Select Role</option>
      <option value="student">Student</option>
       <option value="recruiter">Recruiter</option>

     
    </select>

      {errors.role && (
     <p style={{ color: "red" }}>
      {errors.role.message}
</p>
    )}

  
   <input
   {...register("email")}
   placeholder='Email'
   />
   <input
        {...register("password")}
        placeholder="Password"
      />

      <button type="submit">Login</button>
   


   </form>
  )
}

export default Login