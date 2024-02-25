"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { BackButton } from "./auth/back-button";
import { Header } from "./admin/header";

type CardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  headerTitle: string;
  backButtonHref?: string;
  backButtonLabel?: string;
};

export const CardWrapper = ({
  children,
  headerLabel,
  headerTitle,
  backButtonHref,
  backButtonLabel,
}: CardWrapperProps) => {
  return (
    <Card className="mt-2 w-full rounded-none shadow-md sm:mt-4 sm:w-11/12 sm:rounded-xl">
      <CardHeader>
        <Header title={headerTitle} label={headerLabel} />
      </CardHeader>
      <CardContent className="h-fit">{children}</CardContent>
      {backButtonHref && (
        <CardFooter>
          <BackButton
            href={backButtonHref}
            label={backButtonLabel || backButtonHref}
          />
        </CardFooter>
      )}
    </Card>
  );
};
