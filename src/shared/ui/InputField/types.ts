export interface Props{
    showSearch?: boolean,
    showLabel?: boolean,
    labelIcon?: boolean,
    labelText: string,
    placeholder?: string,
    state?: 'error' | 'disabled',
    caption?: string
}