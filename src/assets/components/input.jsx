export default function Input({ type, placeholder, title }){
  return <div>
    {type === "input" && 
    <div> 
    <div className="font-[700] font-sans mb-1">
      {title}
    </div>
    <div>
      <input 
      className="py-2 px-3 
      border-2 
      outline-none
      rounded-md
      border-zinc-300 w-full" placeholder={placeholder} />
    </div>
   </div>  }

   { type === "textarea" &&
   <div> 
      <div className="font-[700] font-sans mb-1">
        {title}
      </div>
      <div>
        <textarea 
        className="py-2 px-3 
        border-2 
        outline-none
        rounded-md
        border-zinc-300 w-full" placeholder={placeholder} />
      </div>
     </div>  }

  </div>
}