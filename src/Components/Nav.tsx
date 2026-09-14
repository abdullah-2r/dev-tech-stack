
import Logo from "../assets/logo-text.png"
const Nav = () => {
      return (
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
               <nav className="container m-auto py-[8px] mb-[12px]">
                  <div className="flex justify-between items-center">
                   <img className="w-[150px]" src={Logo} alt="" />
                   <ul className="flex gap-9 text-[16px] font-semibold text-[#475569] cursor-pointer">
                         <li className="text-pink-600">Home</li>
                         <li>Technologies</li>
                         <li>Projects</li>
                         <li>About</li>
                         <li>Contact</li>
                   </ul>
                   <div className="flex gap-6 items-center cursor-pointer">
                   <p>Sign In</p>
                   <button className="bg-pink-600 py-2 px-5 rounded-[20px] text-white cursor-pointer">Sign Up</button>
                   </div>
                   </div>
                   </nav>
            </div>
      );
};

export default Nav;