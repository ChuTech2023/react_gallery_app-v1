import React from 'react'

function Photo({photo}) {
    return (
        <li>
            <img src={`https://farm5.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="" />
        </li>
    )
}

export default Photo