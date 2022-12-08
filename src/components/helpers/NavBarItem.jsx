import { forwardRef } from "react";

const NavBarItem = forwardRef((props, ref) => {
  return (
    <button
      onClick={() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {props.text}
    </button>
  );
});

export default NavBarItem;
