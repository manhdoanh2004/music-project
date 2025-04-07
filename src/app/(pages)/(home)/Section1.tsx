"use client";
import SongItem from "@/app/components/song/SongItem";
import Title from "@/app/components/title/TItle";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1() {
  const [dataFinal, setDataFinal] = useState<Array<Object> | undefined>(
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
          listen: data[key].listen,
          singerId: data[key].singerId,
          link:`/song/${key}`,
          audio:data[key].audio,
          wishlist:data[key].wishlist

        }));

        songArray = songArray.slice(0, 3);

        setDataFinal(songArray);
      }
    });
  }, []);
  return (
    <>
      {/*Section 1 :Banner Home + nghe  nhiều  */}
      <div className=" flex items-start">
        <div className="w-[534px]">
          <div
            className="w-full flex items-center rounded-[15px] bg-cover"
            style={{ backgroundImage: "url('/demo/background.png')" }}
          >
            <div className="flex-1 mr-[34px] ml-[30px]">
              <div className="font-[700] text-[32px] text-[white] mb-[6px]">
                Nhạc EDM
              </div>
              <div className="font-[500] text-[12px] text-[white] ">
                Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot
                nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
              </div>
            </div>
            <div className="w-[215px] mr-[22px] mt-[40px] ">
              <img
                src="/demo/image-2.png"
                alt="Nhạc EDM"
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
        <div className="flex-1 ml-[20px]">
          <Title text="Nghe Nhiều " />
          <div className="  grid grid-cols-1 gap-[12px]" song-list="">
            {dataFinal ? (
              <>
                {dataFinal.map((item: any, index: any) => (
                  <SongItem
                    key={index + 1}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    singer={item.singer}
                    listen={item.listen}
                    link={item.link}
                    audio={item.audio}
                    wishlist={item.wishlist}

                  />
                ))}
              </>
            ) : (
              <>Loading...</>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
