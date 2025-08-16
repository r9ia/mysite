function ContactTab(props) {
  return (
    <div className="p-4 flex items-start gap-4">
      <div>
        <img src={props.Logo} alt="logo" className="w-12 h-12"></img>
      </div>

      <div>
        
        <p className="font-bold">{props.Social}</p>
        <p>{props.Handle}</p>

      </div>
    </div>
  );
}

export default ContactTab;
