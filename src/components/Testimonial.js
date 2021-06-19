import React from 'react'

const Testimonial = ({testimonial}) => {
    return (
        <div className="testimonial">
            <img className="userPicture" src={testimonial.picture} alt={testimonial.user || "user"}/>
            <div className="userFeedback">
                <p>{testimonial.feedback}</p>
            </div>
            <div className="userName">
                <strong>{testimonial.user}</strong>
            </div>
            <div className="userRole">
                <strong>{testimonial.role}</strong>
            </div>
        </div>
    )
}

export default Testimonial