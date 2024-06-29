import React from 'react';
import { Typography, Button } from "@material-tailwind/react";
import { Sparkles, LocationOn, Settings, Cancel, Autorenew, VerifiedUser } from '@mui/icons-material';

const features = [
    {
      icon: <Sparkles sx={{ fontSize: 48, color: '#2196F3' }} />,
      title: "Finest-quality products",
      description: "Quality matters to you, and us! That's why we do a strict quality-check for every product."
    },
    {
      icon: <LocationOn sx={{ fontSize: 48, color: '#4CAF50' }} />,
      title: "Free relocation",
      description: "Changing your house or even your city? We'll relocate your rented products for free."
    },
    {
      icon: <Settings sx={{ fontSize: 48, color: '#FFC107' }} />,
      title: "Free maintenance",
      description: "Keeping your rented products in a spick and span condition is on us, so you can sit back and relax."
    },
    {
      icon: <Cancel sx={{ fontSize: 48, color: '#F44336' }} />,
      title: "Cancel anytime",
      description: "Pay only for the time you use the product and close your subscription without any hassle."
    },
    {
      icon: <Autorenew sx={{ fontSize: 48, color: '#9C27B0' }} />,
      title: "Easy return on delivery",
      description: "If you don't like the product on delivery, you can return it right away—no questions asked."
    },
    {
      icon: <VerifiedUser sx={{ fontSize: 48, color: '#E91E63' }} />,
      title: "Keep upgrading",
      description: "Bored of the same product? Upgrade to try another, newer design and enjoy the change!"
    },
  ];
  