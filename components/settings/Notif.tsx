import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SVGProps } from "react";

export function Notif() {
  return (
    <ScrollArea className="h-screen w-full">
      <header className="flex items-center justify-between p-4 border-b">
        <form className="flex space-x-2">
          <Input
            className="max-w-lg flex-1 outline-none"
            placeholder="Search notifications..."
            type="search"
          />
          <Button type="submit">
            <SearchIcon className="h-4 w-4" />
          </Button>
        </form>
      </header>
      <main className="flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <div className="flex justify-end gap-4">
          <Button variant="outline">Mark all as read</Button>
          <Button variant="outline">Clear all</Button>
        </div>
        <div className="grid gap-4 mt-4">
          <Card className="flex items-start gap-4 p-4">
            <Avatar className="relative overflow-visible">
              <span className="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600" />
              <div className="overflow-hidden w-8 h-8 border rounded-full">
                <AvatarImage alt="@jaredpalmer" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </div>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Jared Palmer</h2>
                <span className="text-sm text-gray-500">5 min ago</span>
              </div>
              <p className="text-sm">Your subscription is expiring soon!</p>
            </div>
            <BellIcon className="h-6 w-6" />
          </Card>
          <Card className="flex items-start gap-4 p-4">
            <Avatar className="relative overflow-visible">
              <span className="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600" />
              <div className="overflow-hidden w-8 h-8 border rounded-full">
                <AvatarImage alt="@jaredpalmer" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </div>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Jared Palmer</h2>
                <span className="text-sm text-gray-500">10 min ago</span>
              </div>
              <p className="text-sm">You have a new message!</p>
            </div>
            <MailboxIcon className="h-6 w-6" />
          </Card>
          <Card className="flex items-start gap-4 p-4">
            <Avatar className="relative overflow-visible">
              <span className="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600" />
              <div className="overflow-hidden w-8 h-8 border rounded-full">
                <AvatarImage alt="@jaredpalmer" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </div>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Jared Palmer</h2>
                <span className="text-sm text-gray-500">15 min ago</span>
              </div>
              <p className="text-sm">Your call has been confirmed.</p>
            </div>
            <PhoneIcon className="h-6 w-6" />
          </Card>
        </div>
      </main>
    </ScrollArea>
  );
}

interface BriefcaseIconProps extends SVGProps<SVGSVGElement> {}
interface UserIconProps extends SVGProps<SVGSVGElement> {}
interface UserIconProps extends SVGProps<SVGSVGElement> {}

function ArrowLeftIcon(props:BriefcaseIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function SearchIcon(props:BriefcaseIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function BellIcon(props:BriefcaseIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function MailboxIcon(props:BriefcaseIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}

function PhoneIcon(props:BriefcaseIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
