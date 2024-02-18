"use client";

import { FaUser } from "react-icons/fa";
import { EnterIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LoginButton } from "./login-button";

export const NoUserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback className="bg-sky-500  ">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <LoginButton>
          <DropdownMenuItem>
            <EnterIcon className="mr-2 h-4 w-4" />
            Login
          </DropdownMenuItem>
        </LoginButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
