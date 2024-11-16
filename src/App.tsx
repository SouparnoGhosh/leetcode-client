// src/App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "@/Homepage";
import ProblemPage from "@/ProblemPage";

const App = () => {
  // useTheme();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/problem" element={<ProblemPage />} />
        {/* Catch-all route to redirect to homepage */}
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
