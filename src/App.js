// import Footer from "./components/Footer/Footer";
// import Navbar from './components/Navbar/Navbar';
import "./App.css";
import Hero from "./pages/Hero/Hero";
// import InnerCircle from "./pages/InnerCircle/InnerCircle";
import Profile from "./pages/Profile/Profile";
// import IndustryNav from "./components/Industry/IndustryNav";
// import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => {
    setModalOpen(false);
    setSignInType(null);
  };
  const open = () => setModalOpen(true);
  const [signInType, setSignInType] = useState("register");

  const renderModal = () => {
    if (signInType === "register") {
      return <Register setSignInType={setSignInType} handleClose={close} />;
    } else if (signInType === "login") {
      return <Login handleClose={close} />;
    } else {
      setSignInType("register");
    }
  };

  const handleModalOpen = () => {
    modalOpen ? close() : open();
  };

  return (
    <>
      <Navbar handleModalOpen={handleModalOpen} />
      {modalOpen && (
        <Modal
        children={renderModal()}
        modalOpen={modalOpen}
        handleClose={close}
        />
        )}
      <Hero />
      <Profile />
      {/* <InnerCircle /> */}
        {/* <IndustryNav /> */}
      {/* <Navbar /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
