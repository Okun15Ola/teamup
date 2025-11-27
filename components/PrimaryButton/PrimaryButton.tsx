
import styles from './PrimaryButton.module.css'

interface PrimaryButtonProps{
    text: string;
    type: 'primary' | 'secondary'
    onClick?: () => void;
    size?: "sm" | "md" | "lg";
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    text,
    type = 'primary',
    onClick,
    size = 'md',

}) => {
  return (
    <button 
    onClick={onClick}
   className={`${styles.button} ${styles[type]}`}
    >
      {text}
    </button>
  )
}

export default PrimaryButton