import styles from './Form.module.css'

import { AiFillEye } from "react-icons/ai"
import { AiFillEyeInvisible } from "react-icons/ai";

import { Input } from './Input'
import { Button } from './Button'
import { useState } from 'react';

export function Form() {

    const [isShow, setIsShow] = useState(false)

    const handlePassword = () => {
        setIsShow(!isShow)
    }
    
    return (
        <form>
            <fieldset name="signin">
                <label for='input_email'>Email</label>
                <Input id='input_email' type='text' placeholder='Insira seu email' required />

                <div>
                    <label for="input_password">Senha</label>
                    <a href='/'>Esqueceu a senha?</a>
                </div>
                <div className={styles.container_password}>
                <Input type={isShow ? "text" : "password"} placeholder='Insira sua senha' id="input_password"/>
                    <button type="button" onClick={handlePassword}>
                        {isShow && <AiFillEyeInvisible />}
                        {!isShow && <AiFillEye />}       
                    </button>
                </div>  
            </fieldset>
            <Button for="signin"/>
        </form>
    )
}