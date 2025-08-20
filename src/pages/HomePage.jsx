import React from "react";
import CallToAction from "../sections/CallToAction.jsx";
import Specials from "../sections/Specials.jsx";
import CustomersSay from "../sections/CustomersSay.jsx";
import Chicago from "../sections/Chicago.jsx";

export default function HomePage() {
  return (
    <div className="stack">
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </div>
  );
}
