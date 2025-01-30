import React from 'react'
import styles from '../../styles/button.module.css'

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className,
  ...props 
}) {
  return (
    <button 
      className={`${styles.button} ${styles[variant]} ${size === 'large' ? styles.large : ''} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

