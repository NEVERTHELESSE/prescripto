import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Header from "./components/Header";
import { lazy, Suspense } from "react";
import Doctor from "./doctor/Doctor";
import Signup from "./signnup/Signup";
import Login from "./login/Login";
import Account from "./account/Account";
import store from "./redux/store";

function App() {
  const Home = lazy(() => import("./home/Home"));
  const About = lazy(() => import("./about/About"));
  const DoctorId = lazy(() => import("./doctor/id/DoctorId"));
  const Contact = lazy(() => import("./contact/Contact"));
  const Admin = lazy(() => import("./admin/Admin"));
  const ConfirmGmail = lazy(() => import("./ConfirmGmeil"));

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <SnackbarProvider />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"loading"}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={"loading"}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/confirm"
            element={
              <Suspense fallback={"loading"}>
                <ConfirmGmail />
              </Suspense>
            }
          />
          <Route
            path="/admin"
            element={
              <Suspense fallback={"loading"}>
                <Admin />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={"loading"}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={"loading"}>
                <Signup />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={"loading"}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/doctor/:id"
            element={
              <Suspense fallback={"loading"}>
                <DoctorId />
              </Suspense>
            }
          />
          <Route
            path="/doctor"
            element={
              <Suspense fallback={"loading"}>
                <Doctor />
              </Suspense>
            }
          />
          <Route
            path="/account"
            element={
              <Suspense fallback={"loading"}>
                <Account />
              </Suspense>
            }
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
