import Title from "@/app/components/title/TItle";
import { TiLeaf } from "react-icons/ti";
import FormLogin from "./FormLogin";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "",
 
};
export default function LoginPage() {
  return (
    <>
      <div className="mt-[60px] w-[500px] mx-[auto]">
        <Title text="Đăng Nhập Tài Khoản" classname="text-center" />
      <FormLogin/>
      </div>
    </>
  );
}
