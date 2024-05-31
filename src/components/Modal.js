import styles from './Modal.module.css'

export function Modal() {
    return (
        <dialog className={styles.modal}>
            <h1><span>Sign in </span>realizado com sucesso!</h1>
            <button>Ok</button>
        </dialog>
    )
}