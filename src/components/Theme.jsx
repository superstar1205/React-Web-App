import React from "react";
import { Container } from 'react-bootstrap';
// Icons
import { WiMoonAltWaningCrescent6, WiMoonAltWaningGibbous1 } from 'react-icons/wi';

const Theme = () => {

    
    return (
        <>
            {/* Theme toggler */}
            < Container fluid className="fixed-bottom" >
                <Container className="py-1 mb-3 d-flex justify-content-end px-0">
                    <p className="fs-1">
                        <WiMoonAltWaningCrescent6 className=" text-light" />
                    </p>
                    <p className="fs-1 d-none toggle">
                        <WiMoonAltWaningGibbous1 />
                    </p>
                </Container>
            </Container >
        </>

    );
}

export default Theme;