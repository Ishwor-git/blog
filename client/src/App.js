import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import About from "./pages/about";
import SubmitBlog from "./pages/submitBlog";
import BlogPage from "./pages/blogPage";
import { Box } from "@mui/material";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Box sx={{}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="post" element={<SubmitBlog />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="about-us" element={<About />} />
            <Route path="blogs/:id" element={<BlogPage />} />
          </Routes>
        </Box>
      </Router>
      ;
    </>
  );
}

export default App;
