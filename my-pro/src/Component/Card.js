import React from 'react'

export default function Card() {
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Ftiger%2F&psig=AOvVaw2QM1PJMjPS7-uORrKnoL2i&ust=1706249467658000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJjf_Pfw94MDFQAAAAAdAAAAABAE" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}
