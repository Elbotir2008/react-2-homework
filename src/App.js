import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/aboutUs/About.jsx";
import Services from "./pages/ourServiceds/Sevices.jsx";
import Content from "./pages/content/Content.jsx";
import Articles from "./pages/articles/Articles.jsx";
import Contact from "./pages/contantUs/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Content />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
