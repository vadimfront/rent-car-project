import React from "react";
import { CiHeart } from "react-icons/ci";
import { Button } from "@chakra-ui/react";

export const LikeBtn = ({ iconName, onClick, color, ...props }) => {
  return (
    <Button
      {...props}
      onClick={onClick}
      backgroundColor="transparent"
      _hover={{ backgroundColor: "transparent" }}
    >
      <CiHeart size="24px" color={color} />
    </Button>
  );
};
