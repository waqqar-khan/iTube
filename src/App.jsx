import { Provider } from "react-redux";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/Store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Head />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
