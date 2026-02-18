export const formatUTCDate = (date: Date | string) => {
    const d = new Date(date);

    const day = String(d.getUTCDate()).padStart(2, '0');
    const month = String(d.getUTCMonth() + 1).padStart(2, '0');
    const year = String(d.getUTCFullYear()).slice(-2);
    const hours = String(d.getUTCHours()).padStart(2, '0');
    const minutes = String(d.getUTCMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} at ${hours}:${minutes} UTC`;
};
