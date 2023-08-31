import styles from './button.module.css'

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    color: 'white' | 'peach'
    disabled?: boolean
}

export default function Button({
    color,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[color]}`}
            disabled={disabled}
            {...props}
        >

            {props.children}

        </button>
    )
}