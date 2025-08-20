import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "./loginValidation";

function LoginFormHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: zodResolver(loginSchema)});

  const onSubmit = (data) => {
    console.log("Login data submitted:", data);
  }
  return (
    <div style={{textAlign:"center", border:"1px solid black",padding:"50px", margin:"30px"}}>
      <h2>Login Form using React Hook Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
          />

          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
          />

          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginFormHook;
