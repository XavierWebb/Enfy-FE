import { Button } from "../components/button"
import { TextInput } from "../components/input"
import { ErrorText, Text_One, Text_Two } from "../components/texts"
import { BaseModal } from "./baseModal"
import { useForm } from "react-hook-form"
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { createUser } from "../requests/userRequests"
import { useAppDispatch } from "../redux/hooks"
import { unwrapResult } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';
import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { disableModal } from "../redux/modalsSlice"
import { useState } from "react"
import styled from "styled-components"
import { Categories } from "../common/categories"

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CategoriesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Line = styled.div`
    background-color: white;
    height: 0.1rem;
    width: 100%;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
`

const schema = z.object({
    name: z.string().min(8, 'Your name needs to have 8 chars min'),
    email: z.email(),
    password: z.string().min(8, 'Your password needs to have 8 chars min'),
    categories: z.array(z.string()).min(3, 'Please choose at least 3 categories of interest to you')
})

type FormFields = z.infer<typeof schema>

export const RegisterModal = () => {
    const modal = useSelector((state: RootState) => state.modals.register)
    const dispatch = useAppDispatch();
    const [step, setStep] = useState(0)
    const CategoryList = Categories;

    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors, dirtyFields }
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
        mode: 'onChange'
    });


    const StepOneValid =
        (dirtyFields.name && !errors.name) &&
        (dirtyFields.email && !errors.email) &&
        (dirtyFields.password && !errors.password);

    const StepTwoValid = (dirtyFields.categories && !errors.categories)
    const selectedCategories = watch('categories') || [];

    const OnSubmit = async (data: FormFields) => {
        try {
            await dispatch(createUser(data)).then(unwrapResult);
            toast.success('User created!');
            dispatch(disableModal('register'));
            reset();
        } catch (e: any) {
            toast.error(e);
        }
    }

    const handleCategorySelection = async (name: string, i: number) => {

        const current = watch('categories') || [];
        const next = current.includes(name)
            ? current.filter(c => c !== name)
            : [...current, name]

        setValue('categories', next, { shouldValidate: true, shouldDirty: true, shouldTouch: true });
        CategoryList.splice(i, 1);
    }

    const handleCategoryUnselection = async (name: string) => {
        const current = watch('categories') || []
        const next = current.filter(e => e !== name);

        setValue('categories', next, { shouldValidate: true, shouldDirty: true, shouldTouch: true});
        CategoryList.push(name);
    }

    if (!modal) {
        return;
    }

    return (
        <BaseModal title="Register">
            <StyledForm onSubmit={handleSubmit(OnSubmit)}>
                {
                    step == 0 ? (
                        <>
                            <Text_One>username:</Text_One>
                            <TextInput
                                {...register('name')}
                            />
                            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

                            <Text_One>email:</Text_One>
                            <TextInput
                                {...register('email')}
                            />
                            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

                            <Text_One>password:</Text_One>
                            <TextInput
                                {...register('password')}
                            />
                            {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

                            <div>
                                <Button type='button' variant='secondary' onClick={() => {
                                    dispatch(disableModal('register'))
                                    reset()
                                }}>Cancel</Button>
                                <Button type='button' disabled={!StepOneValid} onClick={() => { setStep(1) }}>Next</Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <Line />
                            <Text_One><strong>Categories Selected:</strong></Text_One>
                            <CategoriesContainer>
                                {
                                    selectedCategories.length == 0 ? (
                                        <Text_Two>[ You haven't selected any categories yet ]</Text_Two>
                                    ) :
                                        (
                                            <>
                                                {
                                                    selectedCategories.map((e, i) => {
                                                        return (
                                                            <Button
                                                                variant='third'
                                                                type='button'
                                                                key={i}
                                                                onClick={() => { handleCategoryUnselection(e) }}
                                                            >{e}</Button>
                                                        )
                                                    })}
                                            </>
                                        )

                                }
                            </CategoriesContainer>
                            <Line />
                            <CategoriesContainer>
                                {
                                    CategoryList.length == 0 ? (
                                        <Text_Two>[ There are no more categories to select from ]</Text_Two>
                                    )
                                    : (
                                        <>
                                            {
                                                CategoryList.map((e, i) => {
                                                    return (
                                                        <Button
                                                            type="button"
                                                            variant="third"
                                                            key={i}
                                                            onClick={() => { handleCategorySelection(e, i) }}
                                                        >{e}</Button>
                                                    )
                                                })
                                            }
                                        </>
                                    )
                                }
                            </CategoriesContainer>
                            {errors.categories && <ErrorText>{errors.categories.message}</ErrorText>}
                            <div>
                                <Button type='button' variant='secondary' onClick={() => {
                                    dispatch(disableModal('register'))
                                    reset()
                                    setStep(0)
                                }}>Cancel</Button>
                                <Button disabled={!StepTwoValid} type="submit">Register</Button>
                            </div>
                        </>
                    )
                }
            </StyledForm>
        </BaseModal>
    )
}