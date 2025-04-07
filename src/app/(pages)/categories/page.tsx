import { Metadata } from "next";
import Section1 from "./Section1";

export const metadata: Metadata = {
    title: "Danh mục bài hát",
    description: "",
   
  };
export default  function CategoriesPage()
{
    return (
    <>
        <Section1/>
    </>);
}