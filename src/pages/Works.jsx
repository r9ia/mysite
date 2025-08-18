//project image imports
import FIO from "/fio.png";
import Voxio from "/voxio.png"
import BuddyLock from "/buddylock.png"
import Counterself from "/Counterself.PNG"
import Insurify from "/insurify.png"

import Project from "../components/Project.jsx";

function Works() {
  return (
    <div
      className="min-h-screen bg-orange-200 bg-cover bg-center pt-32 p-8"
      id="works"
    >
      <h1 className="text-7xl text-center font-bold mb-12">Projects</h1>

      <div className="grid grid-cols-3 gap-8">
        <Project Image={FIO} Title="Figure it Out" Description="lmao" Link="https://dorahacks.io/buidl/22857/" ></Project>
        <Project Image={Voxio} Title="Voxio" Description="lmao" Link="https://r9ia.github.io/voxio/" ></Project>
        <Project Image={BuddyLock} Title="BuddyLock" Description="lmao" Link="https://github.com/Dasani1/Buddylock" ></Project>
        <Project Image={Counterself} Title="Counterself" Description="lmao" ></Project>
        <Project Image={Insurify} Title="Insurify" Description="lmao" Link="https://insurify.typedream.app/" ></Project>

      </div>
    </div>
  );
}

export default Works;
