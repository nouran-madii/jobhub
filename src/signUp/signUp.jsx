import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
// import {AuthContext} from "../context/authContext"
// import { useContext } from "react";

const SignUpForm = () => {
  const navigate = useNavigate();
  // const { login } = useContext(AuthContext); // اخذ دالة login من ال context

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Required";
    if (!formData.lastName.trim()) newErrors.lastName = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    if (!formData.password) newErrors.password = "Required";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Required";

    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password strength
    const passRegex =
      /^(?=.*[A-Za-z])(?=.*[!@#$%^&*.+_])[A-Za-z\d!@#$%^&*.+_]{6,}$/;
    if (formData.password && !passRegex.test(formData.password)) {
      newErrors.password = "Password must be ≥6, include letter and symbol";
    }

    // Password match
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Check for existing email
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = users.some((u) => u.email === formData.email);
    if (emailExists) newErrors.email = "Email already registered";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = users.some((u) => u.email === formData.email);
    if (emailExists) {
      setErrors({ email: "Email already registered" });
      return;
    }

    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    // login(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    navigate("/");
    window.location.reload(); // Reload to reflect login state
  };

  return (
    <div className="min-h-screen bgLogin flex items-center justify-center">
      <div className="absolute z-10 font-museo text-[33px] top-3 lg:top-6 left-1/2 transform -translate-x-1/2 text-white xl:text-[40px] sm:text-[40px]  md:text-[40px]  lg:text-[40px]  tracking-wide font-light ">
        <Link to="/">JOB HUB</Link>
      </div>

      <form
        className="bg-[#f6f4f0] w-11/12 md:w-[550px] px-4 py-6 rounded-md shadow-md mt-12"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-[#4c3f35] text-2xl font-semibold mb-4">
          Create your account
        </h2>

        <div className="flex gap-4 mb-2">
          <div className="w-1/2">
            <label className="block text-sm text-[#4c3f35]">First Name</label>
            <input
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border p-3 rounded-md text-sm"
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName}</p>
            )}
          </div>

          <div className="w-1/2">
            <label className="block text-sm text-[#4c3f35]">Last Name</label>
            <input
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border p-3 rounded-md text-sm"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="mb-2">
          <label className="block text-sm text-[#4c3f35]">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-md text-sm"
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>

        <div className="mb-2 relative">
          <label className="block text-sm text-[#4c3f35]">Password</label>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-md text-sm"
            placeholder="Enter Your Password"
          />
          <div
            className="absolute right-3 top-9 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password}</p>
          )}
        </div>

        <div className="mb-4 relative">
          <label className="block text-sm text-[#4c3f35]">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border p-3 rounded-md text-sm"
            placeholder="Confirm Your Password"
          />
          <div
            className="absolute right-3 top-9 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#6f5e51] text-white py-3 rounded-md text-sm font-medium"
        >
          Sign Up
        </button>

        <div className="flex items-center gap-3 my-3">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-[#4c3f35]">or sign In with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex justify-center gap-4 mb-2">
          <button className="w-10 h-10 bg-white border rounded-md flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9345 28.5V17.0961H21.7623L22.3354 12.6522H17.9346V9.815C17.9346 8.52823 18.2922 7.65128 20.1368 7.65128L22.4903 7.65058V3.6755C22.0834 3.62088 20.6867 3.5 19.061 3.5C15.668 3.5 13.3454 5.57162 13.3454 9.37488V12.6522H9.50781V17.0961H13.3453V28.5L17.9345 28.5Z"
                fill="#3B5998"
              />
            </svg>
          </button>
          <button className="w-10 h-10 bg-white border rounded-md flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3897 10.9088C17.6516 10.9088 18.8102 11.3114 19.7351 11.9809L22.5739 9.45725C20.9234 8.10152 18.7629 7.27246 16.3897 7.27246C12.7935 7.27246 9.67492 9.16331 8.10547 11.9342L11.2621 14.2563C12.0268 12.3047 14.0307 10.9088 16.3897 10.9088Z"
                fill="#F44336"
              />
              <path
                d="M25.6754 17.0921C25.7241 16.7345 25.7565 16.3698 25.7565 15.9998C25.7565 15.3759 25.6834 14.7684 25.5498 14.1816H16.3906V17.818H21.453C21.0435 18.8098 20.3143 19.6491 19.3861 20.2322L22.5545 22.5629C24.234 21.1892 25.3834 19.2655 25.6754 17.0921Z"
                fill="#2196F3"
              />
              <path
                d="M10.9259 16.0001C10.9259 15.3867 11.0483 14.8013 11.2617 14.2567L8.10504 11.9346C7.41706 13.1492 7.02344 14.5312 7.02344 16.0001C7.02344 17.4527 7.40982 18.8193 8.08351 20.0241L11.2441 17.699C11.0417 17.167 10.9259 16.5968 10.9259 16.0001Z"
                fill="#FFC107"
              />
              <path
                d="M16.3878 21.0903C14.0108 21.0903 11.994 19.6732 11.2427 17.6982L8.08203 20.0233C9.64382 22.8165 12.774 24.7267 16.3878 24.7267C18.751 24.7267 20.9059 23.9086 22.5517 22.5625L19.3833 20.2317C18.5273 20.7695 17.5027 21.0903 16.3878 21.0903Z"
                fill="#00B060"
              />
            </svg>
          </button>
        </div>

        <p className="text-center mt-2 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-[#4c3f35] font-medium">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
