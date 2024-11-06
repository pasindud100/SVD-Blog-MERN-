import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Get the root DOM element
const rootElement = document.getElementById("root");

// Create a React root and render the app
const root = createRoot(rootElement);
root.render(
<PersistGate persistor={persistor}>
<Provider store={store}>
      <App />
    </Provider>
</PersistGate>
   

);
