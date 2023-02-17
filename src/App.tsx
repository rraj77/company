import "./App.css";
import Footer from "./util-components/Footer";
import Header from "./util-components/Header";
import NavBarList from "./util-components/NavBarList";
import ImageUploadModel from "./pop-up/ImageUploadModel";

import { ProductList } from "./products/Api";
import { BioContext } from "./invoice/ContextInvoice";
function App() {
  return (
    <>
    <BioContext.Provider value={ProductList}>
      <Header />
      <ImageUploadModel />
      <NavBarList />
      <Footer />
      </BioContext.Provider>
    </>
  );
}
export default App;
