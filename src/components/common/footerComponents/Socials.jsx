import React from "react";
import { Box, Typography, Chip, Button } from "@mui/material";
import { MdOutlineMail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import { contacts } from "@/data/footer";

const Socials = () => {
  const socialIcons = (item) => {
    switch (item) {
      case "Email":
        return <MdOutlineMail />;
      case "Discord":
        return <FaDiscord />;
      case "LinkedIn":
        return <FaLinkedin />;
      case "Twitter":
        return <FaXTwitter />;
      case "Telegram":
        return <FaTelegramPlane />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Chip
        sx={{
          bgcolor: "#fff",
          fontSize: "18px",
          fontFamily: "Outfit",
          color: "#3772FF",
          padding: "5px 10px",
          mb: "20px",
        }}
        label="Contacts"
      />
      {contacts.map((contact) => (
        <Box key={contact.id} sx={{ cursor: "pointer" }}>
          <Button
            component={Link}
            href={
              contact.social === "Email"
                ? `mailto:${contact.link}`
                : contact.link
            }
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textTransform: "capitalize",
              m: 0,
              p: 0,
              color: "#fff",
              height: {xs:"40px", md:"auto"},
            }}
          >
            <Box sx={{ fontSize: 25, mr: 1, pt: 1 }}>
              {socialIcons(contact.social)}
            </Box>
            <Typography
              variant="body"
              sx={{
                fontSize: { xs: "15px", md: "25px" },
              }}
            >
              {contact.social}
            </Typography>
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Socials;
