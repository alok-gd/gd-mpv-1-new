import * as React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>
      <p>Join our community</p>
      <hr />
    </div>
  );
}
