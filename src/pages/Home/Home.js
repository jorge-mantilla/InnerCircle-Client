import { useState } from "react";
import { motion} from "framer-motion"
import Modal from "../../components/Modal/Modal"
import Navbar from "../../components/Navbar/Navbar";
import Register from "../../components/Auth/Register";
import Login from "../../components/Auth/Login";
import Hero from "../Hero/Hero"

function Home() {
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
    <motion.article initial={{width: 0}} animate={{width: "100%"}} exit={{x: window.innerWidth, transition: {duration: 0.1}}}>
      <Navbar handleModalOpen={handleModalOpen} />
      {modalOpen && (
        <Modal
        children={renderModal()}
        modalOpen={modalOpen}
        handleClose={close}
        />
        )}
        <Hero />
    </motion.article>
  );
}

export default Home;