export interface Props {
  size?: 'large' | 'small'
  type?: 'primary' | 'secondary'
  state?: 'default' | 'pressed' | 'disabled'
  icon?: '/images/icons/Verified.svg' | '/images/icons/Verified-primary.svg' | '/images/icons/Verified-grey.svg'
  iconPosition?: 'left' | 'right'
  text: string
}
