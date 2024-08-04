import Navbar from "./components/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Post from "./pages/post";
import Contact from "./pages/contact";
import About from "./pages/about";
function App() {
  const router = createBrowserRouter([
    { path: "", element: <Home /> },
    { path: "blogs", element: <Blogs /> },
    { path: "post", element: <Post /> },
    { path: "contact-us", element: <Contact /> },
    { path: "about-us", element: <About /> },
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
