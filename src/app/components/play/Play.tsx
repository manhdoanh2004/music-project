import { FaBackwardStep,FaPlay ,FaForwardStep,FaVolumeHigh   } from "react-icons/fa6";
import PlayAudio from "./PlayAudio";
import PlayInFo from "./PlayInFo";
import PlayAction from "./PlayAction";
import PlayTime from "./PlayTime";
import PlayVolume from "./PlayVolume";
export default function Play()
{
    return(
        <>
        <div className="bg-[#212121] py-[20px] border-t border-[#494949] fixed bottom-0 left-0 w-full z-[999] play-audio hidden ">
          <PlayAudio/>
            <div className="container mx-auto flex items-center justify-between">
             <PlayInFo/>
              <div className="flex-1 mx-[67px] ">
            <PlayAction/>
               <PlayTime/>
              </div>
           <PlayVolume/>
          
            </div>
        </div>
       
        </>
    )
}