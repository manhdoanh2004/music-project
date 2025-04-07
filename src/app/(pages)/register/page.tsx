import Title from "@/app/components/title/TItle";
import FormRegister from "./FormRegister";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "",
 
};
export default function RegisterPage()
{
    return (
        <>
  
              <div className="mt-[60px] w-[500px] mx-[auto]">
                <Title text="Đăng Ký Tài Khoản" classname="text-center" />
              <FormRegister/>
              </div>
            </>
          );
      
}