"use client";
import SongItem2 from "@/app/components/song/SongItem2";
import Title from "@/app/components/title/TItle";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { FaPlay, FaRegHeart } from "react-icons/fa6";

export default function Section3(props: { id: any }) {
  const { id } = props;
  const [dataFinal, setDataFinal] = useState<any | undefined>(undefined);

  useEffect(() => {
    const SongRef = ref(dbFirebase, `songs/${id}`);

    onValue(SongRef, (snapshot) => {

      const data1 = snapshot.val();
           
      if (data1) {
        const categoriId=data1.categoryId;
        const songRef = ref(dbFirebase, "songs");
        onValue(songRef, (snapshot) => {
          const data2 = snapshot.val();
    
          if (data2) {
            //Object.keys(data) để lặp qua từ key của object data
            let songArray = Object.keys(data2).map((key) => ({
              id: key,
              image: data2[key].image,
              title: data2[key].title,
              singer: "",
              listen: data2[key].listen,
              singerId: data2[key].singerId,
              categoryId:data2[key].categoryId
            }));
    
            songArray = songArray.filter((item:any)=> item.categoryId==categoriId&& item.id !=id);
    
            setDataFinal(songArray);
          }
        });
       
      }
    });
  }, []);

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Bài Hát Cùng Danh Mục" />
        {/*List */}
        <div className=" grid grid-cols-1 gap-[10px]">
          {/*Item */}
          {dataFinal ? (
            <>
              {dataFinal.map((item: any, index: any) => (
                <SongItem2 key={index + 1} {...item} />
              ))}
            </>
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </>
  );
}
