import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import NavBarList from "./component/NavBarList";
import ImageUploadModel from "./pop-up/ImageUploadModel";

function App() {
  return (
    <>
      <Header />
      <ImageUploadModel />
      <NavBarList />
      <Footer />
    </>
  );
}
export default App;
