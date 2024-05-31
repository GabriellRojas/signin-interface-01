import styles from './LoginType.module.css'

export function LoginType() {
    // function selected() {
    //     let button = document.getElementsByClassName('btn1')
    //     button.classList.add('button_selected')
    // }

    return (
        <div className={styles.login_type}>
            <button className={styles.btn1}>Pessoal</button>
            <button className={styles.btn2}>Time</button>
        </div>
    )
}