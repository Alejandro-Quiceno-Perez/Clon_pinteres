import React from 'react'

export const Card = ({ item }) => {
    return (
        <div className="item">
            <div className="image">
                <img src={item.urls.small} alt={item.description} />
                <a href="" className="btn-save">Guardar</a>
                <a href="" className="icon-upload"><i class="bi bi-cloud-arrow-up"></i></a>
                <a href="" className="icon-dots"><i class="bi bi-justify"></i></a>
            </div>
            <p>{item.description}</p>

            <div>
                <img className="user" src={item.user.profile_image.small} alt="" />
                <span>{item.user.name}</span>
            </div>

        </div>
    )
}
