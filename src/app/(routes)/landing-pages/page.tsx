import {
Typography,
ContactForm
}

from "@/(components)"
const  paragraphs = [
  "Are you curious about your ancestry and looking to delve into the depths of your genetic history? Lifenity offers advanced DNA testing services that will unlock the secrets of your past and empower you with valuable insights into your present and future.",
    "Discover the Lifenity Difference:",
      "🔬 Accurate & Comprehensive Analysis: Our cutting-edge DNA testing technology ensures precise and detailed results, leaving no questions unanswered.",
        "🛡️ Privacy & Security: Your data is safe with us. We adhere to strict privacy protocols, and your information will never be shared without your consent.",
	  "📜 Rich Historical Context: Travel back in time and learn how your ancestors' stories have shaped your unique identity today.",
	    "🌐 Global Database: Connect with relatives you never knew existed and create bonds with people from around the world.",
	      "🚀 Scientifically Proven: Lifenity's DNA testing is based on robust scientific research, offering you the most reliable and accurate results.",
	        "Explore Our Services:",
		  "🧬 Ancestry DNA Test: Unravel your ethnic origins, trace migration patterns, and discover connections to diverse populations.",
		    "👶 Paternity DNA Test: Strengthen family bonds with the confidence of knowing your biological relationship.",
		      "🌡️ Health DNA Test: Gain valuable insights into potential genetic health risks and take proactive steps for a healthier life.",
		        "💕 Relationship DNA Test: Confirm biological relationships with siblings, grandparents, and other family members.",
			  "📜 Custom DNA Test: Tailor your DNA test to focus on specific aspects of your genetic heritage.",
			    "Ready to Begin Your Journey of Discovery?",
			      "🎁 Special Offer: Avail a 10% discount on your first DNA test by using the code \"LIFENITY10\" at checkout.",
			        "🌟 100% Satisfaction Guarantee: We are confident in the accuracy and quality of our tests. If you are not satisfied, we offer a full refund.",
				  "🔍 Simple & Easy Process: Our at-home DNA collection kit makes the process quick, painless, and convenient.",
				    "🚚 Worldwide Shipping: Wherever you are, we'll deliver the kit to your doorstep."
				    ];



export default function  Page(){

return (
<div className=" w-full justisfy-center items-center">

<Typography variant ="h2" className ="text-bold text-center ">

 Lifenity DNA Testing Services
</Typography>

<Typography variant ="h3" 
className = "text-semibold"

>


Uncover Your Genetic Heritage - Embrace Your Identity

</Typography>

<div className="container mx-auto p-4">
      {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4">
	                {paragraph}
			        </p>
				      ))}
 </div>

<ContactForm />



<div className="container">


<Typography variant = "p" >
🌐 Learn more about us and our services: 

<a href="https://www.lifenity.ae">www.lifenity.ae</a>

</Typography>


<Typography variant = "p" >
Join the Lifenity Community and Unearth Your Genetic Story!
</Typography>

</div>
</div>)

}
