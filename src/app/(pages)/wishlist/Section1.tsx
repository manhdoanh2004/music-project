"use client";
import SongItem2 from "@/app/components/song/SongItem2";
import Title from "@/app/components/title/TItle";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1() {
  const [dataFinal, setDataFinal] = useState<any | undefined>(undefined);

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        //lấy ra id của người dùng
        const userId = user.uid;

        //lấy ra tất cả bài hát
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
              time: "4.32",
              listen: data[key].listen,
              singerId: data[key].singerId,
              categoryId: data[key].categoryId,
              audio: data[key].audio,
              wishlist: data[key].wishlist,
            }));

            songArray = songArray.filter(
              (item: any) => item.wishlist && item.wishlist[userId]
            ); //lấy ra những bài hát yêu thích của user dựa trên id

            setDataFinal(songArray);
          }
        });
      } else {
      }
    });
  }, []);
  const data = [
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu,Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu,Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu,Huỳnh Văn",
      time: "4:32",
    },
    {
      image: "/demo/image-3.png",
      title: "Hoa Nở Bên Đường",
      singer: "Hồ Quang Hiếu,Huỳnh Văn",
      time: "4:32",
    },
  ];
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Bài Hát Yêu Thích" />
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
