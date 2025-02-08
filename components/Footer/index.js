import { Container } from ".."
import { FaTwitter, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { AiFillMail, AiFillPhone } from "react-icons/ai"

import { socials } from "../../data/socials.json"
import usersInfo from "../../data/usersInfo.json"

function Footer() {

  return (
    <div id="footer" className="relative w-screen h-[35vh] py-5 px-3 bg-dark-300 ">
      <Container>

        <div className="relative flex flex-row items-center justify-between">

          <div className="left flex flex-row">
            <h1 className=" text-[15px] ">
              <span className="font-extrabold">{usersInfo.github_username}</span>
            </h1>
            <small className="ml-[20px] text-white-200 ">
              &copy; {new Date().getFullYear()} All Right Reserved.
            </small>
          </div>  

          <div className="right">
            <div className="socials flex flex-row items-center justify-center">
              {socials["twitter"] !== "" && <SocialLink url={socials["twitter"]} children={<FaTwitter />} />}

              {socials["github"] !== "" && <SocialLink url={socials["github"]} children={<FaGithub />} />}

              {socials["email"] !== "" && <SocialLink url={socials["email"]} children={<AiFillMail />} />}

              {socials["facebook"] !== "" && <SocialLink url={socials["facebook"]} children={<FaFacebook />} />}
            </div>

          </div>

        </div>
      </Container>

      <div className="flex flex-wrap mt-32 justify-center gap-6">
            <a href="mailto:mrmishramayank2005@gmail.com" 
               className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
              <AiFillMail className="w-5 h-5 text-indigo-400" />
              <span>Email</span>
            </a>
            <a href="tel:+918423137171"
               className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
              <AiFillPhone className="w-5 h-5 text-indigo-400" />
              <span>Phone</span>
            </a>
            <a href="https://www.linkedin.com/in/mayank-mishra-5372112ab"
               target="_blank"
               className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
              <FaLinkedin className="w-5 h-5 text-indigo-400" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/M-ayank2005"
               target="_blank"
               className="flex items-center space-x-3 text-gray-300 hover:text-white transition">
              <FaGithub className="w-5 h-5 text-indigo-400" />
              <span>GitHub</span>
            </a>
          </div>

      <Refer />
    </div>
  )
}

export default Footer

function SocialLink({ url, children }) {

  return (
    <a href={url} target="_blank" className=" no-underline text-white-100 decoration-none hover:text-white-100 mr-4 ">
      {children}
    </a>
  )
}

function Refer() {
  return (
    <div className="w-screen flex flex-row items-center justify-center absolute bottom-[100px] mx-auto md:bottom-[10px]">
      <span className="py-2 text-[12px] text-white-200 ">
        Build with 💖 by <a target="_blank" href="https://github.com/M-ayank2005" className="text-green-200 underline hover:text-green-200">Mayank</a>
      </span>
    </div>
  )
}