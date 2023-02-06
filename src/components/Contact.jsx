import React from "react";

const ContactUs = () => (

  <div className="h-screen w-full grid place-items-center">
    <div className="bg-black/10 rounded-md shadow-md flex flex-row">
        <div className="bg-white/10 p-8  md:hover:scale-y-110 rounded-md transition md:block id='contact_info hidden lg:visible'">
            <div className="flex justify-between">
                <h2 className="text-white text-xl">Contact Information</h2>
                <h2 class="text-white text-xs flex flex-row md:hidden block cursor-pointer" id="switch_to_contact_us">Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 ml-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
</h2>
            </div>

            <div className="mt-6 flex flex-row">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-white text-xs">Name: </h2>
                    <p className="text-white text-xs">Mohammed Patel
                    </p>
                </div>

            </div>

            <div className="mt-6 flex flex-row">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
</svg>

                </div>
                <div>
                    <h2 className="text-white text-xs">Email: </h2>
                    <p className="text-white text-xs">muapchauffeurs@gmail.com
                    </p>
                </div>

            </div>

            <div className="mt-6 flex flex-row">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mr-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>

                </div>
                <div>
                    <h2 className="text-white text-xs">Phone: </h2>
                    <p className="text-white text-xs">+447872055738
                    </p>
                </div>

            </div>


        </div>

        <div id='contact_us' className="px-6 py-8">
                <div className="flex justify-between">
                    <h2 className="text-white text-xl">Get In Touch</h2>
                    <h2 class="text-white text-xs flex flex-row md:hidden block cursor-pointer" id="switch_to_contact_us">Contact Info
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 ml-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>


</h2>
                </div>

                <input type="text" placeholder="Enter Your Name" className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadoww-sm"></input><br></br>
                <input type="text" placeholder="Enter Your Email" className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadoww-sm"></input><br></br>
                <input type="text" placeholder="Subject" className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadoww-sm"></input><br></br>
                <textarea placeholder="Enter Your Message Here" className="w-full text-xs px-3 py-2 h-20 my-2 outline-none rounded-md border focus:shadoww-sm resize:none"></textarea><br></br>
                <input type="submit" value="Send" className="bg-white/10 px-4 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md"></input>

            </div>
    </div>
  </div>
  
);
export default ContactUs;




