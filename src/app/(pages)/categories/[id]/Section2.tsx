'use client'
import SongItem2 from "@/app/components/song/SongItem2";
import Title from "@/app/components/title/TItle";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { FaPlay, FaRegHeart } from "react-icons/fa6";

export default function Section2(props: { id: any })
{
    const { id } = props;
     const [dataFinal, setDataFinal] = useState<any | undefined>(
        undefined
      );
    
      useEffect(() => {
        const songRef = ref(dbFirebase, "songs");
        onValue(songRef, (snapshot) => {
          const data = snapshot.val();
    
          if (data) {
            //Object.keys(data) để lặp qua từ key của object data
            let songArray = Object.keys(data).map((key) => ({
              id: key,
              image: data[key].image,
              title: data[key].title,
              singer: "",
              time:"4.32",
              listen: data[key].listen,
              singerId: data[key].singerId,
              categoryId:data[key].categoryId,
              audio:data[key].audio,
              wishlist:data[key].wishlist
            }));
    
            songArray = songArray.filter((item:any)=> item.categoryId==id);
    
            setDataFinal(songArray);
          }
        });
      }, []);

   
    return(
        <>
        <div className="mt-[30px]">
           <Title text="Danh mục bài hát"/>
           {/*List */}
           <div className=" grid grid-cols-1 gap-[10px]">
                {/*Item */}
                {dataFinal?(<>{dataFinal.map((item:any,index:any)=>
                <SongItem2 key={index+1} {...item}/>
                )}</>):(<>Loading...</>)}
              
           </div>
        </div>
        </>
    )
}