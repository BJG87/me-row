import { Navbar } from "./_components/navbar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center gap-y-10 bg-sky-500">
      {children}
    </div>
  );
}
