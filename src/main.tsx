import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer.tsx";
import Homepage from "./Homepage.tsx";
import ProfilePage from "./ProfilePage.tsx";
import {
  menswearSections,
  womenswearSections,
} from "./components/utils/constants.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              menswearSections={menswearSections}
              womenswearSections={womenswearSections}
            />
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Catch-all route to redirect to homepage */}
        <Route
          path="*"
          element={
            <Homepage
              menswearSections={menswearSections}
              womenswearSections={womenswearSections}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
