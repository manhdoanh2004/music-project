
import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart from "../button/ButtonHeart2";
import ButtonHeart2 from "../button/ButtonHeart2";
import Link from "next/link";

export default function SongItem2(props:any) {
    const {image,title,singer,time,wishlist,id}=props;
  return (
    <>
      <div className="flex items-center justify-between bg-[#212121] py-[10px] px-[18px] rounded-[15px]">
        {/*Left */}
        <div className="w-[40%] flex items-center">
      
          <ButtonPlay {...props} classname="cursor-pointer text-[24px] text-white"/>
          <div className="w-[42px] aspect-square rounded-[8px] truncate mx-[12px]">
            <img src={image} alt={title}  className="w-full h-full object-cover"/>
          </div>
          <Link  href={`/song/${id}`} className="font-[700] text-[14px] text-white">{title}</Link>
        </div>
        {/*Center*/}
        <div className="w-[30%] text-center">
          <div className="font-[400] text-[14px] text-[#FFFFFF]">{singer}</div>
        </div>

        {/*Right */}
        <div className="w-[30%] text-right flex items-center justify-end  ">
          <div className="ont-[400] text-[14px] text-[#FFFFFF] mr-[18px]">{time}</div>
         <ButtonHeart2 {...props}  />
        </div>
      </div>
    </>
  );
}
