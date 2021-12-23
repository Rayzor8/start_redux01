import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import {useSelector} from "react-redux";

function App() {
   const themeColor = useSelector(state => state.theme.value)
  console.log(themeColor)
   return (
      <div className="App font-mont w-full min-h-screen py-4 px-4" style={{backgroundColor:themeColor}}>
        <ProfilePage/>
        <LoginPage/>
      </div>
   );
}

export default App;
