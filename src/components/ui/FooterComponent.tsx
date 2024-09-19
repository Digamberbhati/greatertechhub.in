"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-doc";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter,  FaLinkedin  } from "react-icons/fa6";
import { IconTarget } from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Instagram",
      icon: (
        <FaSquareInstagram className="h-full w-full text-neutral-500  " />
      ),
      href: "https://www.instagram.com/greatertechhub/",
    
    },

    {
      title: "Facebook",
      icon: (
        <FaFacebook
        className="h-full w-full text-neutral-500  " />
      ),
      href: "https://www.facebook.com/profile.php?id=61557357627522",
    },
    {
      title: "Twitter",
      icon: (
        <FaSquareXTwitter className="h-full w-full text-neutral-500 " />
      ),
      href: "https://x.com/Greatertechhub",
    },
  
    {
      title: "Linkedin",
      icon: (
        <FaLinkedin className="h-full w-full text-neutral-500 " />
      ),
      href: "https://www.linkedin.com/company/greatertechhub/",
    },

    {
      title: "WhatsApp",
      icon: (
        <FaWhatsapp className="h-full w-full text-neutral-500  target:" />
      ),
      href: "https://wa.me/+919588160069",
    
    },

  
  ];
  return (
    <div className="flex items-start justify-start h-[auto] w-full target-blank">
      <FloatingDock
       // mobileClassName="translate-y-10" // only for demo, remove for production
        items={links}
       
      />
    </div>
  );
}
