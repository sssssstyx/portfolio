/**
 * @Description ContactForm Component
 * @author Shy
 * @date 29.09.2022
 */

import React from 'react'
import tw from 'tailwind-styled-components'

export default function ContactForm () {
    /* sentences define here */
    const askName = "Your name?"
    const askEmail = "Your e-mail?"
    const askMessage = "Leave some messages or comments here..."
    
    return (
        <StyledFormArea>
            <form action="https://formspree.io/f/xaykjwrv"
                  method="POST"
                  className="flex flex-col gap-6"
            >
                <StyledInput type="text"
                             name="username"
                             required
                             placeholder={askName}
                />
                <StyledInput type="text"
                             name="email"
                             required
                             placeholder={askEmail}
                />
                <StyledInput $as="textarea" styles={'hsm:h-[160px]'}
                             name="message"
                             required
                             placeholder={askMessage}
                             rows="10"
                />
                <StyledButton type="submit">Contact Me</StyledButton>
            </form>
        </StyledFormArea>
    )
}

const StyledFormArea = tw.div`
    absolute
    bg-transparent
    w-2/3 max-w-lg min-w-[260px]
    p-5 mt-20 2xl:mt-36
    rounded-2xl
    shadow-2xl
`

const StyledInput = tw.input`
    ${p => p.styles}
    antialiased
    bg-transparent
    p-2
    placeholder:text-glow/70
    border-2
    rounded-lg
    focus:outline-none
`

const StyledButton = tw.button`
    antialiased
    bg-ventura
    px-6 py-3 mx-auto
    rounded-lg
    hover:scale-105 duration-300
`
/**
 * End of ContactForm Component
 */