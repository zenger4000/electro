export default function ElectroExcellence({ele}) {
  return (
    <div>     
<div className={` absolute -top-1  w-5 h-6 text-center text-white text-[10px] font-extrabold  shadow-sm
                before:content-[''] before:absolute before:left-0 before:-bottom-[10px] before:border-[10px] before:border-solid before:border-b-transparent
                ${ele==="K"?"right-2 bg-[#e22c37] before:border-[#e22c37]" 
                : ele==="Na"?"right-8 bg-[#9d51cd] before:border-[#9d51cd]" 
                : ele==="Mg"?"right-14 bg-[#6ae75e] before:border-[#6ae75e]" 
                : ele==="Ca"?"right-[80px] bg-[#f2dad7] before:border-[#f2dad7]" : ""}
                
                `}>
    {ele}
</div>

    </div>
  )
}
