import React from 'react'

export const GifGridItem = ( {img, count} ) => {
    return (
        <div style={{marginLeft: "15px"}}>
            <li>
            <div style={{padding: "5px"}} className="list-group card animate__animated animate__bounce">
                <a href="https://es.reactjs.org/docs/faq-structure.html" className="list-group-item list-group-item-action flex-column align-items-start active">
                    <span className="badge badge-pill badge-warning"> <small> {count} </small> </span>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="h5"> { img.title } </h5>
                    </div>
                    <img src={img.url} className="img-fluid" alt={img.title} />
                </a>
            </div>
            </li>
        </div>
    )
}
