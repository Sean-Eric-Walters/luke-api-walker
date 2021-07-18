import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Result = (props) => {
    console.log(props)
    // const [resource, setResource] = useState(props.resource);
    // const [idAPI, setIdAPI] = useState(props.idAPI);
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    useEffect( () => {

        axios.get(`https://swapi.dev/api/${props.resource}/${props.idAPI}`)
            .then(response => {
                console.log(response.data);
                console.log(props.resource);
                console.log(props.idAPI);
                // setResource(props.resource);
                // setIdAPI(props.idAPI);
                setResults(response.data);
                setError(null);
            })
            .catch((e) => {
                // setResource(props.resource);
                // setIdAPI(props.idAPI);
                setError("These aren't the droids you're looking for")
            })
    }, [props.resource, props.idAPI])

    let res = [];
    let i = 0;
    for (let key in results){
        if (i < 5) {
        let ogKey = key;
        key = key[0].toUpperCase() + key.slice(1);
        res.push({'key': key,'result': results[ogKey]});
        i++;
        } else {
            break;
        }
    }

    return (
        <div>
            {
                error ?
                <div>
                    <img src="src/components/obi-wan.jpg"/>
                    <h5>{error}</h5>
                    <p style={{color: 'red'}}>{props.resource} {props.idAPI} does not exist!</p>
                </div> :
                <div>
                    {
                        res.map( attr => {
                            return <p>{attr.key}: {attr.result}</p>
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Result;