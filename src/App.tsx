import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { ErrorBoundary } from "./components/errorboundary/errorBoundary";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CssBaseline />
        <div className="container">
          <AppRoutes />
        </div>

        <GlobalStyles />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
