function NavLink({ Name, Link, Source}) {
  return (
    <a href={Link} target="_blank">
      <img
        src={Source}
        alt="access my"
        className="w-10 h-10"
      ></img>
    </a>
  );
}

export default NavLink;
