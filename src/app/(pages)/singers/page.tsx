import { Metadata } from "next";
import Section1 from "./Section1";

export const metadata: Metadata = {
    title: "Danh sách ca sĩ",
    description: "",
   
  };
export default function SinggersPage()
{
    return(
        <>
       
        <Section1/>
        </>
    )
}