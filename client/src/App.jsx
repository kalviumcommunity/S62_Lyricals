import { useState } from 'react'


// import './App.css'

function App() {
  
  return (
    
    < div className = "bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100" >
    {/* Header Section */ }
    < header className = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-6" >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Lyricals</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
      </header >

    {/* Hero Section */ }
    < section className = "bg-white dark:bg-gray-800 py-16" >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Discover Lyrics, Share Music Love ❤️</h2>
        <p className="text-lg mb-8">Search for song lyrics, rate your favorite tunes, and create a personalized music experience with Lyricals.</p>
        <a href="#features" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700">Explore Features</a>
      </div>
      </section >

    {/* Features Section */ }
    < section id = "features" className = "py-16 bg-gray-100 dark:bg-gray-700" >
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2">🎶 Search for Song Lyrics</h4>
            <p>Find the full lyrics and details of your favorite songs.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2">❤️ Favorite Songs</h4>
            <p>Like songs to add them to your personal favorites list.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2">🔄 Song Suggestions</h4>
            <p>Get recommendations based on your search history and favorites.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2">🌘 Dark/Light Mode</h4>
            <p>Toggle between dark and light modes for a comfortable experience.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-semibold mb-2">⭐ Rate Songs</h4>
            <p>Share your opinion by rating songs.</p>
          </div>
        </div>
      </div>
      </section >

    {/* Footer Section */ }
    < footer className = "bg-gray-800 text-white py-6" >
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 Lyricals. All rights reserved.</p>
        <p>Follow us on
          <a href="#" className="text-indigo-400 hover:underline">Twitter</a>,
          <a href="#" className="text-indigo-400 hover:underline">Facebook</a>,
          <a href="#" className="text-indigo-400 hover:underline">Instagram</a>
        </p>
      </div>
      </footer >
    </div >
    
  )
}

export default App
