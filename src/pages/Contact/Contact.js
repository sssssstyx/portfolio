/**
 * @Description Contact Component
 * @author Shy
 * @date 22.09.2022
 */

import React from 'react'
import StyledSection from '../../assets/StyledSection'
import Marquee from '../../features/marquee/Marquee'
import ContactForm from './ContactForm'

export default function Contact () {
    /* scrolling words define here */
    const contact = "Contact"
   
    return (
        <StyledSection bg={'bg-dim'}>
            <div className=""></div>
            <Marquee text={contact} styles={'bg-glow text-ventura h-16 sm:h-20 lg:h-24 2xl:h-28 '} />
            <ContactForm />
        </StyledSection>
    )
}


/**
 * End of Contact Component
 */