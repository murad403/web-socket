"use client";
import { ReactNode } from 'react';
import { FieldValue, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type TProps = {
    onSubmit: SubmitHandler<any>;
    children: ReactNode;
}

const FormHandle = ({ onSubmit, children }: TProps) => {
    const methods = useForm();
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {
                    children
                }
            </form>
        </FormProvider>
    )
}

export default FormHandle
