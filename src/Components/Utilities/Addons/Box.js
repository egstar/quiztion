import React from 'react'

export function BoxView(functionName, newClass) {
    let funcName = newClass
    let myFunction = functionName
    return(
<div className={`${funcName} LoginForm justify-content-center align-items-center`}>
        <div className="LoginFormHead row g-0">
        </div>
        <div className="LoginFormContent row g-0">
            <div className="LoginFormLeft col-1"></div>
            <div className="LoginFormCenter col-10 mx-auto">
                
                    {myFunction}
               
            </div>
            <div className="LoginFormRight col-1"></div>
        </div>
        <div className="LoginFormTail row g-0"></div>
      </div>
    )
}