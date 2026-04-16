// import { createPortal } from "react-dom";
// import PortalTest from "./PortalTest";
import { useState } from "react";
import Modal from "./Modal";

const RootPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Root Page</h1>
      {/* <h1>Portal</h1>
      {createPortal(<h1>Portal</h1>, document.body)} */}
      {/* <PortalTest /> */}

      <button onClick={() => setOpen(true)}>Open Modal</button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Hello from modal</h2>
        <p>This is simple modal without context.</p>
      </Modal>
    </div>
  );
};

export default RootPage;
