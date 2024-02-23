import React from "react";
import "./index.css";
import { FaBolt } from "react-icons/fa6";
export default function AppOffline() {
  return (
    <div className="offline">
      <div className="offline-container">
        <FaBolt className="offline-container-bolt" />
        <h2>You are currently offline</h2>
        <p>
          We can't show you this app because you aren't connected to internet.
          When you're back online refresh the page or hit the button below
        </p>
        <button className="btn" onClick={() => location.reload()}>
          Refresh
        </button>
      </div>
    </div>
  );
}
