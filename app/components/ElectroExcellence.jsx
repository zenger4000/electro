export default function ElectroExcellence({ele}) {
  return (
    <div>     
<div className={`relative w-5 h-6 text-center text-white text-[10px] font-extrabold drop-shadow-md
                before:content-[''] before:absolute before:left-0 before:-bottom-[10px] before:border-[10px] before:border-solid before:border-b-transparent
                ${ele==="K"?" bg-[#e22c37] before:border-[#e22c37]" 
                : ele==="Na"?" bg-[#9d51cd] before:border-[#9d51cd]" 
                : ele==="Mg"?" bg-[#6ae75e] before:border-[#6ae75e]" 
                : ele==="Ca"?" bg-[#e6cac6] before:border-[#e6cac6]" : ""}
                
                `}>
    <span className="drop-shadow">
      {ele}
    </span>
</div>

    </div>
  )
}
