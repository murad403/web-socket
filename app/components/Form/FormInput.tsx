"use client"
import { useFormContext } from 'react-hook-form'

type TProps ={
    type: string;
    name: string;
}

const FormInput = ({type, name}: TProps) => {
    const {register} = useFormContext();
  return (
    <>
      <input type={type} className='py-2 px-4 outline-none border border-blue-500 appearance-none' {...register(name)}/>
    </>
  )
}

export default FormInput
