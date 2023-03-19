import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Common/Layout/Layout";
import LoadingScreen from "./Components/Common/LoadingScreen/LoadingScreen";
const NavBar = lazy(() => import("./Components/Common/NavBar/NavBar"));
const Home = lazy(() => import("./Components/Home/Home"));
const Posts = lazy(() => import("./Components/Posts/Posts"));
const MovieDetail = lazy(() => import("./Components/MovieDetail/MovieDetail"));
const PostDetail = lazy(() => import("./Components/PostDetail/PostDetail"));
const EditPostForm = lazy(
  () => import("./Components/Form/EditPost/EditPostForm")
);
const Pdf = lazy(() => import("./Components/Pdf/Pdf"));

import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme, ThemeProvider } from "@mui/material";
import { customTheme } from "./utils/themeConfig";

const queryClient = new QueryClient();

function App() {
  const theme = createTheme(customTheme);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<LoadingScreen />}>
              <NavBar />
              <Routes>
                <Route path="/posts" element={<Posts />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="/pdf" element={<Pdf />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="post/:id/edit" element={<EditPostForm />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </Suspense>
          </QueryClientProvider>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
