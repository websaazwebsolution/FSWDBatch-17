import React, { useEffect, useState } from 'react';

function Data() {
    const [data, setData] = useState([]);
    const [clickCount, setClickCount] = useState(0);

    const customArray = [
        { id: 1, name: "Car" },
        { id: 2, name: "Bike" },
        { id: 3, name: "Truck" },
        { id: 4, name: "Bus" },
        { id: 5, name: "Train" },
        { id: 6, name: "Airplane" },
        { id: 7, name: "Helicopter" },
        
    ];

    useEffect(() => {
        fetchData();
    }, [clickCount]);

    const fetchData = () => {
        const newData = customArray.slice(0, clickCount);
        setData(newData);
    };

    const handleClick = () => {
        setClickCount(prevClickCount => prevClickCount + 1);
    };

    return (
        <div>
            Data
            <button onClick={handleClick}>Fetch Data</button>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Data;
