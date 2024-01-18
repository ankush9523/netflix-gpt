import React from 'react'


function GptSearchBox(lang) {
  return (
    <div className='pt-[15%]'>
     
      {
        lang 
        ?
        <>
        <form   onSubmit={(e) => e.preventDefault()} className='bg-black w-6/12 mx-[25%] flex flex-row absolute'> 
         <input  className='m-3 basis-9/12 rounded-md p-3' type='text' placeholder={languageList.en.gptSearchPlaceholder}/>
        <button className=' basis-3/12 bg-red-600 text-white font-bold p-3 m-3 rounded-md'>{languageList.en.gptSearch}</button>
       </form>
       </>
       :
       null
       }
    </div>
  )
}

export default GptSearchBox;