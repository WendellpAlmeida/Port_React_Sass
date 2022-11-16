import{FaLinkedinIn, FaGithub} from 'react-icons/fa';

import '../styless/components/socialnetworks.sass';

const socialnetworks =[
    { name: "linkedin", icon: <FaLinkedinIn/> },
    { name: "github", icon: <FaGithub/> }
    ]

const SocialNetworks = () => {
  return <section id= "social-networks"> 
    {socialnetworks.map((network)=>(
        <a href="#" className='social-btn' id={ network.name} key={network.name}>
        {network.icon}
        </a>
    ))}
  </section>
}

export default SocialNetworks