import Link from "next/link"
import SiderMenu from "./SiderMenu"
import icon from "../../../../public/logomusic.svg"
export const Sider=()=>
{
    return(
        <>
        <div className="bg-[#212121] w-[280px] h-[100vh] fixed">
                 <div className="py-[25px] px-[20px] bg-[#1C1C1C]">
                    <Link href={"/"} className="flex justify-center items-center gap-[6.5px]">
                    <img src={icon.src} alt="logo"
                    className="h-[42px] w-[auto] "
                    />
                    <h1 className="font-[700] text-[24px] leading-[120%] text-[#00ADEF]">Music Web</h1>
                    </Link>
                 </div>
        <SiderMenu/>
        </div>
      
        </>
    )
}