import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import Section1 from "./Section1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết danh mục bài hát",
  description: "",
 
};
export default async function SongByCategoryPage({params}:any) {
  const { id }=await params;
 console.log(id)
  return (
    <>
     <Section1 id={id} />
      <Section2 id={id} />
    </>
  );
}
