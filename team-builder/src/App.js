import React, { useState } from 'react';
import './App.css';
import Form from './Form'
import PlayerCard from './PlayerCard';
import styled from 'styled-components'

//styles

const Page = styled.div`
background-image: linear-gradient(blue, royalblue);
border: 2px solid orange;
`

const StyledHeader = styled.header`
background-image: linear-gradient(blue, royalblue);
color: orange;
text-align: center;
border-bottom: 2px solid orange;
align-items: center;
`

const Flex = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`


const dummyData = [{
  name: "Rodney Buckets",
  email: 'IDontMiss@Ever.com',
  role: 'Point Guard',  
},
]

const initialRoster = {
  name: '',
  email: '',
  role: '',
}


function App() {
  // team members
  const [teamMembers, setTeamMembers] = useState(dummyData)
  const [rosterValues, setRosterValues] = useState(initialRoster)

  const update = (inputName, inputValue) => {
    setRosterValues({...rosterValues, [inputName]: inputValue})
  }

  const submit = () => {
    const newPlayer = {
      name: rosterValues.name.trim(),
      email: rosterValues.email.trim(),
      role: rosterValues.role,
    }
    setTeamMembers([...teamMembers, newPlayer])
    setRosterValues(initialRoster)
  }


  return (
    <Page className="App">
      <StyledHeader>
        <h1>Roster Applications for the New York Bricks (Knicks)</h1>
        <h2>Looking for new players to save our dying organization</h2>
      </StyledHeader>

      <Form 
        values={rosterValues}
        update={update}
        submit={submit}
      />

      <Flex>
      {
        teamMembers.map(player => {
          return(
          <PlayerCard key={player.id} data={player} />
          )
        })
      }
      </Flex>
    </Page>
  );
}

export default App;
