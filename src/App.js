import React from 'react'
import placeHolder2 from "./assets/imgPlaceholder2.jpg"
import placeHolder3 from "./assets/imgPlaceholder3.jpg"
import placeHolder4 from "./assets/imgPlaceholder4.png"
import product5 from "./assets/product5.jpg"
import ticketPercent from "./assets/ticket-percent.svg"
import heart from "./assets/heart.png"
import star from "./assets/star.svg"
import bgPlaceholder2 from "./assets/bgPlaceholder2.jpg"
import bgPlaceholder3 from "./assets/bgPlaceholder3.jpg"
import bgPlaceholder4 from "./assets/bgPlaceholder4.jpg"
import bgPlaceholder5 from "./assets/bgPlaceholder5.jpg"
import trackLogo from "./assets/track.svg"
import phoneLogo from "./assets/phone.svg"
import moneyLogo from "./assets/money.svg"
import lockLogo from "./assets/lock.svg"
import emailLogo from "./assets/email.svg"
import facebookLogo from "./assets/facebook.svg"
import instaLogo from "./assets/instagram.svg"
import youtubeLogo from "./assets/youtube.svg"

function App() {
  const productCard = index => (    
    <div key={index} className='flex flex-col gap-1'>
      <div className="aspect-[.75] bg-bg-product1 bg-center bg-blend-multiply bg-contain p-4 mb-1 min-w-[14.4375rem] max-w-[16.375rem] bg-no-repeat bg-[#f3f5f7] grid grid-product-rows grid-cols-2">
        <h3 className='product-ticket bg-white self-start w-fit'>NEW</h3>
        <img className='bg-white p-[.375rem] rounded-2xl ml-auto' src={heart} alt="heart"/>
        <h3 className='product-ticket bg-[#38CB89] text-white self-start w-fit'>50%</h3>
        <a className='text-button-s row-start-3 col-span-2 self-end bg-black text-white text-center py-2 px-6 rounded-lg' href=".">Add to cart</a>
      </div>
      <div className='flex gap-1'>{Array(5).fill(0).map((item, index) => <img key={index} src={star} alt="star"/>)}</div>
      <p className='text-body2-semi'>Loveseat Sofa</p>
      <p className='text-caption1-semi'>$199.00 <span className='font-normal ml-3 text-neutral-500 line-through'>$400.00</span></p>
    </div>
    )
  const serviceCard = ([title, [desc, img]], index) => (
    <div key={index}>
      <img src={img} alt="logo"/>
      <h6 className='text-headline7'>{title}</h6>
      <p>{desc}</p>
    </div>
  )

  const post = (key, title, img) => (
  <div key={key} className='w-full h-60 mb:post-layout flex flex-col gap-3'>
    <img className='grow h-0 object-cover' src={img} alt="placeholder"/>
    <h1 className='text-headline7'>{title}</h1>
    <a className="text-button-xs underline underline-offset-8" href=".">Read More ➜</a>
  </div>
  )

  return (
    <div className="App">
      <div className="text-caption2-semi text-[#343839] bg-[#F3F5F7] text-center py-2 flex justify-center items-center">
        <img src={ticketPercent} alt="ticket percent" />
        <h1 className="mr-6 ml-2">30% off storewide — Limited time! </h1>
        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M9.942 1.442a.625.625 0 0 0-.884-.884L5.5 4.116 1.942.558a.625.625 0 1 0-.884.884L4.616 5 1.058 8.558a.625.625 0 1 0 .884.884L5.5 5.884l3.558 3.558a.625.625 0 1 0 .884-.884L6.384 5l3.558-3.558Z" fill="#343839"/>
        </svg>
      </div>

      <div className="font-inter">
        <nav className="flex gap-1 items-center my-4 mx-auto px-8 max-w-[70rem]">
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1h10M1 5h10M1 9h10" stroke="#141718" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <h1 className="font-poppins font-medium mr-auto">4Vogue<span className="text-neutral-700">.</span></h1>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6v1a3 3 0 1 0 6 0V6" stroke="#141718" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.611 3H8.389a4 4 0 0 0-3.945 3.342l-1.667 10A4 4 0 0 0 6.722 21h10.556a4 4 0 0 0 3.946-4.658l-1.667-10A4 4 0 0 0 15.612 3Z" stroke="#141718" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
          <div className="bg-neutral-950 text-white w-6 aspect-square flex justify-center items-center rounded-full"><h1>2</h1></div>
        </nav>
        <main className="[&>*]:mx-auto [&>*]:my-8 [&>*]:px-8 [&>*]:max-w-[70rem]">
          <section className='!my-0'><div className="h-[20rem] bg-image-placeholder bg-cover bg-bottom"></div></section>
          <section>
            <h1 className="text-headline4 tracking-[-0.025rem] leading-[2.75rem]">Simply Unique<span className="text-neutral-700">/</span><br/> Simply Better<span className="text-neutral-700">.</span></h1>
            <p className="text-neutral-700 text-caption1 mt-4"><span className="text-neutral-800 text-caption1-semi">4Vouge</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
          </section>
          <section className='grid grid-rows-2 min-[43.875rem]:grid-rows-2 grid-cols-custom-max-2 gap-4 [&>div]:bg-[#F3F5F7]'>
            <div className="row-span-2 p-8">
              <h6 className="text-headline6">Living Room</h6>
              <a className="text-button-xs underline underline-offset-8 mb-auto" href=".">Shop Now ➜</a>
              <img className='mix-blend-multiply' src={placeHolder2} alt="sofa"/>
            </div>
            <div className="flex items-center justify-between p-8">
              <div className='self-end'>
                <h6 className="text-headline6">Bedroom</h6>
                <a className="text-button-xs underline underline-offset-8 w-1/2" href=".">Shop Now ➜</a>
              </div>
              <img className="w-1/3" src={placeHolder4} alt="armchair" />
            </div>
            <div className="flex items-center justify-between p-8">
              <div className='self-end'>
                <h6 className="text-headline6">Kitchen</h6>
                <a className="text-button-xs underline underline-offset-8 w-1/2" href=".">Shop Now ➜</a>
              </div>
              <img className="w-1/2 mix-blend-multiply" src={product5} alt="toast"/>
            </div>
          </section>
          <section>
            <h1 className="text-headline5">New<br/>Arrivals</h1>
            <div className='flex justify-between overflow-x-scroll gap-4 py-8'>
              {Array(6).fill(0).map((product, index) => productCard(index))}
            </div>
            <a className="text-button-xs underline underline-offset-8 mb-auto" href=".">More Products ➜</a>
          </section>
          <section className='flex flex-wrap gap-4 [&>div]:service-box [&>h6]:text-headline7 [&>p]:text-poppins [&>p]:text-neutral-500'>
            {Object.entries({
              'Free shipping': ['Order above 200$', trackLogo],
              'Money-back': ['30 days guarantee', moneyLogo],
              'Secure Payments': ['Secured by Stripe', lockLogo],
              '24/7 Support': ['Phone and Email support', phoneLogo]
            }).map((entries, index) => serviceCard(entries, index))}
          </section>
          <section className='!p-0 !max-w-none flex flex-wrap [&>*]:divided-by-two'>
            <div><img className='h-full w-full object-cover' src={bgPlaceholder2} alt="living room"/></div>
            <div className='bg-[#F3F5F9] flex flex-col pl-8 justify-center gap-4 [&>*]:max-w-[25rem]'>
              <p className='text-hairline1 text-palette-blue'>SALE UP TO 35% OFF</p>
              <h1 className='text-headline5'>HUNDREDS OF NEW LOWER PRICES!</h1>
              <p className='text-body2'>It's more affordable than ever to give every room in your home a stylish makeover</p>
              <a className="text-button-xs underline underline-offset-8" href=".">Shop Now ➜</a>
            </div>
          </section>
          <section className=' flex flex-col justify-center gap-10 py-10 mb:py-20'>
            <div className='flex items-center justify-between'>
              <h1 className='text-headline5'>Articles</h1>
              <a className="text-button-xs underline underline-offset-8" href=".">More Articles ➜</a>
            </div>
            <div className='flex flex-wrap gap-4 mx-auto'>
            {Object.entries({
              '7 ways to decor your home': bgPlaceholder3,
              'Kitchen organization': bgPlaceholder4,
              'Decor your bedroom': bgPlaceholder5
            }).map(([title, img], index) => post(index, title, img))}
            </div>
          </section>
          <section className='relative [&>*]:p-8 h-[22.5rem] !max-w-none bg-[#F2F4F6] overflow-hidden !mb-0'>
            <img className='absolute hidden w-[35rem] left-[70%] bottom-[-10rem] mix-blend-multiply mb:block' src={placeHolder3} alt="sofa" />
            <img className='absolute hidden w-[25rem] left-[-10rem] bottom-[-7rem] mix-blend-multiply mb:block' src={placeHolder4} alt="shelf" />
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
              <h1 className='text-headline4'>Join Out Newsletter</h1>
              <p className='font-inter'>Sign up for deals, new products and promotions</p>
              <form className='flex my-4 gap-2 w-full max-w-[30rem] text-button-s text-neutral-400 border-b-[1px] border-neutral-400 py-2' action="/" method="POST">
                <img src={emailLogo} alt="email logo" />
                <input className='grow bg-transparent text-black placeholder:text-neutral-400 outline-none' type="text" id="emailForm" name="email" placeholder="Email address"/>
                <button type="submit" onClick={(e) => e.preventDefault()}>Signup</button>
              </form>
            </div>
          </section>
        </main>
        <footer className='bg-[#141718] text-caption1 text-neutral-400 p-16 [&>*]:max-w-[70rem] [&>*]:mx-auto'>
            <div className='flex flex-wrap gap-10'>
              <h1 className="font-poppins font-medium text-white pr-4 mr-[-1rem] border-r-[1px] border-neutral-500">4Vogue<span className="text-neutral-700">.</span></h1>
              <p className='mr-auto'>Gift & Decoration Store</p>
              <p>Home</p>
              <p>Shop</p>
              <p>Product</p>
              <p>Blog</p>
              <p>Contact Us</p>
            </div>
            <div className='flex flex-wrap gap-7 border-t-[1px] border-neutral-500 pt-4 mt-12'>
              <p>Copyright © 2023 3legant. All rights reserved</p>
              <p className='font-bold text-white'>Privacy Policy</p>
              <p className='font-bold text-white mr-auto'>Terms of Use</p>
              <img src={instaLogo} alt="instagram" />
              <img src={facebookLogo} alt="facebook" />
              <img src={youtubeLogo} alt="youtube" />
            </div>
          </footer>
      </div>
    </div>
  );
}

export default App;
