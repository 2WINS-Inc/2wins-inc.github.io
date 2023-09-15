/* @refresh reload */
import "./index.css";
import { Router } from "@solidjs/router";
import { ErrorBoundary, Suspense, render } from "solid-js/web";

import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import { FormProvider } from "./context/FormContext";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Suspense>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Router>
          <FormProvider>
            <App />
          </FormProvider>
        </Router>
      </ErrorBoundary>
    </Suspense>
  ),
  root!,
);
