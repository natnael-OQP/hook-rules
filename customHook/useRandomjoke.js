import  { useEffect, useState } from 'react';


const useRandomJoke = (firstName, lastName) => {
    const [joke, setJoke] = useState("");
    // 
    useEffect(() => {
        const fetchJokes = async () =>
            await fetch(`https://api.icndb.com/jokes/randome?firstName=${firstName}&lastName=${lastName}`)
                .then((response) => response.json())
                .then((data) => setJoke(data.value.joke));
        // call 
        fetchJokes();
    }, [firstName,lastName]);
    return joke;
}

export default useRandomJoke
