function NavButton({ Text, Id }) {
  return (
    <button
      className="px-8 py-2  bg-orange-500 rounded-4xl hover:bg-orange-700"
      onClick={() => {
        document
          .getElementById(Id)
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {Text}
    </button>
  );
}

export default NavButton;
