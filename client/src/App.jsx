import { useRoutes } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const Routes = useRoutes(routes());
  return <div className="h-full ">{Routes}</div>;
};

export default App;
