"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import FormHandle from '../components/Form/FormHandle'
import FormInput from '../components/Form/FormInput';
import { z } from 'zod';

const Page = () => {
  const onsubmit = (data: { name: string }) => {
    console.log(data);
  }

  const loginShema = z.object({
    name: z.string({error: "This field is required"})
  })

  return (  
    <FormHandle onSubmit={onsubmit} resolver={zodResolver(loginShema)}>
      <div>
        <FormInput type='text' name='name' label="Name"></FormInput>
      </div>
      <div>
        <button type='submit'>Login</button>
      </div>
    </FormHandle>
  )
}

export default Page
