import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

// Get the root DOM element
const rootElement = document.getElementById("root");

// Create a React root and render the app
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
