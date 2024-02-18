"use client";

//Utils
import { NavLinks } from "./routes";

//Components
import { UserButton } from "../auth/user-button";

//UI
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

//Icons
import { MdMenu } from "react-icons/md";
//import { MdMenuOpen } from "react-icons/md"; // Need when making popover trigger change on open

//Hooks
import { useCurrentUser } from "@/hooks/use-current-user";
import { usePathname } from "next/navigation";
import { UserRole } from "@prisma/client";
import { NoUserButton } from "../auth/no-user-button";

export const Navbar = () => {
  const user = useCurrentUser();
  const pathname = usePathname();

  return (
    <nav className=" flex w-full items-center justify-between bg-secondary px-4 py-4 shadow-md sm:mb-4 sm:px-20">
      <div className="sm:hidden">
        <Popover>
          <PopoverTrigger>
            <MdMenu className="text-4xl" />
          </PopoverTrigger>
          <PopoverContent className={"flex flex-col gap-y-4 p-4"} align="end">
            <NavLinks
              pathname={pathname}
              user={user}
              notType={UserRole.ADMIN}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="hidden items-center justify-center gap-x-4 sm:flex sm:flex-row">
        <NavLinks pathname={pathname} user={user} notType={UserRole.ADMIN} />
      </div>

      {user && (
        <div className="flex items-center justify-center gap-x-4">
          {user.role == UserRole.ADMIN && (
            <Popover>
              <PopoverTrigger>
                <span>Admin</span>
              </PopoverTrigger>
              <PopoverContent
                className={"flex flex-col gap-y-4 p-4"}
                align="end"
              >
                <NavLinks
                  pathname={pathname}
                  user={user}
                  onlyType={UserRole.ADMIN}
                />
              </PopoverContent>
            </Popover>
          )}
          <UserButton />
        </div>
      )}
      {!user && (
        <div className="flex items-center justify-center gap-x-4">
          <NoUserButton />
        </div>
      )}
    </nav>
  );
};
