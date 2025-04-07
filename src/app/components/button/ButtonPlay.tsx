import { FaPlay } from "react-icons/fa6";

export default function ButtonPlay(props: any) {
  const { audio, id ,image,title,singer,classname=""} = props;

  const handlePlay = () => {
    const elementPlayAudio = document.querySelector(".play-audio");
    if (elementPlayAudio) {

      //chèn thêm thuộc tính song di
      elementPlayAudio.setAttribute("song-id",id);
      
      //Phát nhạc
      const elementAudio: any = elementPlayAudio.querySelector(".inner-audio");
      const elementSource: any =
        elementPlayAudio.querySelector(".inner-source");
      elementSource.src = audio;
      elementAudio.load();
      elementAudio.play();

      //Hiện thị khối play
      if(elementPlayAudio.classList.contains("hidden"))
      {
        elementPlayAudio.classList.remove("hidden");
      }


      //Hiện thị ảnh
      const elementImage:any=elementPlayAudio.querySelector(".inner-image");
      elementImage.src=image;
      elementImage.alt=title;


      //Hiện thị tiêu đề
      const elementTitle:any=elementPlayAudio.querySelector(".inner-title");
      elementTitle.innerHTML=title;

      //Hiện thị ca sĩ
      const elementSinger:any=elementPlayAudio.querySelector(".inner-singer");
      elementSinger.innerHTML=singer;

      //thêm class vào inner-button-play
      const elementButtonPlay :any=elementPlayAudio.querySelector(".inner-button-play");
      if(elementButtonPlay)   elementButtonPlay.classList.add("play")


      //Lấy ra tổng thời gian của bài hát
      const elementPlayTimeTotal:any=elementPlayAudio.querySelector('.inner-play-time .inner-total');
      const elementPlayTimeCurrent:any=elementPlayAudio.querySelector('.inner-play-time .inner-current');

      elementAudio.onloadedmetadata=()=>
      {
        const totalTime=elementAudio.duration;
        elementPlayTimeTotal.max=totalTime

        //Lấy ra thời gian hiện tại mà bài hát đang chạy đến
        elementAudio.ontimeupdate=()=>
        {
          const currentTime=elementAudio.currentTime;
          elementPlayTimeTotal.value=currentTime;

          const percent=currentTime*100/totalTime;
          elementPlayTimeCurrent.style.width=`${percent}%`;
        
        }

      }

    }
  };
  return (
    <>
      <button
        onClick={handlePlay}
        className={classname}      >
        <FaPlay />
      </button>
    </>
  );
}
