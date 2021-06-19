import React from 'react'
import Testimonial from './Testimonial';
import {testimonials} from '../data';

const Testimonials = () => {
    return (
        <section className="testimonialsSection" id="about">
            <div className="testimonialsSectionHeading">
                <h3>Client testimonials</h3>
            </div>
            <div className="testimonialsGrid">
                {
                    testimonials.map(testimonial => {
                        return <Testimonial key={testimonial.user} testimonial={testimonial}/>
                    })
                }
            </div>
        </section>
    )
}

export default Testimonials
