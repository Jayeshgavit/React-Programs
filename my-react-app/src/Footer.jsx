function Footer() {
  return (
    <footer className="flex flex-wrap justify-evenly bg-gray-800 text-white p-6 mt-6">
  <div>
    <h3 className="text-lg font-semibold mb-2">Company Name</h3>
    <ul className="space-y-1">
      <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
      <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
      <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
    </ul>
  </div>

  <div className="flex flex-col items-start">
    <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
    <div className="flex items-center space-x-2">
      <input
        type="email"
        id="email-input"
        className="p-2 rounded-md bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
        placeholder="Your email"
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors">
        Subscribe
      </button>
    </div>
  </div>


  <p className='text-white text-center text-sm w-full mt-auto pt-6'>&copy; 2025 Your Company. All rights reserved.</p>
</footer>


  );
}
export default Footer;
