"use client"
import FormHandle from '../components/Form/FormHandle'
import FormInput from '../components/Form/FormInput';

const Page = () => {
  const onsubmit = (data: {name: string}) =>{
    console.log(data);
  }
  return (
    <FormHandle onSubmit={onsubmit}>
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
