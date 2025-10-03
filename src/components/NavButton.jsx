function NavButton({ Text, Id, onClick}) {
  return (
    <button
      className="px-8 py-2  bg-orange-500 rounded-4xl hover:bg-orange-700 h-12"
      onClick={() => {
        document
          .getElementById(Id)
          ?.scrollIntoView({ behavior: "smooth" });
      if (onClick) onClick();
    }}
    >
      {Text}
    </button>
  );
}

export default NavButton;
