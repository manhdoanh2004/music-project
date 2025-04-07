'use client'
import 
{ authFirebase } from "@/app/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function FormLogin()
{

    
        const router=useRouter();
    
    
      const handleSubMit = (event: any) => {
        event.preventDefault();
    
      
        const email = event.target.email;
        const passWord = event.target.password;
    
        if ( email && passWord) {
         
          const emailString = email.value;
          const passWordString = passWord.value;
          if ( emailString && passWordString) {
                    signInWithEmailAndPassword(authFirebase,emailString,passWordString)
                        .then((userCredential)=>
                        {
                            const user=userCredential.user;
                            if(user)
                            {
                               Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Đăng nhập thành công!",
                                showConfirmButton: false,
                                timer: 1500
                              });
                                setTimeout(() => {
                                  router.push("/");
                                }, 1500);  
                            }
                        })
                        .catch(()=>
                        {
                            alert("Tài khoản hoặc mật khẩu không chính xác");
                        })
          }
        }
      };
    return(
        <>
          <form className="" onSubmit={(event)=>handleSubMit(event)}>
          <div className="mb-[15px] ">
            <label
              htmlFor="email"
              className="block mb-[5px] font-[600] text-[14px]"
            >
              <span className="text-white">Email</span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ví dụ : nguyenvana@gmail.com"
              required={true}
              className="h-[50px] w-full bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none mb-[15px] "
            />
            <label
              htmlFor="password"
              className="block mb-[5px] font-[600] text-[14px]"
            >
              <span className="text-white">Mật Khẩu </span>
              <span className="text-red-500 ml-[5px]">*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required={true}
              className="h-[50px] w-full bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none "
            />
          </div>
          <button
            type="submit"
            className=" cursor-pointer h-[50px] w-full text-white  bg-[#00ADEF] rounded-[6px] px-[16px] font-[600] text-[14px] outline-none"
          >
            Đăng Nhập
          </button>
        </form>
        </>
    )
}