import React from 'react'
import { useState } from 'react'

const Signup = () => {

    const [role,setRole] = useState("student");

  function handleChange(e){
   setRole(e.target.value)
  };
   

  return (
    <div>
      <select value={role} onChange={handleChange} >
          <option value="">Select Role</option>
        <option value="student"> Student  </option>
        <option value="recruiter"> Recruiter </option>

      </select>

     {role==="student" && (
      <div>
        <label>Company Name</label>
      <input placeholder="Company Name"/>

      <label> Branch</label>
      <input placeholder="Branch"/>

      <label>Year</label>
      <input placeholder="Year" />

     <label>Skills</label>
     <input placeholder="Skills" />

      </div>


     )}
      
      
      {role==="recruiter" && (
        <div>
          <label>Company Name</label>
          <input placeholder= "Company Name"/>
          <label>Designation</label>
          <input placeholder="Designation" />
          <label>Company Website</label>
          <input placeholder="Company Website" />

          </div>

      )}

     

    </div>

  
  
  )
}

export default Signup