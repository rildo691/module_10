import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
    const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
       return Axios.get("https://catfact.ninja/fact")
        .then((res) => 
            res.data
        )
    })

    if (isError)
        return <h1>Sorry, there was an error</h1>

    if (isLoading)
        return <h1>Loading...</h1>

    return <h1>
        THIS IS THE HOME PAGE <p>{data?.fact}</p>
        <button onClick={refetch}>Update Data</button>
    </h1>
}

export default Home