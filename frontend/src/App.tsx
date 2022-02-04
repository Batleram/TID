import React, { useEffect, useState } from "react";

export const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        //
        fetch(`http://${window.location.hostname}:7676/getthings`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((e) => console.error(e));
    }, []);

    return (
        <>
            <h1>Test</h1>
            <div>{JSON.stringify(data[0])}</div>
        </>
    );
};
