import { useState } from 'react'
import styles from './Button.module.css'

import { Modal } from './Modal'

export function Button() {
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal)
    }
    

    return (
        <>
            <button className={styles.btn} type="button" onClick={handleModal}>Sign In</button>
            {showModal && <Modal />}
        </>
         
    )
}