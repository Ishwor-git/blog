import Navbar from "./components/navbar";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Post from "./pages/post";
import Contact from "./pages/contact";
import About from "./pages/about";
import { Box, Container } from "@mui/material";
function App() {
  // const router = createBrowserRouter([
  //   { path: "", element: <Home /> },
  //   { path: "blogs", element: <Blogs /> },
  //   { path: "post", element: <Post /> },
  //   { path: "contact-us", element: <Contact /> },
  //   { path: "about-us", element: <About /> },
  // ]);
  // return (
  //   <>
  //     <Navbar />
  //     <RouterProvider router={router} />
  //   </>
  // );
  return (
    <>
      <Router>
        <Navbar />
        <Box sx={{ mt: 8 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="post" element={<Post />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="about-us" element={<About />} />
          </Routes>
        </Box>
      </Router>
      ;
    </>
  );
}

export default App;
