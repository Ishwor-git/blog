import { BrowserRouter as Router } from "react-router-dom";
import Main from "./main";
import AuthProvider from "./context/authProvider";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Main />
      </Router>
    </AuthProvider>
  );
}

export default App;
