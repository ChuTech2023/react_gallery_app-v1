import React from 'react'
import Photo from './Photo'

function PhotoList({ photos, title }) {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {/* Checked if there are photos and display not found */}
                {
                    photos.length > 0 ? (
                        photos.map((photo) => (
                            <Photo key={photo.id} photo={photo} />
                        ))
                    ) : (
                        <li className="not-found">
                            <h3>No Results Found</h3>
                            <p>You search did not return any results. Please try again.</p>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default PhotoList