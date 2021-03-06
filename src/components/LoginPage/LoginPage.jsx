import React from 'react'
import CoverImage from '../assets/coverImage.png'
import Button from '../GenericComponents/Button'
import './login.scss'

const LoginPage = () => {
  return (
        <div className='template center-column-between login'>
            <img 
                className='cover-img'
                src={ CoverImage }
                alt='Ilustración 3d de una persona con auriculares y una computadora en sus piernas' 
            />
            <article className='text-center'>
                <h1>Nice Episode</h1>
                <p className='body-font-lg'>
                    Organize, rank and share your favorite podcast episodes or discover new ones!
                </p>
            </article>
            <a 
                className='link-btn' 
                href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`}
            >
                <Button text='Login with Spotify' />
            </a>
        </div>
    )
}

export default LoginPage
