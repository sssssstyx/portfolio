import React from 'react'
import Home from './pages/Home'
import StyledApp from './assets/StyledApp'

const Contact = React.lazy(() => import('./pages/Contact/Contact'))
const Experience = React.lazy(() => import('./pages/Experience/Experience'))

function App () {
    return (
        <>
            <StyledApp>
                <Home />
                {/*<Projects />*/}
                <React.Suspense fallback={<span>Loading...</span>}>
                    <Experience />
                    <Contact />
                </React.Suspense>
            </StyledApp>
        </>
    )
}

export default App