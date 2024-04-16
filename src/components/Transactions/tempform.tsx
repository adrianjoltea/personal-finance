// import React from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";

// const options = ["Option 1", "Option 2", "Option 3"];

// const FORM_OPTIONS = [
//   "Utilities",
//   "Groceries",
//   "Entertainment",
//   "Travel",
//   "Miscellaneous",
// ];

// const FIELD_NAME = {
//   AMOUNT: "amount",
//   DESCRIPTION: "description",
//   CATEGORY: "category",
// };

// const FIELD_LABEL = {
//   AMOUNT: "Enter your amount",
//   DESCRIPTION: "Enter your description",
//   CATEGORY: "Enter your category",
// };

// const SCHEMA = z.object({
//   [FIELD_NAME.AMOUNT]: z.string().min(1, { message: "Required" }),
//   [FIELD_NAME.DESCRIPTION]: z.string().min(1, { message: "Required" }),
// });

// interface IFormInput {
//   amount: number | string;
//   description: string;
//   bankAccountId: string;
//   category: string;
// }

// export default function MyForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       [FIELD_NAME.CATEGORY]: "",
//     },
//   });

//   const onSubmit = data => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Select an option:</label>
//         <select {...register("category")}>
//           {FORM_OPTIONS.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
