function Project({ Image, Title, Description, Link }) {
  return (
    <div class="p-8 backdrop-blur-m shadow-sm rounded-3xl w-96">
      <img
        src={Image}
        alt="image of project"
        class="object-contain h-48 m-auto"
      ></img>

      <h1 class="text-3xl font-semibold pt-4">{Title}</h1>

      <p>{Description}</p>
      <br />

      {Link && (
        <button
          onClick={() => window.open(Link, "_blank","noopener,noreferrer")}
          className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] backdrop-blur-xl px-4 py-1 rounded-2xl text-m hover:bg-white/6"
        >
          See More
        </button>
      )}
    </div>
  );
}

export default Project;
