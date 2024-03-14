const data = [
  {
    logo : <svg className="w-8 h-8 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/></svg>,
    name : 'Twitter',
    author : 'Elon Musk',
    user : '1.2B',
  } ,
  {
    logo : <svg className="w-8 h-8 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">    <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/></svg>,
    name : 'Twitter',
    author : 'Elon Musk',
    user : '1.2B',
  } ,
  {
    logo : <svg className="w-8 h-8 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z"/></svg> ,
    name : 'Twitter',
    author : 'Elon Musk',
    user : '1.2B',
  } ,
]

export default function Subcription(){
  return <div className="w-[50rem] p-12 bg-slate-100 space-y-8">
    <div> 
      <div className="text-2xl font-black font-mono [text-wrap:balance] text-center">
          Get the most out of your mobile with the right subcription
        </div>
        <div className="text-md font-normal [text-wrap:balance] text-center mt-4">
          All devices come with free delivery or pickup as standard. See information on availble shopping options for your location.
        </div>
    </div>
    <div className="grid grid-cols-3 gap-4">
      {data.map(item => (
        <div className="p-5 rounded-md shadow-lg bg-zinc-100" key={item.name}>
          <div className="text-right ">{item.logo}</div>
          <div className="font-mono text-2xl font-[900]">{item.name}</div>
          <div className="text-lg italic py-2 px-1 font-[600] ">{item.author}</div>
          <div className="text-sm mb-4">{item.user} users</div>
          <button className="px-3 py-2 text-white rounded-md bg-emerald-800">Add subcription</button>
        </div>
      ))}
    </div>
    <div className="flex items-center justify-center"> 
        <button className='px-4 py-2 rounded-lg bg-sky-400 shadow-md shadow-sky-300
              hover:opacity-100 hover:text-yellow-50 font-[600]'>See All Subcriptions</button>
    </div>
  
      

  </div>
}