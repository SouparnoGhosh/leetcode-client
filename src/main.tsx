import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header.tsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer.tsx";
import Homepage from "./Homepage.tsx";
import { menswearSections, womenswearSections } from "./lib/constants";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Homepage menswearSections={menswearSections} womenswearSections={womenswearSections} />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);