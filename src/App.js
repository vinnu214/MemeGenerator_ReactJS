/*Redux SetUp - Step 6 --> 
6a) Import Provider from react-redux and Wrap it around Main App
6b) import store from store.js
6c) send store as props to <Provider> tag
*/

import "./App.css";
import MemeGenerator from "./components/MemeGenerator/MemeGenerator";
// import Registration from "./components/Registration/Registration";
import { Provider } from "react-redux";
import store from "./StateManagement/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Registration /> */}
        <MemeGenerator />
      </div>
    </Provider>
  );
}

export default App;
