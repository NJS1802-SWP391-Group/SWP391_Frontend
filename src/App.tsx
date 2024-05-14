import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { ErrorBoundary } from "./components/errorboundary/errorBoundary";
import LoginPage from "./pages/loginPage";
import ValuationRequestForm from "./pages/ValuationRequestForm";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/valuation-form" element={<ValuationRequestForm />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
