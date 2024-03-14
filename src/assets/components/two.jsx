import data from './data'
import Item from './item2'
export default function Joblist () {
  return <div className='p-16 rounded-md bg-slate-50 w-[40rem]'>
       <div className='flex items-center gap-2 '>
         <div className='relative border-slate-200 border-2 grow-1 rounded-md'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute top-3.5 left-2.5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
         </svg>
           <input type='search' className='py-3 px-5 pl-10 rounded-xl outline-none' placeholder='Search' />
         </div>
         <button className='px-4 py-2 rounded-lg bg-sky-400 shadow-md shadow-sky-300 opacity-70
          hover:opacity-100 hover:text-yellow-50 font-[600]'>Use Map</button>
       </div>
       <div className='mt-5 grid grid-cols-4 gap-2 '>
          {data.map((item,key) => (
             <Item title={item.tittle} bgclass={item.bgclass} icon={item.icon} key={key} />
          ))}
       </div>
  </div>
} 