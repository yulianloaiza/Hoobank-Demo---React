import { arrowUp, robot,  } from "../../assets";
import InlinePromo from "../../components/InlinePromo/InlinePromo";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="section" id="firstSection">
      <div className="hero--Divider">
        <div className="hero--leftHero">
          {/* 3 columns */}
          <InlinePromo/>
          <div className="hero--InlineCTA">
            <p className="hero--title">The Next 
              <span className="hero__title--lbGradient gradientText"> Generation </span>
            Payment Method.</p>            
            
            <div className="hero--borderColor">
              <div className="hero--lbCircle">
                <p className="hero__lbCircle--p gradientText">
                  Get&nbsp; 
                  <img src={arrowUp} className='hero__lbCircle--arrow' alt="Pointing arrow" />                       
                </p>
                <p className="hero__lbCircle--p gradientText" style={{marginTop:'0px'}}>
                  Started              
                </p>
             </div>
            </div>
          </div>
          <p className="hero--openingP">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates and
            annual fees.
          </p>          
        </div>
        <div className="hero--rightHero">
            <img src={robot} className='hero--img' alt='credit card'/>
        </div>        
      </div>
        <div className="hero--socialProof">
            <p className="hero--proofHighlight">3800+ <span className="hero--prooflbGradient gradientText">Active Users </span> </p>
            <p className="hero--proofHighlight">230+ <span className="hero--prooflbGradient gradientText">Companies </span> </p>
            <p className="hero--proofHighlight">$230M+ <span className="hero--prooflbGradient gradientText">Transactions </span> </p>
         </div>  
    </div>
  );
};

export default Hero;
