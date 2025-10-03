//project image imports
import FIO from "/fio.png";
import Voxio from "/voxio.png";
import BuddyLock from "/buddylock.png";
import Counterself from "/Counterself.PNG";
import Insurify from "/insurify.png";

import Project from "../components/Project.jsx";

function Works() {
  return (
    <div
      className="min-h-screen bg-[rgba(18,169,123,255)] bg-cover bg-center pt-32 p-8 "
      id="works"
    >
      <h1 className="text-7xl text-center font-bold mb-12">Projects</h1>

      <div className="gap-8 flex flex-wrap justify-evenly">
        <Project
          Image={FIO}
          Title="Figure it Out"
          Description=" Figure it Out is an LLM that helps students work through technical problems rather than directly give the answer. There are 4 personalities to choose from to suit different learning styles. We used Cohere and Javascript to create it. Made for ElleHacks 2025"
          Link="https://dorahacks.io/buidl/22857/"
        ></Project>
        <Project
          Image={Voxio}
          Title="Voxio"
          Description="Glasses prototype with a camera that interprets sign language into spoken language and reads it aloud through a speaker pack. Created for the Deaf community in order to break down the sign language communication barrier. Made for DeltaHacks 2025.
"
          Link="https://r9ia.github.io/voxio/"
        ></Project>
        <Project
          Image={BuddyLock}
          Title="BuddyLock"
          Description="A chrome extension that softlocks access to websites of the user’s choice. Helps students stay focused and NOT scroll reels. Made for Hack the Ridge 2024"
          Link="https://github.com/Dasani1/Buddylock"
        ></Project>
        <Project
          Image={Counterself}
          Title="Counterself"
          Description="A visual novel that explores Counterspell’s ‘you are your own enemy’ theme. The main character’s destructive nature prevents them from getting a good ending. This was also my first time using Unity ^_^. Made for Hack Club Counterspell 2024
"
        ></Project>
        <Project
          Image={Insurify}
          Title="Insurify"
          Description="Desc: A prototype for an application that bridges the gap between the customer, insurance and healthcare companies. Uses AI to estimate insurance coverage for the patient’s needs instead of waiting weeks for insurance to get back to them. Although completely idealistic, we also wanted to highlight the struggles that patients face with insurance. Made for Hacktivism Ideathon 2024."
          Link="https://insurify.typedream.app/"
        ></Project>
      </div>
    </div>
  );
}

export default Works;
