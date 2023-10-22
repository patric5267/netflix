
import netflix from './images/netflix.png'
import './App.css'
import strange2 from './images/strange2.jpg'
import kids2 from './images/kids2.png'
import { useState } from 'react'

function App() {
  const [q1, setQ1] = useState(false)
  const [q2, setQ2] = useState(false)
  const [q3, setQ3] = useState(false)
  const [q4, setQ4] = useState(false)
  const [q5, setQ5] = useState(false)
  const [q6, setQ6] = useState(false)

  return (
    <div>
       <div className="topnavbar  md:block bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-no-repeat bg-cover  w-full h-[100vh]  lg:h-[30rem] xl:h-[39rem] ">
        <div className="innernav w-full h-full bg-[#00000099] flex flex-col">
          <div className="navitemcon w-full h-14 lg:h-20 flex items-center justify-between">
            <div className="imagecon w-1/2 h-full flex justify-start items-center  lg:justify-center xl:justify-start lg:pr-32">
              <div className="innerimg h-full w-14 lg:w-20 rounded ml-3 flex justify-center items-center ">
                <img src={netflix} alt="" className=' h-full' />
              </div>
            </div>
            <div className="righrcon w-1/2 h-full flex items-center justify-end lg:justify-center xl:justify-end lg:pl-32">
              <button className=' border-[1px] border-gray-400 lg:mr-3 rounded border-solid  h-7 w-10 lg:h-9 lg:w-16  mr-1 flex items-center justify-evenly'>
                <p className=' text-xs font-semibold text-white lg:text-base'>A</p>
                <span className="material-symbols-outlined text-white text-xs lg:text-base">
                  expand_more
                </span>
              </button>
              <button className=' bg-red-600 text-white rounded text-xs w-16 h-7 lg:h-9 lg:w-20 lg:text-base font-semibold mr-4 tracking-wider'>Sign In</button>
            </div>
          </div>
          {/* for phone */}
          <div className="description lg:hidden tracking-wide w-fu h-full flex flex-col place-items-center justify-center ">
            <h2 className=' text-white  text-center font-bold text-2xl md:text-5xl  xl:text-5xl lg:leaading-[10rem]'>Laughter. Tears. Thrills.<br />Find it all on netflix</h2>
            <p className=' text-white text-center text-sm py-4 md:text-2xl lg:text-lg xl:text-xl'>Endless entertainment starts at just ₹149.<br />Cancel anytime</p>
            <p className=' text-white text-center text-sm pb-3 md:text-xl lg:text-lg xl:text-xl'>Ready to watch? Enter your email to<br /> create or restart your membership.</p>
            <div className="inputcon w-full flex justify-center">
              <input type="text" placeholder='Email address' className='rounded outline-none w-56 md:w-64 xl:w-64 h-9 bg-[#0000009e] border-[1px] border-gray-400 pl-3' />
            </div>
            <div className="btncon w-full flex justify-center">
              <button className=' bg-red-600 text-white flex mb-4 mt-4 justify-center items-center  rounded text-sm font-medium w-32 h-8'>
                <p>Get Started</p>
                <span className="material-symbols-outlined">
                  chevron_right
                </span>
              </button>
            </div>


          </div>
          {/* for above phone */}
          <div className="description hidden lg:flex w-full h-full  justify-center text-white pt-24">
            <div className="innerdesc w-[47rem] xl:w-[65rem]">
              <h1 className=' text-center text-4xl  xl:text-5xl font-extrabold tracking-wide ' data-aos="zoom-in" data-aos-duration="1000" data-aos-easingdata-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="50"
              >The biggest Indian hits. The best Indian stories. All streaming here.</h1>
              <p className='text-center text-2xl py-4 tracking-wide'>Watch anywhere. Cancel anytime</p>
              <p className='text-center text-xl tracking-wide'>Ready to watch? Enter your email to create or restart your membership.</p>
              <div className="getstarted flex justify-center mt-6">
                <input type="text" placeholder='Email address' className='rounded outline-none border-2 border-green-500 border-solid mr-2 w-80 pl-3 bg-slate-200 xl:w-96' />
                <button className=' flex bg-red-600 tracking-wider text-white rounded w-44 h-12 items-center justify-center font-semibold text-lg'>
                  <p>Get started</p>
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="netitem bg-black w-full flex flex-col lg:h-[34rem]">
        <div className="line w-full bg-gray-400 h-2"></div>
        <div className="tv w-full  lg:h-full place-items-center flex flex-col text-white px-9 lg:flex-row  lg:justify-center lg:p-0" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="50"
          data-aos-duration="1000">
          <div className="item1  py-14 tracking-wide lg:py-0   lg:flex lg:flex-col lg:place-items-evenly lg:justify-center sm:px-7 lg:p-0 lg:h-full" >
            <h2 className='text-center font-bold text-3xl lg:text-left lg:text-5xl lg:px-16'
            >Enjoy on your TV</h2>
            <div className="text-center mt-6 lg:text-left lg:text-xl  lg:px-16">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
            </div>
          </div>
          <div className="item2 pb-14  lg:pb-0  lg:flex   lg:justify-center xl:place-items-center lg:px-20">
            <img src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=' sm:w-72 xl:w-[34rem] lg:w-[42rem] lg:h-80 rounded' />
          </div>
        </div>
      </div>

      <div className="netitem bg-black w-full flex flex-col lg:h-[34rem]">
        <div className="line w-full bg-gray-400 h-2"></div>
        <div className="tv w-full  lg:h-full place-items-center flex flex-col text-white px-9 lg:flex-row  lg:justify-center lg:p-0" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="50"
          data-aos-duration="1000">
          <div className="item1  py-14 tracking-wide lg:py-0 order-last  lg:flex lg:flex-col lg:place-items-evenly lg:justify-center sm:px-7 lg:p-0 lg:h-full">
            <h2 className='text-center font-bold text-3xl lg:text-left lg:text-5xl lg:px-16'>Download your shows to watch offline</h2>
            <div className="text-center mt-6 lg:text-left lg:text-xl  lg:px-16">
              Save your favourites easily and always have something to watch.
            </div>
          </div>
          <div className="item2 py-9  lg:py-0 lg:h-full lg:flex    lg:justify-center lg:place-items-center lg:px-28">
            <img src={strange2} alt="" className=' sm:w-72 xl:w-[27rem] lg:w-[32rem] lg:h-[85%] xl:h-[30rem] rounded' />
          </div>
        </div>
      </div>
      <div className="netitem bg-black w-full flex flex-col lg:h-[34rem]">
        <div className="line w-full bg-gray-400 h-2"></div>
        <div className="tv w-full  lg:h-full place-items-center flex flex-col text-white px-9 lg:flex-row  lg:justify-center lg:p-0" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="50"
          data-aos-duration="1000">
          <div className="item1  py-14 tracking-wide lg:py-0   lg:flex lg:flex-col lg:place-items-evenly lg:justify-center sm:px-7 lg:p-0 lg:h-full">
            <h2 className='text-center font-bold text-3xl  lg:text-left lg:text-5xl lg:pl-16'>Watch everywhere</h2>
            <div className="text-center mt-6 lg:text-left lg:text-xl  lg:px-16">
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </div>
          </div>
          <div className="item2 pb-14  lg:pb-0  lg:flex    lg:justify-center xl:place-items-center lg:px-20">
            <img src="https://images.unsplash.com/photo-1621360241137-8704e6f51528?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=' sm:w-72 xl:w-[34rem] lg:w-[42rem] lg:h-80 rounded' />
          </div>
        </div>
      </div>
      <div className="netitem bg-black w-full flex flex-col lg:h-[34rem]">
        <div className="line w-full bg-gray-400 h-2"></div>
        <div className="tv w-full  lg:h-full place-items-center flex flex-col text-white px-9 lg:flex-row  lg:justify-center lg:p-0" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="50"
          data-aos-duration="1000">
          <div className="item1    pb-14 tracking-wide lg:pb-0 order-last  lg:flex lg:flex-col lg:place-items-evenly lg:justify-center sm:px-7 lg:p-0 lg:h-full">
            <h2 className='text-center font-bold text-3xl lg:text-left lg:text-5xl lg:pl-9'>Create profiles for kids</h2>
            <div className="text-center mt-6 lg:text-left lg:text-xl  lg:pl-9 lg:pr-20 xl:pr-32">
              Send children on adventures with their favourite characters in a space made just for them—free with your membership.
            </div>
          </div>
          <div className="item2 py-9 x  lg:py-0 lg:h-full lg:flex    lg:justify-center lg:place-items-center lg:px-28">
            <img src={kids2} alt="" className=' sm:w-72 xl:w-[44rem] lg:w-[47rem] lg:h-[28rem] xl:h-[30rem] rounded' />
          </div>
        </div>
      </div>
      <div className="netitem bg-black w-full flex flex-col ">
        <div className="line w-full bg-gray-400 h-2"></div>
        <div className="questioncon w-full py-10  text-white flex flex-col place-items-center">
          <h2 className=' text-3xl text-center font-bold tracking-wider px-5 '>Frequently Asked Questions</h2>
          <div className='quesbox  w-[84%] mt-6'>
            <div className="q1 w-full  rounded  tracking-wide text-lg mb-3">
              <div className="title flex justify-between py-5 bg-gray-700 px-2">
                <p>What is Netflix?</p>
                {q1 ? <span className="material-symbols-outlined cursor-pointer" onClick={() => setQ1(false)}>
                  close
                </span> : <span className="material-symbols-outlined cursor-pointer" onClick={() => setQ1(true)}>
                  add
                </span>}
              </div>
              {q1 && <div className="titleanswer bg-gray-600 ">
                <p className='  px-2 py-4'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
              </div>}
            </div>
            <div className="q1 w-full  rounded  tracking-wide text-lg mb-3">
              <div className="title flex justify-between py-5 bg-gray-700 px-2">
                <p>How much does Netflix cost?</p>
                {q2 ? <span className="material-symbols-outlined cursor-pointer" onClick={() => setQ2(false)}>
                  close
                </span> : <span className="material-symbols-outlined cursor-pointer" onClick={() => setQ2(true)}>
                  add
                </span>}
              </div>
              {q2 && <div className="titleanswer bg-gray-600 ">
                <p className='  px-2 py-4'>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
              </div>}
            </div>
            <div className="q1 w-full  rounded  tracking-wide text-lg mb-3">
              <div className="title flex justify-between py-5 bg-gray-700 px-2">
                <p>Where can I watch?</p>
                {q3 ? <span className="material-symbols-outlined cursor-pointer" onClick={() => setQ3(false)}>
                  close
                </span> : <span className="material-symbols-outlined cursor-pointer" onClick={() => setQ3(true)}>
                  add
                </span>}
              </div>
              {q3 && <div className="titleanswer bg-gray-600 ">
                <p className='  px-2 py-4'>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
              </div>}
            </div>
            <div className="q1 w-full  rounded  tracking-wide text-lg mb-3">
              <div className="title flex justify-between py-5 bg-gray-700 px-2">
                <p>How do I cancel?</p>
                {q4 ? <span className="material-symbols-outlined cursor-pointer" onClick={() => setQ4(false)}>
                  close
                </span> : <span className="material-symbols-outlined cursor-pointer" onClick={() => setQ4(true)}>
                  add
                </span>}
              </div>
              {q4 && <div className="titleanswer bg-gray-600 ">
                <p className='  px-2 py-4'>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
              </div>}
            </div>
            <div className="q1 w-full  rounded  tracking-wide text-lg mb-3">
              <div className="title flex justify-between py-5 bg-gray-700 px-2">
                <p>What can I watch on Netflix?</p>
                {q5 ? <span className="material-symbols-outlined cursor-pointer" onClick={() => setQ5(false)}>
                  close
                </span> : <span className="material-symbols-outlined cursor-pointer" onClick={() => setQ5(true)}>
                  add
                </span>}
              </div>
              {q5 && <div className="titleanswer bg-gray-600 ">
                <p className='  px-2 py-4'>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
              </div>}
            </div>
            <div className="q1 w-full  rounded  tracking-wide text-lg mb-3">
              <div className="title flex justify-between py-5 bg-gray-700 px-2">
                <p>Is Netflix good for kids?</p>
                {q6 ? <span className="material-symbols-outlined cursor-pointer" onClick={() => setQ6(false)}>
                  close
                </span> : <span className="material-symbols-outlined cursor-pointer" onClick={() => setQ6(true)}>
                  add
                </span>}
              </div>
              {q6 && <div className="titleanswer bg-gray-600 ">
                <p className='  px-2 py-4'>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
              </div>}
            </div>
          </div>
        </div>
      </div>
      <div className="line w-full bg-gray-400 h-2"></div>
      <div className="netitem bg-black w-full flex justify-center place-items-center md:h-72 lg:h-80">
        <div className="footercon text-gray-300  w-11/12 py-7  ">
          <h2 className=' font-semibold text-base tracking-wider'>Questions? Call 000-800-919-1694</h2>
          <div className="innerfooter w-full flex flex-col md:flex-row md:justify-between   mt-5 text-sm lg:text-lg tracking-wide">
            <div className="f1 underline py-4 md:py-0">
              <div className=' mb-2 '>FAQ</div>
              <div className=' mb-2 '>Invesetor Relations</div>
              <div className=' mb-2 '>Privacy</div>
              <div className=' mb-2 '>Speed Test</div>
            </div>
            <div className="f1 underline py-2">
              <div className=' mb-2 '>Help centre</div>
              <div className=' mb-2 '>Jobs</div>
              <div className=' mb-2 '>Cookie Preference</div>
              <div className=' mb-2 '>Legal Notices</div>
            </div>
            <div className="f1 underline py-2">
              <div className=' mb-2 '>Account</div>
              <div className=' mb-2 '>Ways to Watch</div>
              <div className=' mb-2 '>Corporate Information</div>
              <div className=' mb-2 '>Only on Netflix</div>
            </div>
            <div className="f1 underline py-2">
              <div className=' mb-2 '>Media Centre</div>
              <div className=' mb-2 '>Terms of Use</div>
              <div className=' mb-2 '>Contact Us</div>
            </div>
          </div>
          <div className="netflix text-gray-300">
            Netflix India
          </div>
        </div>
      </div>
    </div>
  )
}


export default App
