import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Follow system color-scheme. Both schemes are dim by design — .dark only deepens the same hue family.
const mql = window.matchMedia("(prefers-color-scheme: dark)");
const applyScheme = (dark: boolean) => {
  document.documentElement.classList.toggle("dark", dark);
};
applyScheme(mql.matches);
mql.addEventListener("change", (e) => applyScheme(e.matches));

createRoot(document.getElementById("root")!).render(<App />);
