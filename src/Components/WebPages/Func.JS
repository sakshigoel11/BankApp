import React, { createElement } from 'react'

function FuncCOMPO(props) {
  
  const props = ({name})

  
  
  return (

    <div>
      <h1>Hello {name}</h1>
      {props.children}

      <button onClick={()=> {

        props.btnhandler(1,2)

      }} > Call Function </button>

    </div>
  )


  //<Func name="Ayan" btnHandler = {this.function} />

  // <Func>
  //  <p>Para</p>
  //  <div>
  //  <Func2/>
  //  </div>
  // </Func>
 

}


export default FuncCOMPO
