import React from "react";

export default function useWindowSize() {
    const [windowDimensions, setWindowDimensions] = React.useState({width: 0, height: 0}) // <-- don't invoke here

    React.useEffect(() => {
        function handleResize() {
            setWindowDimensions(window.innerWidth)
        }

        handleResize() // <-- invoke this on component mount
        window.addEventListener('resize', handleResize)
        
        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return windowDimensions
}