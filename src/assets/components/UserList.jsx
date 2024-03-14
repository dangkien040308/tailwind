import { useState } from "react"

const data = [
  {
    name : 'John Denny' ,
    job : 'Back-end Developer',
    tags : ["Mongodb" , "Nodejs", "C#"] ,
    img : "https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?rs=1&pid=ImgDetMain"
  },
  {
    name : 'Ken Dang' ,
    job : 'Fullstack Developer',
    tags : ["Ruby" , "Linux", "ReactJS"],
    img : "https://th.bing.com/th/id/OIP.WsRN6X2LdjE6pe98SN6kzgDMEy?w=115&h=180&c=7&r=0&o=5&cb=11&dpr=1.1&pid=1.7" 
  },
  {
    name : 'Trung Dang' ,
    job : 'Artist',
    tags : ["Paint","Game"] ,
    img : "https://th.bing.com/th/id/OIP.VPw3frSBAat4gcHKif7rrwHaJy?w=151&h=200&c=7&r=0&o=5&cb=11&dpr=1.1&pid=1.7"
  },
  {
    name : 'John Peter' ,
    job : 'Streamer',
    tags : ["CSSGO" , "HTMLOL", "PC"] ,
    img : "https://th.bing.com/th/id/OIP.snRAPxsdXSyJB0UMkAeKFQHaFj?w=251&h=188&c=7&r=0&o=5&cb=11&dpr=1.1&pid=1.7"
  },
  {
    name : 'Viet Trung' ,
    job : 'Chef',
    tags : ["Pan" , "Cook"] ,
    img : "https://th.bing.com/th/id/OIP.umfOnnlU1WyPddLlAHAGnQHaLH?pid=ImgDet&w=193&h=289&c=7&dpr=1.1"
  },
  {
    name : 'Cristiano Messi' ,
    job : 'Footballer',
    tags : ["Barcelona" , "Real Marid" , "Man United","Man City"] ,
    img : "https://th.bing.com/th/id/OIP.Nv5LWbi1MRYuzA-HU4pENwHaLH?w=186&h=279&c=7&r=0&o=5&cb=11&dpr=1.1&pid=1.7"
  }
]
export default function UserList(){
  const [query,setQuery] = useState('')
  const filterUser = data.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase())
  })
   return <div className="p-10 bg-white w-[72rem]">
       <div className="text-2xl font-bold font-mono">Users</div>
       <div className='relative grow-1 border-2 mt-4 border-slate-200 rounded-md'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-2 left-2.5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
           <input type='search' onChange={(e) => setQuery(e.target.value)} className='py-2 px-4 pl-10 rounded-xl outline-none bg-transparent' placeholder='Search' />
        </div>
        <div className="flex gap-2 mt-4">
          {['Home','Explore','About Us','Setting','Control'].map(item => (
             <div key={item} 
             className="cursor-pointer hover:bg-emerald-500 px-3 py-2 rounded-md bg-slate-200 font-medium"
             >{item}</div>
          ))}
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 space-y-7 mt-8">
          {filterUser.map(item => (
            <div key={item.name} className="flex items-center gap-6 bg-[#FBFCFF] p-4 rounded-lg shadow-lg">
               <div>
                 <img src={item.img} className="rounded-full h-24 w-24 object-cover" />
               </div>
               <div>
                 <div className="text-xl font-bold font-mono"> {item.name} </div>
                 <div className="font-medium text-sm"> {item.job} </div>
                 <div className="mt-4 text-xs flex flex-wrap"> {item.tags.map((i,key) => { return <span className="mt-3 px-3 py-1 rounded-full bg-stone-200 mr-1 text-blue-800 font-bold" key={key}>{i}</span>})} </div>
               </div>
            </div>
          ))}
        </div>
   </div>
}
