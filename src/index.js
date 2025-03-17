import { createRoot } from "react-dom/client";
import RoutingManagement from "@routes/RoutingManagement";
import package_json from "@root/package.json";

const componentsContext = require.context("./views", true, /\.jsx$/);

createRoot(document.getElementById("root")).render(
  <RoutingManagement
    {...{
      componentsContext,
      customRoutes: { custom: <h1>Hola desde custom</h1> },
    }}
  />
);
