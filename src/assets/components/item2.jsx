// eslint-disable-next-line react/prop-types
export default function Item({ title, icon, bgclass }) {
  return <div  className={`flex flex-col p-4 items-center rounded-md ${bgclass} `}>
       {icon}
      <p className='pt-4 font-mono font-[500]'>{title}</p> 
  </div>
}