import { useSelector } from "react-redux";
import styled from "styled-components";
import type { RootState } from "../redux/store";

export const TextInput = styled.input<{Mode: 'dark' | 'light'}>`
    width: 100%;
    padding: 1rem;
    background-color: ${({Mode}) => Mode === 'light' ? 'white': '#282828'};
    border-radius: 0.5rem;
    color: ${({Mode}) => Mode === 'light' ? '#282828': 'white'};
    border: 0.1rem solid ${({Mode}) => Mode === 'light' ? '#282828': 'white'};
`

export const FileInput = styled.input<{Mode: 'dark' | 'light'}>`
    width: 100%;
    padding: 1rem;
    background-color: ${({Mode}) => Mode === 'light' ? 'white' : '#282828'};
    border-radius: 0.5rem;
    color: ${({Mode}) => Mode === 'light' ? '#282828': 'white'};
    border: 0.1rem solid ${({Mode}) => Mode === 'light' ? '#282828': 'white'};
`



export const DateTimeInput = ({
    value,
    onChange = () => {},
    onBlur = () => {},
    disabled = false,
}: {
    value: string | Date | null | undefined;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    disabled?: boolean;
}) => {
    const Mode = useSelector((state: RootState) => state.users.currentUser.mode)

    const formatDateForInputLocal = (date: Date) => {
        const localDate = new Date(
            date.getTime() + date.getTimezoneOffset() * 60000
        );

        const pad = (n: number) => n.toString().padStart(2, "0");

        return `${localDate.getFullYear()}-${pad(localDate.getMonth() + 1)}-${pad(localDate.getDate())}T${pad(localDate.getHours())}:${pad(localDate.getMinutes())}`;
    };

    const parsedValue = value
        ? formatDateForInputLocal(new Date(value))
        : "";

    return (
        <TextInput
            Mode={Mode}
            type="datetime-local"
            value={parsedValue}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
        />
    );
};