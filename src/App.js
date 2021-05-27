import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import VelibLocationMenu from './VelibLocationMenu'
import LandingPage from './LandingPage'

function App() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
        {isAuthenticated ? <VelibLocationMenu/> : <LandingPage/>}
    </div>
  );
}

export default App;
