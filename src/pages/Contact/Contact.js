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
            <div className="absolute inset-0 mobile:h-[90vh] m-auto h-full w-full flex justify-center items-center">
                <Marquee text={contact} styles={'bg-glow text-ventura h-16 sm:h-20 lg:h-24 2xl:h-28'} />
                <ContactForm />
            </div>

        </StyledSection>
    )
}


/**
 * End of Contact Component
 */