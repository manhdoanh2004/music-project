import SongItem from "@/app/components/song/SongItem";
import Title from "@/app/components/title/TItle";
import Link from "next/link";
import { FaHeart, FaPlay } from "react-icons/fa6";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function HomePage() {
  return (
    <>
     <Section1/>
     <Section2/>
     <Section3/>
    </>
  );
}
