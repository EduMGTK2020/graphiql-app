import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import AuthProvider from "./auth/AuthProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import "./lang/langSetup.ts";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications position="bottom-right" />
      <AuthProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </AuthProvider>
    </MantineProvider>
  </Provider>
);

