import { useEffect, useState } from "react"

const useServices = () => {
    
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
                setDoctors(data.doctors);
            })
            .finally(() => {
                setLoading(false);
            })
    } , []);
    
    return {
        services,
        doctors,
        loading
    };
}


export default useServices;