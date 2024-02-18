"use server";

import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export const admin = async () => {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return { sucess: "You are allowed to view this content" };
  }

  return { error: "Forbidden Server action" };
};
