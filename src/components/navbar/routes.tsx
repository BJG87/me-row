import { UserRole } from "@prisma/client";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExtendedUser } from "../../../next-auth";

type Location = {
  href: string;
  label: string;
  type?: UserRole;
  protectedRoute?: boolean;
  onlyAccessibleBy?: UserRole;
};
export const getLocations = () => {
  const locations: Location[] = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/server",
      label: "Server",
      protectedRoute: true,
    },
    {
      href: "/client",
      label: "Client",
      protectedRoute: true,
    },
    {
      href: "/settings",
      label: "Settings",
      protectedRoute: true,
    },
    {
      href: "/admin",
      label: "Admin",
      protectedRoute: true,
      onlyAccessibleBy: UserRole.ADMIN,
      type: UserRole.ADMIN,
    },
  ];

  return locations;
};

export const NavLinks = ({
  user,
  pathname,
  onlyType,
  notType,
}: {
  user?: ExtendedUser;
  pathname: string;
  onlyType?: UserRole;
  notType?: UserRole;
}) => {
  const locations = getLocations();

  return (
    <>
      {locations.map((location) => {
        if (location.protectedRoute && !user) return null;
        if (
          location.onlyAccessibleBy &&
          location.onlyAccessibleBy !== user?.role
        ) {
          return null;
        }
        if (onlyType && onlyType !== location.type) return null;
        if (notType && notType === location.type) return null;

        return (
          <Button
            asChild
            variant={pathname === location.href ? "default" : "outline"}
            key={location.href}
          >
            <Link key={location.href} href={location.href}>
              {location.label}
            </Link>
          </Button>
        );
      })}
    </>
  );
};
