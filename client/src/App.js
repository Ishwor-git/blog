import BlogNavbar from "./components/blogNavbar";
import AdminNavbar from "./components/admin/adminNavbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import About from "./pages/about";
import SubmitBlog from "./pages/submitBlog";
import BlogPage from "./pages/blogPage";
import { Box } from "@mui/material";
import Dashboard from "./pages/admin/dashboard";
import NotFound from "./pages/404NotFound";
import { useLocation } from "react-router-dom";
import Login from "./pages/admin/login";
function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      {isAdminRoute ? <AdminNavbar /> : <BlogNavbar />}
      <Box sx={{}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="post" element={<SubmitBlog />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="about-us" element={<About />} />
          <Route path="blogs/:id" element={<BlogPage />} />
          <Route path="admin" element={<Navigate to="/admin/login" />} />
          <Route path="admin/blogs/:id" element={<BlogPage admin={true} />} />
          <Route path="admin/login" element={<Login />} />
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      ;
    </>
  );
}

export default App;
