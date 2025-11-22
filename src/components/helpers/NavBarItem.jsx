import { forwardRef } from "react";

const NavBarItem = forwardRef((props, ref) => {
  return (
    <button
      className="max-[650px]:hidden"
      onClick={() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {props.text}
    </button>
  );
});

export default NavBarItem;
