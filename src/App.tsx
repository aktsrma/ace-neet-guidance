
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Mentorship from "./pages/Mentorship";
import Counseling from "./pages/Counseling";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
import BlogEditor from "./pages/BlogEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/counseling" element={<Counseling />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/blog/new" element={<BlogEditor />} />
            <Route path="/admin/blog/edit/:slug" element={<BlogEditor />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
