'use client'
import {
  FaBackwardStep,
  FaForwardStep,
  FaPause,
  FaPlay,
} from "react-icons/fa6";

export default function PlayAction() {
  const handlePlay = () => {
    const elementPlayAudio = document.querySelector(".play-audio");
    if(elementPlayAudio)
    {
        const elementButtonPlay :any=elementPlayAudio.querySelector(".inner-button-play");
        const elementAudio: any = elementPlayAudio.querySelector(".inner-audio");

        if(elementButtonPlay)
        {
            if(elementButtonPlay.classList.contains("play"))
            {
                elementButtonPlay.classList.remove("play");
                elementAudio.pause();
            }else 
            {
                elementButtonPlay.classList.add("play");
                elementAudio.play();
            }
        }
    }
  };

  const handlePrevious=(event:any)=>
    {
      const elementPlayAudio = document.querySelector(".play-audio");
      if(elementPlayAudio)
      {
        const idSongCurrent=elementPlayAudio.getAttribute("song-id");
        if(idSongCurrent)
        {
          const songList:any=document.querySelector("[song-list]");
          if(songList)
          {
            const songCurrent=songList.querySelector( `[data-song="${idSongCurrent}"]`);
            const songNext=songCurrent.previousElementSibling;
            if(songNext)
            {
              const buttonPlay= songNext.querySelector(".inner-button-play");
              buttonPlay.click();
            }
  
          }
        }
      }
    }

  const handleNext=(event:any)=>
  {
    const elementPlayAudio = document.querySelector(".play-audio");
    if(elementPlayAudio)
    {
      const idSongCurrent=elementPlayAudio.getAttribute("song-id");
      if(idSongCurrent)
      {
        const songList:any=document.querySelector("[song-list]");
        if(songList)
        {
          const songCurrent=songList.querySelector( `[data-song="${idSongCurrent}"]`);
          const songNext=songCurrent.nextElementSibling;
          if(songNext)
          {
            const buttonPlay= songNext.querySelector(".inner-button-play");
            buttonPlay.click();
          }

        }
      }
    }
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <button className="cursor-pointer text-white text-[16px] "   onClick={(event)=>handlePrevious(event)}>
          <FaBackwardStep />
        </button>
        <button onClick={handlePlay}
          className="cursor-pointer mx-[42px] text-white text-[16px] 
                            w-[32px] h-[32px] rounded-full inline-flex 
                            items-center justify-center bg-[#00ADEF]  inner-button-play "
        >
          <FaPlay className="inner-icon-play" />
          <FaPause className="inner-icon-pause" />
        </button>
        <button className="cursor-pointer text-white text-[16px] " onClick={(event)=>handleNext(event)}>
          <FaForwardStep />
        </button>
      </div>
    </>
  );
}
