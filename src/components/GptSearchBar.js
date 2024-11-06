import React from 'react'
import { useTranslation } from 'react-i18next'

const GptSearchBar = () => {

    const {t} = useTranslation();

  return (
    <div className='pt-[10%] flex justify-center'>
       
      <form className='w-1/2 grid grid-cols-12 bg-black' onSubmit={(e) => e.preventDefault()}>
        <input className="m-4 p-4 col-span-9 rounded-sm"type='textbox' placeholder={t("gpt.placeholderText")}></input>
        <button className='m-4 bg-red-700 rounded-lg col-span-3'>{t("gpt.search")}</button>
      </form>
    </div>
  )
}

export default GptSearchBar