import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../components/ui/Input";

export default function Settings() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [avatar, setAvatar] = useState<File | null>(null);

  const submitData = {
    firstName,
    lastName,
    password,
    avatar,
  };

  function handleShowPassword() {
    setShowPassword(pass => !pass);
  }
  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setAvatar(prevAvatar => (file ? file : prevAvatar));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(submitData);
  }

  return (
    <div className="main-page">
      <section className="settings">
        <form onSubmit={onSubmit}>
          <Input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            content="Enter your first name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <Input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            content="Enter your last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            content="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            forPassword={true}
            handleShow={handleShowPassword}
            showPassword={showPassword}
          />
          <Input
            id="file"
            type="file"
            placeholder="Choose your profile picture"
            content="Choose your profile picture"
            value={avatar}
            onChange={handleFileChange}
          />
          <button className="btn">Submit</button>
        </form>
      </section>
    </div>
  );
}
