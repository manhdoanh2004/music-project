"use client";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import {  FaHeart, FaRegHeart } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function ButtonHeart2(props: any) {
  const { id, wishlist } = props;

  
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        const userId = user.uid;

        if (wishlist && wishlist[userId]) {
          setIsActive(true);
        }
      } else {
       
      }
    });
  }, []);

  const handleAddWishList = () => {


    const userId = authFirebase.currentUser?.uid;
    if (id && userId) {
      const songRef = ref(dbFirebase, `/songs/${id}`);

      runTransaction(songRef, (song) => {
        if (song) {
          if (song.wishlist && song.wishlist[userId]) {
            setIsActive(false);
            song.wishlist[userId] = null;
          } else {
            if (!song.wishlist) {
              song.wishlist = {};
            }
            song.wishlist[userId] = true;
            setIsActive(true);
          }
        }
        return song;
      });
    }
    else
    {
  
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Vui lòng đăng nhập để thêm vào bài hát yêu thích!",
        footer: '<a href="/login">Đăng nhập ?</a>'
      });
    }
  };
  return (
    <>
      <button
        onClick={handleAddWishList}
        className={`text-[20px] cursor-pointer  ${isActive ? "text-[#00ADEF] " : "text-white"}`  }
      >
      
        {isActive?  <FaHeart />:  <FaRegHeart /> }
      </button>
    </>
  );
}
