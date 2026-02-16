import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { z } from 'zod'
import { useAppDispatch } from "../redux/hooks"
import { SearchEvent } from "../requests/searchRequest"
import { unwrapResult } from "@reduxjs/toolkit"
import { clearSearched, search_content } from "../redux/eventsSlice"

const StyledBar = styled.input`
    background-color: #D9D9D9;
    border: 0;
    padding: 0.5rem;
    border-radius: 0.75rem;
    font-size: 1.25rem;
    font-weight: 600;
    width: 35rem;
`

const schema = z.object({
    text: z.string()
})

type FormFields = z.infer<typeof schema>

export const SearchBar = () => {
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormFields>({
        resolver: zodResolver(schema)
    })

    const OnSubmit = (data: FormFields) => {
        dispatch(clearSearched());
        dispatch(search_content(data.text))
        dispatch(SearchEvent(data.text)).then(unwrapResult)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(OnSubmit)}>
            <StyledBar
                {...register('text')}
            />
        </form>

    )
}