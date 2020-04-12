import React, { useState, useEffect } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

import api from '../../services/api'

export default function Logon() {
    const [id, setId] = useState('')
    const history= useHistory()

    async function handleLogin(e){
        e.preventDefault()

        try{

            console.log(id)

            const response = await api.post('sessions', { id })

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
            
        }catch (err){
            alert('Login Failed. Please try again.' + err)
        }

    }


    useEffect(() => {
        const script = document.createElement("script")

        script.src = "./bootstrap.js"
        script.async = true;
        
        document.body.appendChild(script)
        console.log('heheh')
    }, [])

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Sign in</h1>

                    <input 
                        placeholder='Your ID'
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type='submit'>Login</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Sign up
                    </Link>

                </form>

            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}