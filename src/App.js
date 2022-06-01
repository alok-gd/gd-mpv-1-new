import "./App.css";
import Banner from "./component/banner/banner.components";
import GDPrimaryButton from "./component/gd-primary-button/gd-primary-button.component";
import Header from "./component/header/header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <GDPrimaryButton />
      <Banner />
    </div>
  );
}

export default App;
