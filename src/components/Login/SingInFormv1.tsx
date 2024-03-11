// import React, { useState } from "react";
// import Input from "../ui/Input";

// import Register from "./useRegister";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// export default function SignInForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const navigate = useNavigate();

//   const submitData = {
//     email,
//     password,
//     firstName,
//     lastName,
//   };

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     try {
//       const isAuthenticated = await Register(submitData);

//       if (isAuthenticated) {
//         navigate("/");
//       } else {
//         // Handle authentication failure
//         toast.error("Authentication failed. Please check your credentials.", {
//           className: "toast",
//         });
//       }
//     } catch (error) {
//       // Handle other errors (e.g., network issues)
//       console.error(error);
//       toast.error("An error occurred. Please try again later.", {
//         className: "toast",
//       });
//     }
//   }
//   return (
//     <>
//       <form className="login-form" onSubmit={e => handleSubmit(e)}>
//         <Input
//           type="email"
//           id="email"
//           autoComplete="email"
//           // className="login-form-container-input"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           content="Email address"
//           placeholder="Enter your email address"
//         />
//         <Input
//           type="text"
//           id="firstName"
//           placeholder="Enter your first name"
//           // className="login-form-container-input"
//           value={firstName}
//           onChange={e => setFirstName(e.target.value)}
//           content="First name"
//         />
//         <Input
//           type="text"
//           id="lastName"
//           placeholder="Enter your last name"
//           // className="login-form-container-input"
//           value={lastName}
//           onChange={e => setLastName(e.target.value)}
//           content="Last name"
//         />
//         <Input
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           // className="login-form-container-input"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           content="Password"
//           placeholder="Enter your password"
//         />

//         <Input
//           type="password"
//           id="current-password"
//           autoComplete="current-password"
//           // className="login-form-container-input"
//           value={currentPassword}
//           onChange={e => setCurrentPassword(e.target.value)}
//           content="Repeat password"
//           placeholder="Repeat your password"
//         />
//         <div className="login-form-container">
//           <button className="btn btn-login">Sign in</button>
//         </div>
//       </form>
//     </>
//   );
// }
