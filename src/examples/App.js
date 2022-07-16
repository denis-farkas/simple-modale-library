import React from "react";
import { Modal } from "../lib";
import useModal from "../lib/hooks/useModal";

const App = () => {
const { isShowing, toggle, reload } = useModal();
  return(
  <div className="container">
    <h1>Example Modale React</h1>
    <button onClick={toggle}>Toggle Modal</button>
  <Modal isShowing={isShowing} hide={toggle} />
  </div>
);
}
  

export default App;