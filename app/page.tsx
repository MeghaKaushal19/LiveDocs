import React from 'react'
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const page = () => {
  return (
    <div className = "flex flex-col items-center justify-center py-2">
      <div>
      <Image src="/images/image.png" alt = "background-image" height={400} width = {450}/>
      </div>
      <h1 className= "font-Play sans-serif text-5xl">“United, we build!”</h1>
      <p className= "text-center py-3">Explore our  features and connect with others. Choose an option to get started.</p> 
      <div className = "flex flex-row items-center justify-center py">
      {/* <button className= "bg-purple-600 text-black px-4 py-2 rounded-lg ml-4">
        Live Docs
      </button>
      <button className="bg-none border-black text-black px-4 py-2 rounded-lg ml-4" >
        Live Sync
      </button> */}
      <button className="px-8 border-solid border-black   ">   

      <Image src="/images/image 7.png" alt="LiveDocs Logo" width={40} height={40} />
        Live Docs
        </button>
      <button className="px-8 border-solid border-black">
      <Image src="/images/image 5.png" alt="LiveDocs Logo" width={40} height={40} />
        Live Sync
        </button>
      </div>  
      <div className="py-4 flex flex-col items-center justify-center">
      <p>Discover what’s possible with LiveDocs.</p>
      <ChevronDown size={25} />
      </div>
    </div>
  )
}

export default page