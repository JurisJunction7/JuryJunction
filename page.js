"use client"
import React, { useEffect,useState  } from 'react';
import "./home.css";
import Link from 'next/link';


const Home = () => {

  useEffect(() => {
   
    // function isInViewport(element) {
    //     var rect = element.getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }


    // function addAnimationClass() {
    //     var aboutSection = document.querySelector('.about-section');
    //     // if (isInViewport(aboutSection)) {
    //     //     aboutSection.classList.add('animate');
    //     // }
    // }


    // // addAnimationClass();

    // window.addEventListener('scroll', function() {
    //     addAnimationClass();
    // });

 
    // var lastScrollTop = 0;
    // window.addEventListener('scroll', function() {
    //     var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    //     if (currentScroll > lastScrollTop) {
     
    //         var aboutSection = document.querySelector('.about-section');
    //         if (isInViewport(aboutSection)) {
    //             aboutSection.classList.add('scroll-down');
    //         }
    //     } else {
        
    //         var aboutSection = document.querySelector('.about-section');
    //         if (isInViewport(aboutSection)) {
    //             aboutSection.classList.add('scroll-up');
    //         }
    //     }
    //     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
    // });

   
    // return () => {
    //   window.removeEventListener('scroll', addAnimationClass);
    //   // window.removeEventListener('scroll', onScroll);
    // };
  }, []);

  const [selected, setselected] = useState("client")
    const handleSelectChange = (value) => {
      setselected(value);
    }

  return (
    <div>
          <nav>
        <ul>
    
          <li><Link href="/">JurisJunction</Link></li> 
           <li><Link href="#about">About Us</Link></li>
          <li><Link href="#team">Team</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          {/* <li><Link href="#findlawyer">Find Link Lawyer</Link></li>  */}
           {/* <li> 
            <div className="search-container">
              <form action="/search" method="get">
                <input type="text" placeholder="Search..." name="search"/>
                <button type="submit">Search</button>
              </form>
            </div>
          </li> */}

       
        </ul>
        <div className="buttons">
        <select className='switch' onChange={(e) => handleSelectChange(e.target.value)}>
        <option value="client">Switch to Client</option>
        <option value="lawyer">Switch to Lawyer</option>
      </select >

      <Link  href={selected === "client" ? "./client/login" : "./Advocate/login"}>
        <button>Login</button>
      </Link>
          <Link href={selected === "client" ? "./client/register" : "./Advocate/register"}>
        <button>Sign Up</button>
      </Link>

        </div>
      </nav>    

      <section id="intro" className="intro-section">
        <div className="content">
          <h1>JurisJunction</h1>
          <p>Your premier destination for legal matchmaking</p>
          <p>Connecting you with the right lawyer</p>
        </div>
      </section>

      <h2 className="heading2">Some of our top rated lawyers</h2>
      <div className="profiles-container">
        <div className="profile-card">
          <img src="https://img.freepik.com/free-photo/medium-shot-man-working-as-lawyer_23-2151054001.jpg?t=st=1712862571~exp=1712866171~hmac=304b46862c7b92b7879f1a02f5f117889410a01c140a16fc547341dfabe65479&w=740" alt="Lawyer 1"/>
          <h3>Johnny Smith</h3>
          <p>Specialization: Corporate Law</p>
          <p>Experience: 12 years</p>
          <Link href="#">View Profile</Link>
        </div>
        <div className="profile-card">
          <img src="https://img.freepik.com/free-photo/photorealistic-lawyer-day-celebration_23-2151053980.jpg?t=st=1712864697~exp=1712868297~hmac=8e26ee801fe827cef36dae435fa4c4b50085eae9cd63967bb47614930fda9e8e&w=996" alt="Lawyer 2"/>
          <h3>John Doe</h3>
          <p>Specialization: Corporate Law</p>
          <p>Experience: 15 years</p>
          <Link href="#">View Profile</Link>
        </div>
        <div className="profile-card">
          <img src="https://img.freepik.com/free-photo/medium-shot-man-working-as-lawyer_23-2151054084.jpg?t=st=1712864750~exp=1712868350~hmac=b360654cc2e3e732a5774ea90869ce8730da273380958b1d981e4d4d5081387a&w=996" alt="Lawyer 3"/>
          <h3>Jane Smith</h3>
          <p>Specialization: Criminal Law</p>
          <p>Experience: 10 years</p>
          <Link href="#">View Profile</Link>
        </div>
      </div>

      <section id="about" className="about-section">
        <div className="content">
          <div className="about-text">
            <h2>About Us</h2>
            <p>Gone are the days of endless searches and uncertainty. With JurisJunction, users can simply create Link profile outlining their legal requirements and preferences. Whether you're seeking advice for Link personal injury claim, drafting Link will, or navigating Link complex business dispute, our platform will match you with the ideal lawyer who specializes in your specific area of concern.
              Our extensive network of qualified attorneys ensures that you'll find the perfect legal representation tailored to your individual needs. From experienced litigators to skilled negotiators, JurisJunction connects you with the right lawyer to champion your case and protect your rights.
              Say goodbye to legal stress and confusion. Join JurisJunction today and take the first step towards resolving your legal matters with confidence and peace of mind. Your journey to justice starts here, at JurisJunction where law meets convenience.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="content">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <section id="flex" className="flex_section">
        <div className="flex-section">
          <h1>WHY CONTACT US?</h1>
          <div className="flex1">
            <h3>Experienced</h3>
            <p>A team of lawyers with extensive experience and Link proven track record of success. So, "Looking for legal expertise? Our website connects you with experienced lawyers ready to assist. Get the guidance you need, hassle-free!"</p>
          </div>  
          <div className="flex2">  
            <h3>Approachable</h3>
            <p>A focus on results, with Link no-nonsense approach to getting clients the best possible outcome. "Navigate legal matters with ease! Our approachable website makes connecting with experienced lawyers Link seamless experience. Your legal solutions are just Link click away."</p>
          </div>    
          <div className="flex3">
            <h3>Affordable</h3>
            <p>Affordable and flexible fee structures, including contingency and flat-fee arrangements. "Seeking quality legal advice without breaking the bank? Our website offers affordable access to experienced lawyers, making legal assistance accessible to everyone. Explore our budget-friendly options today!"</p>
          </div>
        </div>
      </section>

      <section id="team" className="team-section">
        <div className="content">
          <h2>Meet Our team</h2>
          <div className="team-members">
            <div className="member">
             
              <h3>Shourya Mishra</h3>
              <p>info</p>
            </div>
            <div className="member">
        
              <h3>Shambhavi Kejriwal</h3>
              <p>info</p>
            </div>
            <div className="member">
           
              <h3>Vansh Tyagi</h3>
              <p>info</p>
            </div>
            <div className="member">
             
              <h3>Vatsal Baranwal</h3>
              <p>info</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 JurisJunction. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default Home;
