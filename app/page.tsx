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
      <div className = "flex flex-row items-center justify-center py gap-4">
      <button className="px-8 border border-solid border-black rounded-xl shadow-lg py-2 px-20">   
      <Image src="/images/image 7.png" alt="LiveDocs" width={40} height={40} />
        Live Docs
        </button>
      <button className="px-8 border border-solid border-black rounded-xl shadow-lg py-2 px-20">
      <Image src="/images/image 5.png" alt="LiveSync" width={40} height={40} />
        Live Sync
        </button>
      </div>  
      <div className="py-4 flex flex-col items-center justify-center">
      <p>Discover what’s possible with LiveDocs.</p>
      <ChevronDown size={25} />
      </div>
      <div className = "flex flex-row items-center justify-center py">
        <Image src="/images/image 14.png" alt="LiveDocs Logo" width={400} height={450} />
        <div className = "flex flex-col items-center justify-center ">
        <h1 className = "sans-serif text-3xl">Real-Time Editing</h1>
        <p className = "text-center text-balance">Experience seamless collaboration with real-time editing, allowing your team to work together simultaneously and see updates instantly as they happen.</p>
        </div>  
      </div>
      <div className = "flex flex-reverse items-center justify-center py">
        <Image src="/images/image 9.png" alt="LiveDocs Logo" width={400} height={450} />
        <div className = "flex flex-col items-center justify-center ">
        <h1 className = "sans-serif text-3xl">Real-Time Editing</h1>
        <p className = "text-center text-balance">Experience seamless collaboration with real-time editing, allowing your team to work together simultaneously and see updates instantly as they happen.</p>
        </div>  
      </div>
      <div className = "flex flex-row items-center justify-center py">
        <Image src="/images/image 10.png" alt="LiveDocs Logo" width={400} height={450} />
        <div className = "flex flex-col items-center justify-center ">
        <h1 className = "sans-serif text-3xl">Real-Time Editing</h1>
        <p className = "text-center text-balance">Experience seamless collaboration with real-time editing, allowing your team to work together simultaneously and see updates instantly as they happen.</p>
        </div>  
      </div>
      <div className = "flex flex-row items-center justify-center py">
        <Image src="/images/image 11.png" alt="LiveDocs Logo" width={400} height={450} />
        <div className = "flex flex-col items-center justify-center ">
        <h1 className = "sans-serif text-3xl">Real-Time Editing</h1>
        <p className = "text-center text-balance">Experience seamless collaboration with real-time editing, allowing your team to work together simultaneously and see updates instantly as they happen.</p>
        </div>  
      </div>
    </div>  
  )
}

export default page