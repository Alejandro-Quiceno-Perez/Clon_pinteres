import React from 'react'

export const Card = ({ item }) => {
    return (
        <div className="item">
            <div className="image">
                <img src={item.urls.small} alt={item.description} />
                <a href="" className="btn-save">Guardar</a>
                <a href="" className="icon-upload"><img src="/public/upload.svg" alt="upload" /></a>
                <a href="" className="icon-dots"><img src="/public/justify.svg" alt="more" /></a>
            </div>
            <p>{item.description}</p>

            <div>
                <img className="user" src={item.user.profile_image.small} alt="" />
                <span>{item.user.name}</span>
            </div>

        </div>
    )
}
