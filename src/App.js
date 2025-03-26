import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Sale from "./components/Sale";
import Recommended from "./components/Recommended";
import Topics from "./components/Topics";
import PopularSection from "./components/PopularSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Categories></Categories>
      <Sale></Sale>
      <Recommended></Recommended>
      <Topics></Topics>
      <PopularSection></PopularSection>
      <Footer></Footer>
    </>
  );
}

export default App;
