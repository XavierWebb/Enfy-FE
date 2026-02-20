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
    value: Date | string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    disabled?: boolean;
}) => {

    const formatDateForInputUTC = (date: Date) => {
        const pad = (n: number) => n.toString().padStart(2, "0");

        return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}T${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}`;
    };

    const parsedValue =
        value instanceof Date
            ? formatDateForInputUTC(value)
            : value
            ? formatDateForInputUTC(new Date(value))
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