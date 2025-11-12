"use client"
import { Controller, useFormContext } from 'react-hook-form'

type TProps = {
    type: string;
    name: string;
    label: string;
}

const FormInput = ({ type, name, label }: TProps) => {
    const { control, register } = useFormContext();
    return (
        <>
            <label>{label ? label : null}</label>
            <Controller control={control} name={name} render={({ field, fieldState: { error } }) => (
                <input {...field} type={type} id={name} className='py-2 px-4 outline-none border border-blue-500 appearance-none' />
                
    )} />
            {/* <input type={type} className='py-2 px-4 outline-none border border-blue-500 appearance-none' {...register(name)}/> */}
        </>
    )
}

export default FormInput
