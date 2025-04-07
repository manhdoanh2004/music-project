'use client'
import CardInfo from "@/app/components/card/CardInfo";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default  function Section1(props: { id: any }) {
  const { id } = props;

  
    const [dataFinal, setDataFinal] = useState<any | undefined>(
          undefined
        );
      
        useEffect(() => {
          const categoriesRef = ref(dbFirebase, `categories/${id}`);
          onValue(categoriesRef, (snapshot) => {
            const data = snapshot.val();
      
            if (data) {
         
              setDataFinal({
                        image:data.image,
                        title:data.title,
                        desc:data.description
              });
           
            }
          });
        }, []);
  return (
    <>

      {/*CardInfor */}
    {dataFinal?(<>
        <CardInfo
        image={dataFinal.image}
        title={dataFinal.title}
        desc={dataFinal.desc}
      />
    </>):(<>Loading...</>)}
     
      {/*End CardInfor */}
    </>
  );
}
