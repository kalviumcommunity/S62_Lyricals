import { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Entities() {
    const [data, setData] = useState([])
    const navigate=useNavigate()

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3000/CRUD-operation/user')
        setData(response.data)
        console.log(response)
    }

    useEffect(() => {
        fetchData()
    }, [])

    

    return (
        <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 min-h-screen p-6 font-sans">
            <h1 className="text-3xl font-bold text-center text-indigo-500 dark:text-indigo-400 mb-6">
                User Entities
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data?.map((ele, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                            {ele.name}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-1">
                            <span className="font-medium text-indigo-500 dark:text-indigo-400">
                                Age:
                            </span>{" "}
                            {ele.age}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-medium text-indigo-500 dark:text-indigo-400">
                                Description:
                            </span>{" "}
                            {ele.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Entities;