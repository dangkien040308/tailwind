import Input from "./input"
import Review from "./Review"
export default function Form(){
  return <div className="bg-white p-12 space-y-8 w-[42rem]">
     <div className=" font-bold text-2xl">Overall Rating</div>
    <div>
      <Review />
      <div className="mt-2 text-sm">Click to rate</div>
    </div>
    <Input placeholder="Example : Easy to use" title="Review" type="input" />
    <div>
      <div className="text-xl font-bold mb-5">Would you recommend this product to a friend ?</div>
      <div className="flex gap-3">
        <div>
          <input 
          type="radio"
          name="product"
          id="Yes"
          className="mr-1 scale-125 cursor-pointer" />
          <label htmlFor="Yes" className="cursor-pointer">Yes</label>
        </div>
        <div>
        <input 
          type="radio"
          name="product"
          id="No"
          className="mr-1 scale-125 cursor-pointer" />
          <label htmlFor="No" className="cursor-pointer">No</label>
        </div>
        
      </div>
    </div>
    <Input title="Product review" placeholder="Example : Since I bought this a month ago , it has been use a lot . What I like the best/ What is worst about this product is ..." type="textarea" />

    <div className="flex gap-2 w-full">
      <div className="grow">
         <Input title="Nickname" placeholder="Example kwd243" type="input" />
      </div>
      <div className="grow">
         <Input title="Email address (will not be published)" placeholder="Example : youremail@gmail.com" type="input" />
      </div>  
    </div>

    <div>
      <input type="radio"
          id="accept"
          className="mr-1 scale-125 cursor-pointer" 
      ></input>
      <label htmlFor="accept" className="cursor-pointer" >I accept the terms and conditions</label>

      <div className="mt-2 text-sm font-medium">You will be able to receive emails in connection with this review (eg if others comment on your review). All emails contain the option to unsubcribe. We can use the text and star rating from your review in other marketing</div>
      
    </div>
    <button className="px-4 py-2 bg-gray-800 rounded-md text-xl text-white">Submit I understand</button>
    
  
  </div>
}