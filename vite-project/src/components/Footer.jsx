

// function Footer() {
//   return (
//     <div className="">


//     </div>
//   )
// }

// export default Footer
// import logo from '../assets/logo.png';
// import { useState } from 'react';

// function Footer() {
//   return (
//     <footer className ="bg-black text-white px-8" id="footerbackground">
    
//     <div className="grid gap-10 mb-8 sm:grid-cols-3 lg:grid-cols-5">
        
//         <div className="footer-about text-base sm:col-span-2">
//           <h4 className="text-2xl py-4">About Us</h4>
//           <p className="text-sm">Embark on a culinary adventure around the world with our delicious recipes! We'll help you whip up amazing meals and transform you into a home cook you can be proud of. Discover your new favorites and become a kitchen hero!</p>
//         </div>

//         <div className="footerfeatures w-1/5">
//             <h4 className="text-2xl py-3">Features</h4>
//             <ul className="text-sm">
//                 <li><a href="#">Favourite recipes</a></li>
//                 <li><a href="#">Organise & Search</a></li>
//                 <li><a href="#">Plan & Shop</a></li>
//                 <li><a href="#">Grocery lists</a></li>
//               </ul>
//          </div>

//         <div className="footer-links text-base w-1/5">
//           <h4 className="text-2xl py-3">Quick Links</h4>
//           <ul className="text-sm">
//             <li><a href="#">FAQ</a></li>
//             <li><a href="#">Services</a></li>
//             <li><a href="#">My account</a></li>
//             <li><a href="#">Legal</a></li>
//           </ul>
//         </div>

//         <div className="footer-contact w-1/5">
//           <h4 className="text-2xl py-3">Contact Us</h4>
//           <p className="text-sm"> Email: info@example.com</p>
//           <p className="text-sm"> Phone: +123 456 7890</p>
//         </div>

//       </div>

//     <div className="flex flex-col justify-center items-center">  
//         <div className="min-h-20 flex justify-center">  
//             <button className="basis-1/7 w-48 h-4 rounded-lg outline-2 p-0 mx-4 **my-auto**"><img src="./assets/app store.png"></button>
//             <button className="basis-1/7 w-48 h-4 rounded-lg outline-2 p-0 mx-4 **my-auto**"><img src="./assets/google play.png"></button>
//         </div>
//       <div class="text-center mt-4 min-h-8">  <p>Use of this site constitutes acceptance of its <a href="#" className="text-decoration-line: underline">User Agreement</a> and <a href="#" className="text-decoration-line: underline">Privacy Policy</a>.</p>
//       </div>
//     </div>
//     </div>
//     </footer>);
// }
// export default Footer;

// import logo from '../assets/logo.png';
// import { useState } from 'react';
import appstore from '../assets/appstore.png';
import googleplay from '../assets/googleplay.png';

function Footer() {
  return (
    <footer className ="bg-gray-300 text-black px-11 " id="footerbackground">
      <div className="footer-grid-section grid gap-6 mb-8 sm:grid-cols-3 lg:grid-cols-5 ">
        <div className="footer-about text-base sm:col-span-2">
          <h4 className="text-2xl py-4 place-items-center text-center">About Us</h4>
          <p className="text-sm px-8">Embark on a culinary adventure around the world with our delicious recipes! We'll help you whip up amazing meals and transform you into a home cook you can be proud of. Discover your new favorites and become a kitchen hero! All recipes publishes were tried and approved by our community chefs.</p>
        </div>

        <div className="footerfeatures w-1/5">
          <h4 className="text-2xl py-4 text-center">Features</h4>
          <ul className="text-sm">
            <li><a href="#">Favourite recipes</a></li>
            <li><a href="#">Organise & Search</a></li>
            <li><a href="#">Plan & Shop</a></li>
            <li><a href="#">Grocery lists</a></li>
          </ul>
        </div>

        <div className="footer-links text-base w-1/5">
          <h4 className="text-2xl py-4 text-center">Quick Links</h4>
          <ul className="text-sm">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">My account</a></li>
            <li><a href="#">Legal</a></li>
          </ul>
        </div>

        <div className="footer-contact w-1/5">
          <h4 className="text-2xl py-4 text-center">Contact Us</h4>
          <p className="text-sm"> Email: info@example.com</p>
          <p className="text-sm"> Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">  
        <div className="min-h-20 flex justify-center">  
          <button className="basis-1/7 w-48 h-4 rounded-lg outline-2 p-0 mx-4 my-auto">
            {/* <img src="./assets/appstore.png" alt="App Store"/> */}
            <img className='h-10 pb-1' src={appstore} alt="App Store"/>
          </button>
          <button className="basis-1/7 w-48 h-4 rounded-lg outline-2 p-0 mx-0 my-auto">
            {/* <img src="./assets.googleplay.png" alt="Google Play"/> */}
            <img className='h-10 pb-1' src={googleplay} alt="Google Play"/>
          </button>
        </div>
        <div className="text-center mt-4 min-h-8 p-4">
          <p>Use of this site constitutes acceptance of its <a href="#" className="text-decoration-line: underline">User Agreement</a> and <a href="#" className="text-decoration-line: underline">Privacy Policy</a>.</p>
        </div>
      </div>
    </footer>
  );
}

// function Footer() {
//   return (
//     <footer className="bg-gray-300 text-black px-11" id="footerbackground">
//       <div className="footer-flex-section flex flex-wrap justify-between mb-8">
//         <div className="footer-about text-base flex-1 min-w-[200px]">
//           <h4 className="text-2xl py-4 text-center">About Us</h4>
//           <p className="text-sm px-8">Embark on a culinary adventure around the world with our delicious recipes! We'll help you whip up amazing meals and transform you into a home cook you can be proud of. Discover your new favorites and become a kitchen hero! All recipes published were tried and approved by our community chefs.</p>
//         </div>

//         <div className="footer-features flex-1 min-w-[150px]">
//           <h4 className="text-2xl py-4 text-center">Features</h4>
//           <ul className="text-sm text-center">
//             <li><a href="#">Favourite recipes</a></li>
//             <li><a href="#">Organise & Search</a></li>
//             <li><a href="#">Plan & Shop</a></li>
//             <li><a href="#">Grocery lists</a></li>
//           </ul>
//         </div>

//         <div className="footer-links flex-1 min-w-[150px]">
//           <h4 className="text-2xl py-4 text-center">Quick Links</h4>
//           <ul className="text-sm text-center">
//             <li><a href="#">FAQ</a></li>
//             <li><a href="#">Services</a></li>
//             <li><a href="#">My account</a></li>
//             <li><a href="#">Legal</a></li>
//           </ul>
//         </div>

//         <div className="footer-contact flex-1 min-w-[150px]">
//           <h4 className="text-2xl py-4 text-center">Contact Us</h4>
//           <p className="text-sm text-center">Email: info@example.com</p>
//           <p className="text-sm text-center">Phone: +123 456 7890</p>
//         </div>
//       </div>

//       <div className="flex flex-col justify-center items-center">
//         <div className="flex justify-center gap-4 mb-4">
//           <button className="w-48 h-12 rounded-lg">
//             <img className='h-full' src={appstore} alt="App Store" />
//           </button>
//           <button className="w-48 h-12 rounded-lg">
//             <img className='h-full' src={googleplay} alt="Google Play" />
//           </button>
//         </div>
//         <div className="text-center mt-4">
//           <p>Use of this site constitutes acceptance of its <a href="#" className="underline">User Agreement</a> and <a href="#" className="underline">Privacy Policy</a>.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


export default Footer;
