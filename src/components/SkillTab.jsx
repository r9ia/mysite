function SkillTab({ Icon, Name, Stars }) {
  return <div className="p-4 bg-white rounded-xl">
    <img src={Icon} alt="skill logo" className="object-contain h-32 w-32 item-center"/>
    <h1 className="text-center"> {Name} </h1>
    <div className="flex">
        {Array.from({ length: Stars }).map((_, index) => (
          <span key={index}>⭐</span>
        ))}
      </div>
    
    
  </div>;
}

export default SkillTab;
