import { useState, useEffect } from "react";
import axios from 'axios'
function Entities() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3000/CRUD-operation/user')
        setData(response.data)
        console.log(response)
    }

    useEffect(() => {
        const callhandler = async () => {
            await fetchData()
        }
        callhandler()
    }, [])

    return (
        <div className="p-6 font-sans bg-gradient-to-b from-teal-300 via-teal-100 to-blue-100 min-h-screen">
            <h1 className="text-3xl font-bold text-teal-900 mb-6 text-center">User Entities</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    data?.map((ele, index) => {
                        return (
                            <div key={index} className="flex flex-col p-6 border border-teal-300 rounded-lg shadow-lg bg-white">
                                <h3 className="text-xl font-semibold text-teal-800 mb-2">{ele.name}</h3>
                                <p className="text-gray-700 mb-1">
                                    <span className="font-medium text-teal-900">Age:</span> {ele.age}
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-medium text-teal-900">Description:</span> {ele.description}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Entities;