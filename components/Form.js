import { TextInput, Button, Textarea } from '@mantine/core'
import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMsg = (e) => {
        setMsg(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.table(name, email)

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                access_key: '75b533ac-4059-4ba9-9f12-759e2d1994bc',
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value
            })
        })
        const result = await response.json()
        if (result.success) {
            console.log(result)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} id='form'>
                <TextInput label='Name' placeholder='Name' name='name' type='text' value={name} onChange={handleName} />
                <TextInput
                    label='Email'
                    placeholder='Email'
                    name='email'
                    type='text'
                    value={email}
                    onChange={handleEmail}
                    required
                />
                <Textarea
                    placeholder='Your comment'
                    label='Your comment'
                    name='message'
                    value={msg}
                    onChange={handleMsg}
                    required
                />
                <Button type='submit'>Submit</Button>
            </form>
        </>
    )
}

export default Form
