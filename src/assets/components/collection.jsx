
const data = [
  {
    title : "Akaji",
    imgCount : 114,
    img : "https://img3.thuthuatphanmem.vn/uploads/2019/06/13/anh-nen-anime-cho-may-tinh-dep_095239016.jpg",
    img2 : "https://i.ytimg.com/vi/TYctEniBJt4/maxresdefault.jpg",
    img3 : "https://i.ytimg.com/vi/9ghyzT0n0FA/maxresdefault.jpg",
    img4 : "https://embed.pixiv.net/artwork.php?illust_id=106077715"
  } ,
  {
    title : "Nokirimo",
    imgCount : 40,
    img : "https://th.bing.com/th/id/OIP.-LLriLa_bYruN9C2Hi79wwHaD4?w=1200&h=630&rs=1&pid=ImgDetMain",
    img2 : "https://th.bing.com/th/id/OIP.QO7IhDr6DL7v7BOlOPPsdQHaEK?w=1500&h=844&rs=1&pid=ImgDetMain",
    img3 : "https://i.ytimg.com/vi/sQ0OiFgSzK0/maxresdefault.jpg",
    img4 : "https://4.bp.blogspot.com/-fbIRos-RgUc/XWtyMUG9WOI/AAAAAAAAMos/1gm0gqFFp5YYiXmeonWGwf2-4j9wFdaWgCLcBGAs/w914-h514-p-k-no-nu/anime-girl-katana-pink-hair-yae-sakura-honkai-impact-3rd-uhdpaper.com-4K-4.510-wp.thumbnail.jpg"
  },
  {
    title : "Kitachiwa",
    imgCount : 89,
    img : "https://th.bing.com/th/id/OIP.jNkARvvG76BTq1xUFMZRgQHaEK?w=1280&h=720&rs=1&pid=ImgDetMain",
    img2 : "https://rare-gallery.com/resol/2560x1440/392879-bianca-punishing-gray-raven-game-4k-pc-wallpaper.jpg",
    img3 : "https://i.ytimg.com/vi/NnCJsXn97z8/maxresdefault.jpg",
    img4 : "https://i.ytimg.com/vi/bDQKUoBGBiI/maxresdefault.jpg"
  }
]
const data2 = ["Home", "Explore", "Setting", "About Us", "Person"]

export default function Collection() {
  return <div className="bg-slate-200 p-6 w-full">
      <h1 className="text-medium font-serif text-2xl">Popular Collections</h1>
      <div className="mt-4 space-x-1">
        {data2.map(item => (
          <a className="px-4 py-2 bg-[#fff] rounded-md font-medium cursor-pointer my-4" key={item}>{item}</a>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-3 mt-10 ">
          {data.map(item => (
            <div key={item} className=" bg-white p-5 rounded-lg">
              <div><img className="rounded-lg w-full object-cover aspect-video" src={item.img} /></div>
              <div className="grid grid-cols-3 mt-4 gap-3">
                 <img src={item.img2} className=" rounded-md" />
                 <img src={item.img3} className=" rounded-md"/>
                 <img src={item.img4} className=" rounded-md"/>
              </div>
              <div className="flex mt-2">
                 <p className="font-medium grow">{item.title}</p>
                 <p className="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                   <p>{item.imgCount}</p> 
                 </p>
              </div>
            </div>
          ))}
      </div>
  </div>
}