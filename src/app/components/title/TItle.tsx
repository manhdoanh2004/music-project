export default function Title(props:{
    text:String,
    classname?:String
 })
{
    const {text,classname = " "}=props;
    return(
        <>
         <div className={`font-[700] text-[24px] text-[#EFEEE0] mb-[20px]  ${classname}`}>
        {text}
         </div>
         </>
    )
}