import { useEffect, useState } from "react"

const useServices = () => {
    
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
            .finally(() => {
                setLoading(false);
            })
    } , []);
    
    return [services, loading];
}


export default useServices;