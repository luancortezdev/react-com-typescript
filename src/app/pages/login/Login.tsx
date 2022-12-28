import { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleEntrar = () => {
        console.log('email:', email)
        console.log('senha:', senha)
    }

    return (
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input value={email} onChange={event => setEmail(event.target.value)} />
                </label>
                <br />
                <label>
                    <span>Senha</span>
                    <input type="password" onChange={event => setSenha(event.target.value)} />
                </label>
                <br />
                <button onClick={handleEntrar} type="button">
                    Entrar
                </button>
            </form>
        </div>
    )
}