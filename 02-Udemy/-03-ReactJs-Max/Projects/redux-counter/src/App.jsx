import { Fragment } from "react";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
function App() {
  const auth = useSelector((state) => state.auth.auth);

  return (
    <Fragment>
      <Header />
      {!auth && <Auth />}
      {auth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
