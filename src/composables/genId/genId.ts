export const genId = () => {
    const uniqueId = Math.random().toString(36).substr(2, 9)
    return { uniqueId };
}