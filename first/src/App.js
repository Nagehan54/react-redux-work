import Footer from "./components/footer";
import Header from "./components/header";
import {HashRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/home"
import Login from "./pages/login"
import Category from "./pages/category";

function App() {
  return (
    <div className="container py-3">

      <Header />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="category/:slug" element={<Category />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );
}

export default App;
