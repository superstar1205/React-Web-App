import React from "react";
import { Container, Button } from 'react-bootstrap';
// Icons
import { WiMoonAltWaningCrescent6, WiMoonAltWaningGibbous1 } from 'react-icons/wi';

const Theme = () => {

    const handleToggle = () => {
        document.documentElement.classList.toggle('dark-mode')

        document.querySelectorAll('.inverted').forEach((result) => {
            result.classList.toggle('invert');
        })
    };

    return (
        <>
            {/* Theme toggler */}
            <Container fluid className="fixed-bottom">
                <Container className="mb-3 d-flex justify-content-end px-0">
                    <Button className="fs-1 d-flex align-items-center justify-content-center rounded-circle p-2 bg-light border-0 shadow btn" onClick={handleToggle}>
                        <WiMoonAltWaningCrescent6 className=" text-dark" />
                    </Button>
                </Container>
            </Container >
        </>

    );
}

export default Theme;