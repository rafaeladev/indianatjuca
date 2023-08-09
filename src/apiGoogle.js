import axios from 'axios';
import { useEffect, useState } from 'react';

//Lien vers les API google
const apiGoogle =
    'https://script.google.com/macros/s/AKfycbwSay2z6NuMwpmO1wVDwttT5bx_wNgVRAyCv00drd_jBraPlZRKfc8tKTEo8w9p3jaq/exec';

export async function getPhotos(id) {
    const url = `${apiGoogle}?action=get${id}`;
    const res = await fetch(url);
    if (!res.ok) {
        throw {
            message: 'Failed to fetch vans',
            statusText: res.statusText,
            status: res.status,
        };
    }
    const photos = await res.json();
    return photos;
}

export default function getData(id) {
    axios.get(`${apiGoogle}?action=get${id}`).then((res) => {
        if (!res.ok) {
            throw {
                message: 'Failed to fetch',
                statusText: res.statusText,
                status: res.status,
            };
        }
        const photos = res.json();
        return photos;
    });
}

export function useFetch(id) {
    const [data, setData] = useState({});

    const [isLoading, setLoading] = useState(true);

    const [error, setError] = useState(false);

    useEffect(() => {
        if (!id) return;

        setLoading(true);

        async function fetchData() {
            try {
                const url = `${apiGoogle}?action=get${id}`;
                const response = await fetch(url);

                const data = await response.json();

                setData(data);
            } catch (err) {
                console.log(err);

                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);

    // console.log(data);
    return { isLoading, data, error };
}
