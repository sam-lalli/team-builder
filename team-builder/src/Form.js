import React, {useState} from 'react'
import styled from 'styled-components'

//styles

const StyledDiv = styled.form`
border: 2px solid black;
background-color: oldlace;
display: flex;
flex-direction: column;
margin-left:10%;
margin-right:10%;
margin-top:5%;
margin-bottom:5%;

div{
    display: block;
    font-size: 1.5rem;
}

label{
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left:2%;
    display:flex;
    justify-content: space-between;
}

input{
    margin-right:2%;
}

select{
    margin-right:6.6%;
}
button{
    background-color: blue;
    color: orange;
    width: 15.5%;
    margin-bottom: 2%;
    transition: all ease-in-out 1s;

    &:hover{
        background-color:orange;
        color:blue;
        transition: all ease-in-out 1s;
    }
}

.submit{
    display:flex;
    justify-content: flex-end;
    margin-right:2%;
}
`


function Form(props) {
    const { values, update, submit } = props

    const onChange = e => {
        const { name, value } = e.target
        update(name, value)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return(
        <StyledDiv className='form-container' onSubmit={onSubmit}>
            <div className="form-inputs">
                <label>
                    Name 
                    <input 
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                    maxLength="30"
                    placeholder="Next Young Talent"
                    />
                </label>
                <label>
                    Email
                    <input 
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    maxLength="30"
                    placeholder="Email"
                    />
                </label>
                <label>
                    Role
                    <select name="role" value={values.role} onChange={onChange}>
                        <option value=''>Position</option>
                        <option value='Point Guard'>Point Guard</option>
                        <option value='Shooting Guard'>Shooting Guard</option>
                        <option value='Small Forward'>Small Forward</option>
                        <option value='Power Forward'>Power Forward</option>
                        <option value='Center'>Center</option>
                        <option value='Coach'>Coach</option>
                    </select>
                </label>    
            </div>

            <div className='submit'>
                <button disabled={!values.username, !values.email, !values.role}>Join Us</button>
            </div>
        </StyledDiv>
    )

}

export default Form