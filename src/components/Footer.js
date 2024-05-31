import styles from './Footer.module.css'
import { FaHeart } from 'react-icons/fa'

export function Footer() {
    return (
        <footer>
            <div className={styles.container1}>
                <span>Não possui uma conta ainda?</span>
                <button>Cadastre-se</button> 
            </div>
            <div className={styles.container2}>
                <p>Desenvolvido por &nbsp;<span>Gabriel Rojas</span>&nbsp;&nbsp;<FaHeart className={styles.icon_heart} /></p>
            </div>    
        </footer>
    )
}