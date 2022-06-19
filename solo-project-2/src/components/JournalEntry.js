import React from "react"

const JournalEntry = (props) => (
    <div className="journal-entry">
        <img src={props.img_url}className="journal-entry__image" alt="image here" />
        <div className="journal-entry__info">
            <div className="journal-entry__info__location">
                <p><i class="fa fa-map-marker red" /> {props.country}</p>
                <p className="link side-padding"> View on Google Maps</p>
            </div>
            <h1 className="journal-entry__info__title">{props.location}</h1>
            <p className="journal-entry__info__date">{props.startDate} - {props.endDate}</p>
            <p className="journal-entry__info__text">{props.description}</p>
        </div>
    </div>
)

export default JournalEntry;