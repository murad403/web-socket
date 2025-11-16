"use client";
import { ReactNode } from 'react';
import { FieldValue, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type TProps = {
    onSubmit: SubmitHandler<any>;
    children: ReactNode;
    resolver?: any;
}

type TFormConfig = {
    resolver?: any;
}

const FormHandle = ({ onSubmit, children, resolver }: TProps) => {
    const formConfig: TFormConfig = {};
    if(resolver){
        formConfig["resolver"] = resolver
    }
    const methods = useForm(formConfig);
    const submit = (data) =>{
        onSubmit(data);
        methods.reset();
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submit)}>
                {
                    children
                }
            </form>
        </FormProvider>
    )
}

export default FormHandle
