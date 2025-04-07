"use client";

import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function FormRegister() {
  const router = useRouter();

  const handleSubMit = (event: any) => {
    event.preventDefault();

    const fullName = event.target.hoten;
    const email = event.target.email;
    const passWord = event.target.password;

    if (fullName && email && passWord) {
      const fullNameString = fullName.value;
      const emailString = email.value;
      const passWordString = passWord.value;
      if (fullNameString && emailString && passWordString) {
        createUserWithEmailAndPassword(
          authFirebase,
          emailString,
          passWordString
        )
          .then((userCredential) => {
            const user = userCredential.user;
            set(ref(dbFirebase, `users/` + user.uid), {
              fullName: fullNameString,
            }).then(() => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Đăng ký thành công!",
                showConfirmButton: false,
                timer: 1500,
              });
              setTimeout(() => {
                router.push("/");
              }, 1500);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };
  return (
    <>
      <form className="" onSubmit={(event) => handleSubMit(event)}>
        <div className="mb-[15px] ">
          <label
            htmlFor="hoten"
            className="block mb-[5px] font-[600] text-[14px]"
          >
            <span className="text-white">Họ Tên</span>
            <span className="text-red-500 ml-[5px]">*</span>
          </label>
          <input
            type="text"
            name="hoten"
            id="hoten"
            placeholder="Ví dụ : Nguyễn Văn A"
            required={true}
            className="h-[50px] w-full bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none mb-[15px] "
          />
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
          className="h-[50px] w-full text-white  bg-[#00ADEF] rounded-[6px] px-[16px] font-[600] text-[14px] outline-none cursor-pointer"
        >
          Đăng Ký
        </button>
      </form>
    </>
  );
}
