import CardInfo from "@/app/components/card/CardInfo";
import Title from "@/app/components/title/TItle";
import Section3 from "./Section3";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết bài hát",
  description: "",
 
};
export default async function SongDetailPage({params}:any) {

  const { id } =  await params;
  return (
    <>
  <Section1 id={id}/>

      {/*Lời bài hát */}
      <Section2 id={id}/>

   {/*Danh sách  bài hát cùng danh mục  */}
      <Section3 id={id}/>
    </>
  );
}
