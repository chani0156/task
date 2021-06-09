import {useState, useEffect} from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';


function Task(props)   {
useEffect(async()=>{
    
   
},[])


    return(
<div>
<MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={`${props.task.taskImage}`} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardText>
              {props.task.taskName}
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
            </div>
    )
}

export default Task