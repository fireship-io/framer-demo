import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useModal from "./hooks/useModal";
import { framerLogger } from "./stateLogger";
import Notification from "./components/Notification";
import Input from "./components/Input";
import Modal from "./components/Modal";
import { add } from "./arr-utils";

function App() {
  // Modal state
  const { modalOpen, close, open } = useModal();

  // Modal type
  const [modalType, setModalType] = useState("slideIn");
  const handleType = (e) => setModalType(e.target.value);

  // Notifications state
  const [notifications, setNotifications] = useState([]);

  // Notification text
  const [text, setText] = useState("Awesome job! 🚀");
  const handleText = (e) => setText(e.target.value);

  // Notification style
  const [style, setStyle] = useState("success");
  const handleStyle = (e) => setStyle(e.target.value);

  // Notification position
  const [position, setPosition] = useState("bottom");
  const handlePosition = (e) => setPosition(e.target.value);

  return (
    <>
      <motion.main>
        <Header />
        <SubHeader text="Animated modals" />

        <motion.select className="input" onChange={handleType}>
          <option value="slideIn">Slide in</option>
          <option value="flip">Flip</option>
          <option value="newspaper">Newspaper</option>
          <option value="badSuspension">Bad Suspension</option>
          <option value="gifYouUp">GIF you up</option>
        </motion.select>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={open}
        >
          Open modal
        </motion.button>

        <br />
        <br />

        <SubHeader text="Notification stack" />

        <Input
          placeHolder="Add notification text = Awesome job! 🚀"
          value={text}
          onChange={handleText}
        />

        <br />

        <motion.select className="input" onChange={handleStyle}>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
          <option value="light">Light</option>
          <option value="">Dark</option>
        </motion.select>

        <br />

        <motion.select className="input" onChange={handlePosition}>
          <option value="bottom">Bottom</option>
          <option value="top">Top</option>
        </motion.select>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="add-button"
          onClick={() => setNotifications(add(notifications, text, style))}
        >
          + Notify me
        </motion.button>
      </motion.main>

      <ModalContainer>
        {modalOpen && (
          <Modal modalOpen={modalOpen} text={modalType} type={modalType} handleClose={close} />
        )}
      </ModalContainer>

      <NotificationContainer position={position}>
        {notifications &&
          notifications.map((notification) => (
            <Notification
              key={notification.id}
              notification={notification}
              notifications={notifications}
              setNotifications={setNotifications}
            />
          ))}
      </NotificationContainer>
    </>
  );
}

const Header = () => (
  <motion.h1 className="pink">
    Framer Motion
    <span className="light-blue">React</span>
  </motion.h1>
);

const SubHeader = ({ text }) => <motion.h2 className="sub-header">{text}</motion.h2>;

const ModalContainer = ({ children, label }) => (
  // Enables the animation of components that have been removed from the tree
  <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    exitBeforeEnter={true}
    // Fires when all exiting nodes have completed animating out
    onExitComplete={() => framerLogger(label)}
  >
    {children}
  </AnimatePresence>
);

const NotificationContainer = ({ children, position }) => {
  return (
    <div className="container">
      <ul className={position}>
        <AnimatePresence
          initial={false}
          onExitComplete={() => framerLogger("Notifications container")}
        >
          {children}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default App;
