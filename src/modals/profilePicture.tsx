import { useSelector } from "react-redux";
import { Button } from "../components/button"
import { useAppDispatch } from "../redux/hooks"
import { disableModal } from "../redux/modalsSlice";
import { BaseModal } from "./baseModal"
import type { RootState } from "../redux/store";
import { FileInput } from "../components/input";
import {z} from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorText } from "../components/texts";
import { toast } from "react-toastify";
import { unwrapResult } from "@reduxjs/toolkit";
import { fetchMe, UpdateProfilePicture } from "../requests/userRequests";
import { useTranslation } from "react-i18next";

const schema = z.object({
  file: z
    .instanceof(FileList)
    .refine(files => files.length === 1, "Select one file")
})

type FormProps = z.infer<typeof schema>

export const ProfilePictureModal = () => {
    const dispatch = useAppDispatch();
    const modal = useSelector((state: RootState) => state.modals.profilePicture)
    const Mode = useSelector((state: RootState) => state.users.currentUser.mode)
    const {t} = useTranslation();

    const {
        register,
        reset,
        handleSubmit,
        formState: {errors},
    } = useForm<FormProps>({
        resolver: zodResolver(schema)
    })

    if (!modal) {
        return null;
    }

    const OnSubmit = async(data: FormProps) => {
        try {
            await dispatch(UpdateProfilePicture(data.file[0])).then(unwrapResult);
            toast.success('Profile picture Updated!');
            reset();
            dispatch(disableModal('profilePicture'));
            dispatch(fetchMe())
        } catch (error: any){
            toast.error(error);
        }
    }

    return (
        <BaseModal title={t('changeProfilePicture.title')}>
            <form onSubmit={handleSubmit(OnSubmit)}>  
                <FileInput type="file" Mode={Mode}
                    {...register('file')}
                />

                {errors.file && <ErrorText>{errors.file.message}</ErrorText>}
                <div>
                    <Button variant="secondary" onClick={() => {
                        dispatch(disableModal('profilePicture'))
                    }}>{t('changeProfilePicture.cancel')}</Button>
                    <Button type="submit">{t('changeProfilePicture.change')}</Button>
                </div>
            </form>
        </BaseModal>
    )
}