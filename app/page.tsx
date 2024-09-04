
import AboutUs from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Navbar";
import {   Portfolio } from "@/components/Portfolio";
 
import Services from "@/components/Services";

import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Header/>
    
<section id="home" className="pb-0"><Banner/></section>
<section id="Services"><Services/></section>
<section id="Portfolio"><Portfolio/></section>
<section id="about-us"><AboutUs/></section>
  <section id="contact-us"> <Contact/></section>  

 <section> <Footer/></section>
    
  </div>
  );
}
