import MainLayout from "./components/layout/MainLayout";
import Login from "./pages/Login";

import { useAuth } from "./hooks/useAuth";

function App() {

  const { user } = useAuth();

  if (!user) {

    return <Login />;

  }

  return <MainLayout />;

}

export default App;