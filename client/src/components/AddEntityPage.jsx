import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function AddEntityPage() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        age: 0,
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)

        const { name, age, description } = formData



        try {
            const response = await axios.post('http://localhost:3000/CRUD-operation/create-user', formData)
            console.log(response.data)
            navigate('/entities')
        } catch (err) {
            console.log(err)
        }


    }
    return (
        <div className="p-6 font-sans bg-gradient-to-b from-teal-300 via-teal-100 to-blue-100 min-h-screen">
            <h1 className="text-3xl font-bold text-teal-900 mb-6 text-center">Add New Entity</h1>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg border border-teal-300"
            >
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-teal-900 font-medium mb-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="age"
                        className="block text-teal-900 font-medium mb-2"
                    >
                        Age
                    </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-teal-900 font-medium mb-2"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={() => setFormData({ name: '', age: '', description: '' })}
                        className="px-6 py-2 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-75"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddEntityPage