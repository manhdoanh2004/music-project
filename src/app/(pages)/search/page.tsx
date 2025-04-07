import { Metadata } from "next";
import Section1 from "./Section1";
import { Suspense } from 'react'
export const metadata: Metadata = {
    title: "Kết quả tìm kiếm",
    description: "",
   
  };
export default function SearchPage()
{
    return(
        <>
      
        <Suspense>
        <Section1/>
    </Suspense>
   
        </>
    )
}