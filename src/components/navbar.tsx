import { Avatar, AvatarFallback, AvatarImage } from "@/icons/avatar";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <div className="hidden flex-col md:flex bg-slate-100">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            {/* <TeamSwitcher /> */}
            {/* <MainNav className="mx-6" /> */}
            <Link href={"/"}>
              {" "}
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </Link>
            <div className="ml-auto flex items-center space-x-4 ">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
