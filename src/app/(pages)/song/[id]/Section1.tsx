"use client";
import CardInfo from "@/app/components/card/CardInfo";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1(props: { id: any }) {
  const { id } = props;
  const [dataFinal, setDataFinal] = useState<any | undefined>(undefined);

  useEffect(() => {
    const SongRef = ref(dbFirebase, `songs/${id}`);
    onValue(SongRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        //Object.keys(data) để lặp qua từ key của object data
        let categoryArray = Object.keys(data).map((key) => ({
          image: data.image,
          title: data.title,
          description: data.description,
        }));

        setDataFinal({
          image: data.image,
          title: data.title,
          description: data.description,
        });
      }
    });
  }, []);
  return (
    <>
    {dataFinal?(<>
        <CardInfo
        image={dataFinal.image}
        title={dataFinal.title}
        desc={dataFinal.description}
      />
    </>):(<>Loading...</>)}
      
    </>
  );
}
