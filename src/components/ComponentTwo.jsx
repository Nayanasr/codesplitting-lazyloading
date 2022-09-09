import React, { useEffect, useState } from 'react'

const ComponentTwo = () => {
    console.log("component two is ececuted");
    const [fetchdata, setFetchData] = useState([]);

    useEffect(() => {
        fetchFunction();
    }, []);

    const fetchFunction = () => {
        fetch("https://jsonplaceholder.typecode.com/users")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setFetchData(data);
        })
        .catch((err) => {
            console.log(err);
        });
    };

  return (
    <div>
        {fetchdata.map((val) => {
            return <p>{val.name}</p>
        })}
    </div>
  );
};

export default ComponentTwo;