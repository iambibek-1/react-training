import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import Analytics from "./pages/Dashboard/Analytics";
import User from "./pages/Dashboard/Settings/User";
import Admin from "./pages/Dashboard/Settings/Admin";
import SettingsLayout from "./pages/Dashboard/Settings/SettingsLayout";
import BlogLayout from "./pages/Blog/BlogLayout";
import Posts from "./pages/Blog/Posts";
import PostDetails from "./pages/Blog/PostDetails";
import ContactLayout from "./pages/Contact/ContactLayout";
import Contact from "./pages/Contact/Contact";
import ContactDetails from "./pages/Contact/ContactDetails";
// import Parent from './propsdrill/Parent';
import UserCard from "./components/reusableComponent/UserCard";
import SmartComponent from "./smartComponent/SmartComponent";
import Parent from "./components/liftingstate/Parent";
import ParentWithContext from "./components/contextAPI/ParentWithContext";
import UserList from "./components/UserList";
import LoginFormHook from "./components/reactformhook/LoginFormHook";
import FetchUsers from "./fetchApi/FetchUsers";
import AxiosPosts from "./fetchApi/AxiosPosts";
import ToDos from "./fetchApi/ToDos";
import ReactMemoExample from "./optimizations/ReactMemoExample";
import UseMemoExample from "./optimizations/UseMemoExample";
import UseCallbackExample from "./optimizations/UseCallbackExample";
import LazyLoadingExample from "./optimizations/LazyLoadingExample";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<Posts />} />
          <Route path=":postId" element={<PostDetails />} />
        </Route>

        <Route path="/contact" element={<ContactLayout />}>
          <Route index element={<Contact />} />
          <Route path=":contactId" element={<ContactDetails />} />
        </Route>

        {/* Nested Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<SettingsLayout />}>
            <Route path="user" element={<User />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Route>
      </Routes>

      <h1>Props Drilling Demo</h1>
      {/* <Parent/> */}

      {/* <UserCard name="Alice" age={25} email="alice@example.com" />
      <UserCard name="Bob" age={30} email="bob@example.com" />
      <UserCard name="Bob" age={30} email="bob@example.com" />
      <UserCard name="Bob" age={30} email="bob@example.com" />
      <UserCard name="Bob" age={30} email="bob@example.com" /> */}

      {/* <SmartComponent/> */}

      {/* <Parent />
      <ParentWithContext />
      <UserList />
      <LoginFormHook /> */}

      {/* <FetchUsers /> */}
      {/* <AxiosPosts /> */}

      <ToDos />

      {/* <ReactMemoExample /> */}

      {/* <UseMemoExample /> */}

      <UseCallbackExample />

      <LazyLoadingExample />
    </>
  );
};

export default App;
