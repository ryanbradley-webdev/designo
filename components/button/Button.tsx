import styles from './button.module.css'

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    color: 'white' | 'peach'
}

export default function Button({
    color,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[color]}`}
            {...props}
        >

            {props.children}

        </button>
    )
}