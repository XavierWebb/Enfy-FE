import styled from "styled-components";

export const TextInput = styled.input`
    width: 100%;
    padding: 1rem;
    background-color: #282828;
    border-radius: 0.5rem;
    color: white;
    border: 0px;
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
            type="datetime-local"
            value={parsedValue}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
        />
    );
};