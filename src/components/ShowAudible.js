import React, {useState, useEffect} from 'react'

const ShowAudible = ({title, by, language}) => {
    const [audible, setAudible] = useState([]);

    return (
        <div>
           {audible.title},{audible.by},{audible.language}
        </div>
    )
}

export default ShowAudible
