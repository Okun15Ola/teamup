import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;   
  onClick?: () => void;
  type?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}


const Button: React.FC<ButtonProps> = ({
    text,
    type = 'primary',
    onClick,
    size = 'md',
    icon,
}) => {
  return (
    <button 
    onClick={onClick}
    className={styles.pillButton + ' ' + styles[type] + ' ' + styles[size]}
    >
          {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button>
  )
}

export default Button