import React from 'react'

export const Card = ({ item }) => {
    return (
        <div className="item">
            <div className="image">
                <img src={item.urls.small} alt={item.description} />
            </div>
            <p>{item.description}</p>

            <div>
                <img className="user" src={item.user.profile_image.small} alt="" />
                <span>{item.user.name}</span>
            </div>

        </div>
    )
}
