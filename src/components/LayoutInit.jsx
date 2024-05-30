import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutInit({ children }) {
  return (
    <div>
      <div>
        <div>
          <Header />

          <section>
            <div>{children}</div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}
