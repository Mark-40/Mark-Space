import {
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export const SOCIAL_LINKS = [
  {
    id: "linkedin",
    icon: <FaLinkedin />,
    name: "LinkedIn",
    link: "https://linkedin.com/in/mark-manzanilla",
  },
  {
    id: "whatsapp",
    icon: <FaWhatsapp />,
    name: "WhatsApp",
    link: "whatsapp://send?phone=+639156946464&text=Hello",
  },
  {
    id: "email",
    icon: <FaEnvelope />,
    name: "Email",
    link: "mailto:arrolle14@gmail.com",
  },
];
