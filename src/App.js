import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PostList from "./pages/PostList";
import About from "./pages/About";
import PostViewer from "./pages/PostViewer";
import PostUpload from "./pages/PostUpload";
import { GlobalStyle } from "./styles/GlobalStyle";
import Admin from "./pages/Admin";
import LectureNote from "./pages/LectureNote";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "postlist",
        element: <PostList />,
      },
      {
        path: "postviewer",
        element: <PostViewer />,
      },
      {
        path: "postupload",
        element: <PostUpload />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "lecturenote",
        element: <LectureNote /> ,
      },
      {
        path: "post",
        element: <Post />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
