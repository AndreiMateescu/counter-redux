import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Header />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
