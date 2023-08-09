import React from 'react'


export default function CondRend( obj) {
    const m =[
        { name:"suryansh",branch:"cse-c"},
        {name:"saurabh",branch:"cse-c"},
        {name:"saksham",branch:"cse-c"}
    ]
  return (
    
    <div>{
        m.map(
            (obj)=> {
                return(
                <p> name of student is {obj.name} and branch enrolled is {obj.branch} </p>

                )
                

            }

        )
}
    

    </div>
        
    
  )
}

