import * as React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { SiHackthebox } from "react-icons/si"
import { PiYoutubeLogoFill } from "react-icons/pi"

export const icons = [
    { 
        name: <FaLinkedin size={30} />,
        href: 'https://www.linkedin.com/in/daniel-newton-dev/'
    },
    { 
        name: <FaGithub size={30} />,
        href: 'https://github.com/dan0005/'
    },
    {
        name: <SiHackthebox size={30} />,
        href: 'https://app.hackthebox.com/'
    },
    {
        name: <PiYoutubeLogoFill size={30} />,
        href: 'https://www.youtube.com/'
    }
]