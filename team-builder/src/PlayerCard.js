import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    width: 28%;
    border: 2px solid #002952;
    background-color: #ffa159;
    color: #002952;
    margin: 2%;
    padding: 2%;
    text-align: center;
    border-radius: 10%;

    p{
        font-weight: bold;
    }
`

function PlayerCard(props) {
    const {data} = props

    return(
    <StyledCard>
    <p>Name: {data.name}</p>
    <p>Email: {data.email}</p>
    <p>Position: {data.role}</p>
    </StyledCard>
    )
}

export default PlayerCard