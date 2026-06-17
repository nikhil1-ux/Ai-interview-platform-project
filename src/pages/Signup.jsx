import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const role = watch("role", "");
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      {/* Name */}
      <input
        placeholder="Full Name"
        {...register("name", {
          required: "Name is required",
        })}
      />
      {errors.name && (
        <p style={{ color: "red" }}>
          {errors.name.message}
        </p>
      )}

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
        })}
      />
      {errors.email && (
        <p style={{ color: "red" }}>
          {errors.email.message}
        </p>
      )}

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
      />
      {errors.password && (
        <p style={{ color: "red" }}>
          {errors.password.message}
        </p>
      )}

      {/* Confirm Password */}
      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword", {
          required: "Confirm Password is required",
          validate: (value) =>
            value === password || "Passwords do not match",
        })}
      />
      {errors.confirmPassword && (
        <p style={{ color: "red" }}>
          {errors.confirmPassword.message}
        </p>
      )}

      {/* Role */}
      <select
        {...register("role", {
          required: "Role is required",
        })}
      >
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="recruiter">Recruiter</option>
      </select>

      {errors.role && (
        <p style={{ color: "red" }}>
          {errors.role.message}
        </p>
      )}

      {/* Student Fields */}
      {role === "student" && (
        <>
          <input
            placeholder="College Name"
            {...register("collegeName", {
              required: "College Name is required",
            })}
          />
          {errors.collegeName && (
            <p style={{ color: "red" }}>
              {errors.collegeName.message}
            </p>
          )}

          <input
            placeholder="Branch"
            {...register("branch", {
              required: "Branch is required",
            })}
          />
          {errors.branch && (
            <p style={{ color: "red" }}>
              {errors.branch.message}
            </p>
          )}

          <input
            placeholder="Year"
            {...register("year", {
              required: "Year is required",
            })}
          />
          {errors.year && (
            <p style={{ color: "red" }}>
              {errors.year.message}
            </p>
          )}

          <input
            placeholder="Skills"
            {...register("skills", {
              required: "Skills are required",
            })}
          />
          {errors.skills && (
            <p style={{ color: "red" }}>
              {errors.skills.message}
            </p>
          )}
        </>
      )}

      {/* Recruiter Fields */}
      {role === "recruiter" && (
        <>
          <input
            placeholder="Company Name"
            {...register("companyName", {
              required: "Company Name is required",
            })}
          />
          {errors.companyName && (
            <p style={{ color: "red" }}>
              {errors.companyName.message}
            </p>
          )}

          <input
            placeholder="Designation"
            {...register("designation", {
              required: "Designation is required",
            })}
          />
          {errors.designation && (
            <p style={{ color: "red" }}>
              {errors.designation.message}
            </p>
          )}

          <input
            placeholder="Company Website"
            {...register("companyWebsite")}
          />
        </>
      )}

      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;