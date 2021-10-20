import { useEffect, useState } from "react"

const useServices = () => {
    
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
                setDoctors(data.doctors);
                setProducts(data.products);
            })
            .finally(() => {
                setLoading(false);
            })
    } , []);
    
    return {
        products,
        services,
        doctors,
        loading
    };
}


export default useServices;