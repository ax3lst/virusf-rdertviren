import React from 'react'

import '../styles/Results.css'

export default function Results(props) {
    return (
        <div className="recommendations">
            <h1 className="recommendations-header">Unsere Empfehlungen</h1>

            {props.data.map((el) => {
                return (
                    <div className="recommendation">
                        <h3>{el.text}</h3>

                        <div className="recommendation-optional">
                            {el.optional}<br />
                            {el.empfehlung}
                        </div>

                        <div className="recommendation-handlung">
                            {el.handlung}
                        </div>
                    </div>
                    
                )
            })}
        </div>
    )
}
