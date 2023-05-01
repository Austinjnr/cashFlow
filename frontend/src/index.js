import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { BeneficiariesProvider } from "./Components/userNavbar/BeneficiariesContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
let session = sessionStorage.getItem("userId");
root.render(
  <BrowserRouter>
    <BeneficiariesProvider userId={session}>
      <App />
    </BeneficiariesProvider>
  </BrowserRouter>
);
