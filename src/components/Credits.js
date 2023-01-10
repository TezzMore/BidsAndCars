import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 3rem 8rem;
    @media only screen and (max-width: 900px) {
        margin: .5rem;
    }
`;

const Credits = () => (
    <Container>
        <p><em>Made by <a href="https://ninypops.com" rel="noreferrer" target="_blank">ninypops</a>.</em></p>
    </Container>
)

export default Credits;