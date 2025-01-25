import './index.css'
function Header(){
    return (
    <header className='bg-black text-white'>
    <ul className='flex flex-wrap justify-start gap-4 p-2 items-center mt-px'>
        <li className='hover:text-blue-500'><a href="#">Home</a></li>
        <li className='hover:text-blue-500'><a href="#">About</a></li>
        <li className='hover:text-blue-500'><a href="#">Services</a></li>
        <li className='hover:text-blue-500'><a href="#">Sign up</a></li>
    </ul>
    
    </header>
    );
}

export default Header