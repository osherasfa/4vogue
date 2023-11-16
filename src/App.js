import React from 'react'
import placeHolder2 from "./assets/imgPlaceholder2.jpg"
import placeHolder4 from "./assets/imgPlaceholder4.png"
import product5 from "./assets/product5.jpg"
import ticketPercent from "./assets/ticket-percent.svg"
import heart from "./assets/heart.png"
import star from "./assets/star.svg"
import breakout1 from "./assets/breakout1.jpg"

function App() {
  return (
    <div className="App">
      <div className="text-caption2-semi text-[#343839] bg-[#F3F5F7] text-center py-2 flex justify-center items-center">
        <img src={ticketPercent} alt="ticket percent" />
        <h1 className="mr-6 ml-2">30% off storewide — Limited time! </h1>
        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.942 1.442a.625.625 0 0 0-.884-.884L5.5 4.116 1.942.558a.625.625 0 1 0-.884.884L4.616 5 1.058 8.558a.625.625 0 1 0 .884.884L5.5 5.884l3.558 3.558a.625.625 0 1 0 .884-.884L6.384 5l3.558-3.558Z" fill="#343839"/>
        </svg>
      </div>

      <div className="h-[300rem] px-8 mx-auto max-w-[70rem] font-inter">
        <nav className="flex gap-1 items-center my-4">
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1h10M1 5h10M1 9h10" stroke="#141718" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <h1 className="font-poppins font-medium mr-auto">4Vogue<span className="text-neutral-700">.</span></h1>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6v1a3 3 0 1 0 6 0V6" stroke="#141718" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.611 3H8.389a4 4 0 0 0-3.945 3.342l-1.667 10A4 4 0 0 0 6.722 21h10.556a4 4 0 0 0 3.946-4.658l-1.667-10A4 4 0 0 0 15.612 3Z" stroke="#141718" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
          <div className="bg-neutral-950 text-white w-6 aspect-square flex justify-center items-center rounded-full"><h1>2</h1></div>
        </nav>
        <main className="[&>*]:my-8">
          <div className="h-[20rem] bg-image-placeholder bg-cover bg-bottom !mt-0"></div>
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
              <div className='flex flex-col gap-1'>
                <div className="aspect-[.75] bg-bg-product1 bg-center bg-blend-multiply bg-contain p-4 mb-1 min-w-[14.4375rem] max-w-[16.375rem] bg-no-repeat bg-[#f3f5f7] grid grid-product-rows grid-cols-2">
                  <h3 className='product-ticket bg-white self-start w-fit'>NEW</h3>
                  <img className='bg-white p-[.375rem] rounded-2xl ml-auto' src={heart} alt="heart"/>
                  <h3 className='product-ticket bg-[#38CB89] text-white self-start w-fit'>50%</h3>
                  <a className='text-button-s row-start-3 col-span-2 self-end bg-black text-white text-center py-2 px-6 rounded-lg' href=".">Add to cart</a>
                </div>
                <div className='flex gap-1'>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                </div>
                <p className='text-body2-semi'>Loveseat Sofa</p>
                <p className='text-caption1-semi'>$199.00 <span className='font-normal ml-3 text-neutral-500 line-through'>$400.00</span></p>
              </div>
              <div className='flex flex-col gap-1'>
                <div className="aspect-[.75] bg-bg-product1 bg-center bg-blend-multiply bg-contain p-4 mb-1 min-w-[14.4375rem] max-w-[16.375rem] bg-no-repeat bg-[#f3f5f7] grid grid-product-rows grid-cols-2">
                  <h3 className='product-ticket bg-white self-start w-fit'>NEW</h3>
                  <img className='bg-white p-[.375rem] rounded-2xl ml-auto' src={heart} alt="heart"/>
                  <h3 className='product-ticket bg-[#38CB89] text-white self-start w-fit'>50%</h3>
                  <a className='text-button-s row-start-3 col-span-2 self-end bg-black text-white text-center py-2 px-6 rounded-lg' href=".">Add to cart</a>
                </div>
                <div className='flex gap-1'>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                </div>
                <p className='text-body2-semi'>Loveseat Sofa</p>
                <p className='text-caption1-semi'>$199.00 <span className='font-normal ml-3 text-neutral-500 line-through'>$400.00</span></p>
              </div>
              <div className='flex flex-col gap-1'>
                <div className="aspect-[.75] bg-bg-product1 bg-center bg-blend-multiply bg-contain p-4 mb-1 min-w-[14.4375rem] max-w-[16.375rem] bg-no-repeat bg-[#f3f5f7] grid grid-product-rows grid-cols-2">
                  <h3 className='product-ticket bg-white self-start w-fit'>NEW</h3>
                  <img className='bg-white p-[.375rem] rounded-2xl ml-auto' src={heart} alt="heart"/>
                  <h3 className='product-ticket bg-[#38CB89] text-white self-start w-fit'>50%</h3>
                  <a className='text-button-s row-start-3 col-span-2 self-end bg-black text-white text-center py-2 px-6 rounded-lg' href=".">Add to cart</a>
                </div>
                <div className='flex gap-1'>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                </div>
                <p className='text-body2-semi'>Loveseat Sofa</p>
                <p className='text-caption1-semi'>$199.00 <span className='font-normal ml-3 text-neutral-500 line-through'>$400.00</span></p>
              </div>
              <div className='flex flex-col gap-1'>
                <div className="aspect-[.75] bg-bg-product1 bg-center bg-blend-multiply bg-contain p-4 mb-1 min-w-[14.4375rem] max-w-[16.375rem] bg-no-repeat bg-[#f3f5f7] grid grid-product-rows grid-cols-2">
                  <h3 className='product-ticket bg-white self-start w-fit'>NEW</h3>
                  <img className='bg-white p-[.375rem] rounded-2xl ml-auto' src={heart} alt="heart"/>
                  <h3 className='product-ticket bg-[#38CB89] text-white self-start w-fit'>50%</h3>
                  <a className='text-button-s row-start-3 col-span-2 self-end bg-black text-white text-center py-2 px-6 rounded-lg' href=".">Add to cart</a>
                </div>
                <div className='flex gap-1'>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                  <img src={star} alt="star"/>
                </div>
                <p className='text-body2-semi'>Loveseat Sofa</p>
                <p className='text-caption1-semi'>$199.00 <span className='font-normal ml-3 text-neutral-500 line-through'>$400.00</span></p>
              </div>
            </div>
            <a className="text-button-xs underline underline-offset-8 mb-auto" href=".">More Products ➜</a>
          </section>
          <section className='flex flex-wrap gap-4 [&>div]:service-box [&>h7]:text-headline7 [&>p]:text-poppins [&>p]:text-neutral-500'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M28 38V14M28 38H32M28 38H18M28 14C28 9.58172 24.4183 6 20 6H12C7.58172 6 4 9.58172 4 14V30C4 33.7304 6.55333 36.8645 10.0077 37.7499M28 14H34.4182C35.4344 14 36.4126 14.3868 37.154 15.0819L42.7358 20.3148C43.5424 21.071 44 22.1273 44 23.2329V34C44 36.2091 42.2091 38 40 38M40 38C40 40.2091 38.2091 42 36 42C33.7909 42 32 40.2091 32 38M40 38C40 35.7909 38.2091 34 36 34C33.7909 34 32 35.7909 32 38M18 38C18 40.2091 16.2091 42 14 42C11.7909 42 10 40.2091 10 38C10 37.916 10.0026 37.8326 10.0077 37.7499M18 38C18 35.7909 16.2091 34 14 34C11.8748 34 10.1368 35.6573 10.0077 37.7499" stroke="#141718" stroke-width="2.5"/>
                <path d="M20 16H16" stroke="#141718" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 24H12" stroke="#141718" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h7 className='text-headline7'>free shipping</h7>
              <p>Order above 200$</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="4" y="8" width="40" height="32" rx="4" stroke="#141718" stroke-width="2.5"/>
                <circle cx="4" cy="4" r="4" transform="matrix(1 0 0 -1 20 28)" stroke="#141718" stroke-width="2.5"/>
                <circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 34 26)" fill="#141718"/>
                <circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 10 26)" fill="#141718"/>
              </svg>
              <h7 className='text-headline7'>Money-back</h7>
              <p>30 days guarantee</p>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M32 16H16M32 16C36.4183 16 40 19.5817 40 24V36C40 40.4183 36.4183 44 32 44H16C11.5817 44 8 40.4183 8 36V24C8 19.5817 11.5817 16 16 16M32 16V12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12V16M24 32V28" stroke="#141718" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
              <h7 className='text-headline7'>Secure Payments</h7>
              <p>Secured by Stripe</p>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M42 38V34.7081C42 33.0725 41.0042 31.6017 39.4856 30.9942L35.4173 29.3669C33.4857 28.5943 31.2844 29.4312 30.354 31.292L30 32C30 32 25 31 21 27C17 23 16 18 16 18L16.708 17.646C18.5688 16.7156 19.4057 14.5143 18.6331 12.5827L17.0058 8.51444C16.3983 6.99581 14.9275 6 13.2919 6H10C7.79086 6 6 7.79086 6 10C6 27.6731 20.3269 42 38 42C40.2091 42 42 40.2091 42 38Z" stroke="#141718" stroke-width="2.5" stroke-linejoin="round"/>
            </svg>
              <h7 className='text-headline7'>24/7 Support</h7>
              <p>Phone and Email support</p>
            </div>
          </section>
          <section className='absolute left-0 right-0 mx-auto max-w-[90rem] flex flex-wrap'>
            <div className='bg-red-800 flex-grow min-w-[20rem] h-16'></div>
            <div className='bg-green-800 flex-grow min-w-[20rem] h-16'></div>
          </section>
          <section className='absolute left-0 right-0 mx-auto max-w-[90rem] flex flex-wrap'>
            <div className='grow-[1] min-w-[20rem] h-[30rem] bg-red-700'><img className='h-full w-full object-cover' src={breakout1} alt="living room"/></div>
            <div className='bg-[#F3F5F9] grow-[1] min-w-[20rem] h-[30rem]'>
              <p className='text-hairline1 text-palette-blue'>SALE UP TO 35% OFF</p>
              <h1 className='text-headline5'>HUNDERDS OF NEW LOWER PRICES!</h1>
              <p className='text-body2'>It's more affordable than ever to give every room in your home a stylish makeover</p>
              <a className="text-button-xs underline underline-offset-8 mb-auto" href=".">Shop Now ➜</a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
