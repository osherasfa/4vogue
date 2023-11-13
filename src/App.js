import placeHolder2 from "./assets/imgPlaceholder2.png"
import placeHolder3 from "./assets/imgPlaceholder3.png"
import placeHolder4 from "./assets/imgPlaceholder4.png"
import ticketPercent from "./assets/ticket-percent.svg"

function App() {
  return (
    <div className="App">
      <div className="text-caption2-semi text-[#343839] bg-neutral-200 text-center py-2 flex justify-center items-center">
        <img src={ticketPercent} alt="ticket percent" />
        <h1 className="mr-6 ml-2">30% off storewide — Limited time! </h1>
        <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.942 1.442a.625.625 0 0 0-.884-.884L5.5 4.116 1.942.558a.625.625 0 1 0-.884.884L4.616 5 1.058 8.558a.625.625 0 1 0 .884.884L5.5 5.884l3.558 3.558a.625.625 0 1 0 .884-.884L6.384 5l3.558-3.558Z" fill="#343839"/>
        </svg>
      </div>

      <div className="h-[100rem] mx-8 font-inter">
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
        <main>
          <section >
            <div className="h-[20rem] bg-image-placeholder bg-cover bg-center bg-bottom"></div>
            <h1 className="text-headline4 tracking-[-0.025rem] leading-[2.75rem] mt-8">Simply Unique<span className="text-neutral-700">/</span><br/> Simply Better<span className="text-neutral-700">.</span></h1>
            <p className="text-neutral-700 text-caption1 mt-4 mb-10"><span className="text-neutral-800 text-caption1-semi">4Vouge</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
          </section>
          <section>
            <ul className="flex flex-wrap gap-4 bg-blue-950">
              <div className="bg-[#F3F5F7] max-w-[23.5625rem] flex-[2] flex flex-col px-8 pt-8">
                <h6 className="text-headline6">Living Room</h6>
                <a className="text-button-xs underline underline-offset-8 mb-auto" href=".">Shop Now ➜</a>
                <img src={placeHolder2} alt="armchair" />
              </div>
              <div className="bg-[#F3F5F7] max-w-[11.78125rem] flex-1 flex px-8 pt-8">
                <div className="bg-purple-600">
                  <h6 className="text-headline6">Living Room</h6>
                  <a className="text-button-xs underline underline-offset-8 mb-auto" href=".">Shop Now ➜</a>
                </div>
                <img className="w-fit" src={placeHolder4} alt="armchair" />
              </div>
              <div className="bg-[#F3F5F7] max-w-[11.78125rem] flex-1 flex px-8 pt-8">
                <div className="bg-yellow-600">
                  <h6 className="text-headline6">Living Room</h6>
                  <a className="text-button-xs underline underline-offset-8 mb-auto" href=".">Shop Now ➜</a>
                </div>
                <img className="w-full" src={placeHolder3} alt="armchair" />
              </div>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
