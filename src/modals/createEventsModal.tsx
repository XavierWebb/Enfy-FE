import { Controller, useForm } from "react-hook-form"
import { BaseModal } from "./baseModal"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppDispatch } from "../redux/hooks"
import { createEvent } from "../requests/eventsRequest"
import { unwrapResult } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { Button } from "../components/button"
import { disableModal } from "../redux/modalsSlice"
import { DateTimeInput, TextInput } from "../components/input"
import styled from "styled-components"
import { ErrorText, Text_One } from "../components/texts"
import { useTranslation } from "react-i18next"
import { fetchMe } from "../requests/userRequests"
import { useState } from "react"
import { Categories } from "../common/categories"

const schema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number().min(5, 'The price needs to be 5 or higher'),
    eventDate: z.date(),
    ubication: z.string(),
    category: z.string(),
})

export type FormProps = z.infer<typeof schema>

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
`

const CategoriesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const CreateEventModal = () => {
    const modal = useSelector((state: RootState) => state.modals.createEvent)
    const dispatch = useAppDispatch();
    const mode = useSelector((state: RootState) => state.users.currentUser.mode)
    const [step, setStep] = useState(1)
    let CategoriesList = Categories;
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        control,
        reset,
        setValue,
        watch,
        formState: { errors, dirtyFields }
    } = useForm<FormProps>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues: {
            category: ''
        }
    })

    const StepOneIsValid =
        (dirtyFields.name && !errors.name) &&
        (dirtyFields.description && !errors.description) &&
        (dirtyFields.eventDate && !errors.eventDate) &&
        (dirtyFields.price && !errors.price) &&
        (dirtyFields.ubication && !errors.ubication)

    const StepTwoIsValid = (dirtyFields.category && !errors.category);
    const category = watch('category')
    const OnSubmit = async (data: FormProps) => {
        try {
            await dispatch(createEvent(data)).then(unwrapResult);
            toast.success('Event created successfuly');
            dispatch(disableModal('createEvent'));
            dispatch(fetchMe())
            setStep(1);
            reset();
            CategoriesList = Categories
        } catch (error: any) {
            toast.error(error);
        }
    }

    const handleCategorySelection = (category: string, i: number) => {
        setValue('category', category, { shouldValidate: true, shouldDirty: true, shouldTouch: true }),
            CategoriesList.splice(i, 1)
    }

    const handleCategoryUnselection = (category: string) => {
        setValue('category', '')
        CategoriesList.push(category)
    }

    if (!modal) {
        return null;
    }

    return (
        <BaseModal title={t('createEventModal.title')}>
            <StyledForm onSubmit={handleSubmit(OnSubmit)}>
                {
                    step === 1 ? (
                        <>
                            <TextInput
                                Mode={mode}
                                placeholder={t('createEventModal.name')}
                                {...register('name')}
                            />

                            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

                            <TextInput
                                Mode={mode}
                                placeholder={t('createEventModal.description')}
                                {...register('description')}
                            />

                            {errors.description && <ErrorText>{errors.description.message}</ErrorText>}

                            <TextInput
                                Mode={mode}
                                placeholder={t('createEventModal.price')}
                                type="number"
                                {...register('price', { valueAsNumber: true })}
                            />

                            {errors.price && <ErrorText>{errors.price.message}</ErrorText>}

                            <TextInput
                                Mode={mode}

                                placeholder={t('createEventModal.ubication')}
                                {...register('ubication')}
                            />

                            {errors.ubication && <ErrorText>{errors.ubication.message}</ErrorText>}

                            <Controller
                                name="eventDate"
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <DateTimeInput
                                        value={value}
                                        onChange={(e) => {
                                            const localValue = e.target.value;
                                            const localDate = new Date(localValue);

                                            const utcDate = new Date(
                                                localDate.getTime() - localDate.getTimezoneOffset() * 60000
                                            )
                                            onChange(utcDate);
                                        }}
                                        onBlur={onBlur}
                                    />
                                )}
                            />

                            {errors.eventDate && <ErrorText>{errors.eventDate.message}</ErrorText>}

                            <div>
                                <Button type='button' variant="secondary" onClick={() => {
                                    dispatch(disableModal('createEvent'))
                                    reset()
                                }}>{t('createEventModal.cancel')}</Button>

                                <Button type="button" disabled={!StepOneIsValid} onClick={() => {
                                    setStep(2)
                                }}>{t('createEventModal.next')}</Button>
                            </div>
                        </>
                    ) : (
                        <>
                            {
                                category == '' ? (
                                    <Text_One>{t('createEventModal.noSelected')}</Text_One>
                                ) : (
                                    <Button variant='third' type='button' onClick={() => handleCategoryUnselection(watch('category'))}>{category}</Button>
                                )
                            }
                            <CategoriesContainer>
                                <>
                                    {
                                        CategoriesList.map((e, i) => {
                                            return (
                                                <Button
                                                    disabled={!(category == '')}
                                                    type="button"
                                                    variant="third"
                                                    onClick={() => handleCategorySelection(e, i)}
                                                >{e}</Button>
                                            )
                                        })
                                    }
                                </>
                            </CategoriesContainer>

                            <div>
                                <Button type='button' variant="secondary" onClick={() => {
                                    dispatch(disableModal('createEvent'))
                                    reset()
                                    setStep(1)
                                    CategoriesList = Categories
                                }}>{t('createEventModal.cancel')}</Button>

                                <Button type="submit" disabled={!StepTwoIsValid}>{t('createEventModal.create')}</Button>
                            </div>
                        </>
                    )
                }

            </StyledForm>
        </BaseModal>
    )
}