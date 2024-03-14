import {useState} from 'react'
export default function Notification() {
  const [show,setShow] = useState(false)
  return <div className="p-5 w-[42rem]">
    <div className="text-right mb-7">
        <button className="p-4 bg-green-300 rounded-full" onClick={() => setShow(!show)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="w-10 h-10 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
        </button>
    </div>
    <div className={`w-[42rem] p-7 bg-white rounded-lg transition-all duration-300 ${show ? 'opacity-100' : 'opacity-0' }`}>
      <div className="font-bold font-mono">You have notifications</div>
      <div className="flex gap-5 items-center">
         <div className="flex items-center justify-center bg-red-300 mt-3 text-red-400 p-3 rounded-md">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
         </div>
         <div className="flex flex-col">
           <h1 className="font-semibold text-xl font-mono">March 14</h1>
           <p className="font-sm font-normal">Do what you love and enjoy it ... !</p>
         </div>
      </div>

      <div className="flex gap-4 mt-7 justify-center">
      <button className="flex items-center rounded-full py-1 px-3 border-2 border-red-300 hover:bg-red-200">
          <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
          </svg>
          Twitter
       </button>
       <button className="flex items-center rounded-full py-1 px-3 border-2 border-red-300 hover:bg-red-200" >
         <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
         </svg>
           Facebook
       </button>
    </div>
    </div>
   
    
  </div>
}