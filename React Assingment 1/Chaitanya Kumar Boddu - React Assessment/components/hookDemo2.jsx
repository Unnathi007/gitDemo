import { useRef } from "react";
import ReactDOM from "react-dom/client";

function hookDemo2() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
 export default hookDemo2;