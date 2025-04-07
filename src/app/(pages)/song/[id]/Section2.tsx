'use client'
import Title from "@/app/components/title/TItle";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section2(props: { id: any }) {
  const { id } = props;
  const [dataFinal, setDataFinal] = useState<any | undefined>(undefined);

  useEffect(() => {
    const SongRef = ref(dbFirebase, `songs/${id}`);
    onValue(SongRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
     

        setDataFinal({
            lyric: data.lyric,
     
        });
      }
    });
  }, []);
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Lời Bài Hát" />
        <div className="bg-[#212121] rounded-[15px] p-[20px] text-white font-500 text-[14px]">
        {dataFinal?(<> {dataFinal.lyric}</>):(<>Loading...</>)}
        </div>
      </div>
    </>
  );
}
