import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";

function App() {
   return (
      <div className="App font-mont w-full min-h-screen bg-gradient-to-r from-indigo-200 via-blue-10 to-blue-200 py-4 px-4">
        <ProfilePage/>
        <LoginPage/>
      </div>
   );
}

export default App;
