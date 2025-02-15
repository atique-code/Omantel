import { useState } from 'react';
import Logo from "../assets/image/logo.jpg"
import playstoreImage from "../assets/image/imageLogo.jpg"
const PlayStorePage = () => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);

  const handleDownload = () => {
    // Replace with actual download logic
    // alert('Downloading Omegla APK...');
    window.location.href = "/app-debug.apk"
    setShowDownloadPopup(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
  <div className="container mx-auto px-4 py-3 flex items-center justify-between">
    
    {/* Left Section: Play Store Image and Title */}
    <div className="flex items-center gap-2 cursor-pointer">
      {/* Play Store Image */}
      {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
          alt="Google Play Logo"
          className="h-8 w-8"
        /> */}
        
        <img
          src={playstoreImage}
          alt="Google Play Logo"
          className="h-8 w-8"
        /> 
      <h1 className="text-xl font-semibold text-gray-800">Google Play</h1>
    </div>

    {/* Right Section: Search, Help (?), and Profile */}
    <div className="flex items-center gap-4">
      {/* Search Icon */}
      <button className="text-gray-600 cursor-pointer">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
        </svg>
      </button>

      {/* Question Mark Icon */}
      <button className="text-gray-600 cursor-pointer">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9a3 3 0 1 1 6 0c0 1.5-1.5 2.5-2.5 3.5S12 15 12 16m0 4h.01" />
        </svg>
      </button>

      {/* Profile Circle with Bold "M" in Center */}
      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 cursor-pointer">
        <span className="text-white text-lg font-bold">M</span>
      </div>
    </div>
  </div>
</header>


      {/* Main App Content */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-32 h-32 rounded-2xl bg-purple-100 flex items-center justify-center self-center">
              {/* <span className="text-purple-600 text-4xl font-bold">Ω</span> */}
              <img src={Logo} alt="" className='rounded-2xl' />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Omantel</h1>
              <p className="text-gray-600 mb-2">Developer: Omantel Inc</p>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                  <span className="text-blue-800 font-medium">4.9 ★</span>
                </div>
                <span className="text-gray-600">985K reviews</span>
              </div>
              <button 
                onClick={handleDownload}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Install
              </button>
            </div>
          </div>
        </div>

        {/* Screenshots Section
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Screenshots</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {[1, 2, 3].map((i) => (
              <img 
                key={i}
                src={`https://via.placeholder.com/300x600?text=Omegla+Screen+${i}`}
                alt={`Screenshot ${i}`}
                className="w-64 h-112 rounded-lg border border-gray-200"
              />
            ))}
          </div>
        </div> */}

        {/* Description Section */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">About this app</h2>
            <p className="text-gray-600 leading-relaxed">
              Omegla revolutionizes social connections with secure, real-time communication features. 
              Enjoy seamless video calls, instant messaging, and innovative community features. 
              End-to-end encrypted with premium quality connectivity.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-gray-800 mb-3">Additional Information</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Updated: March 2024</p>
              <p>Version: 3.0.0</p>
              <p>Size: 82 MB</p>
              <p>Downloads: 50M+</p>
            </div>
          </div>
        </div> */}

        {/* Reviews Section */}
        {/* <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Reviews</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100"></div>
                  <div>
                    <p className="font-medium text-gray-800">User {i}</p>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-gray-600 text-sm">4.9</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">Best communication app I've ever used! Lightning fast and super secure.</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Download Popup */}
      {/* {showDownloadPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Download Omegla</h3>
              <button 
                onClick={() => setShowDownloadPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Version 3.0.0 (82 MB)</p>
              <button
              
                onClick={handleDownload}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Download APK
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default PlayStorePage;