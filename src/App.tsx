import './App.css';
import Footer from './util-components/Footer';
import Header from './util-components/Header';
import NavBarList from './util-components/NavBarList';
import ImageUploadModel from './pop-up/ImageUploadModel';

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
