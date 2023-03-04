import React from "react";
import {mount} from "marketing/MarketingApp";
import {useEffect, useRef} from "react";

/**
 * Integrate Marketing
 * @returns {JSX.Element}
 */
const MarketingApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current)
    })

    return <div ref={ref}/>
}


export default MarketingApp;
