import UserData from "../components/UserSettings/UserData";

export default function Settings() {
  return (
    <div className="main-page-container">
      <div className="main-page">
        <div className="grid-settings">
          <UserData />
        </div>
      </div>
    </div>
  );
}
