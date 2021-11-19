import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BarnNav from "./components/Navbar";
import BannerAd from "./components/BannerAd";
import BooksMain from "./components/BooksMain"

function App() {
  
  return (
    <>
      <BarnNav />
      <BannerAd />
      <BooksMain />
    </>
  );
};

export default App;
