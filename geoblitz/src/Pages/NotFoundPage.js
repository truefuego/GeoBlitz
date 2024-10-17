import React from 'react'
import NotFoundPageImage from '../assets/pageimages/not-found-image.jpeg';

const NotFoundPage = () => {
  return (
    <div >
        <img src={NotFoundPageImage} alt='' />
        <div>
            <p>404</p>
            <p>Page not found</p>
            <p>Sorry, we couldn't find the page you're looking for.</p>
            <div>
                {'<-'} Back to home
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage