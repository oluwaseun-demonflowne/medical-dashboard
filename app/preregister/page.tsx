import Link from "next/link"
import { SVGProps } from "react"

export default async function Component() {
    return (
      <div className="flex w-full flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <h1 className="text-4xl font-bold mb-6">Register</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">Please select your registration type</p>
        <div className="flex sm:flex-col md:flex-row gap-6">
          <button className="flex flex-col items-center justify-center p-6 bg-white hover:bg-gray-300 shadow-md rounded-lg dark:bg-gray-800 focus:ring-2 focus:outline-none"><Link className="flex flex-col items-center justify-center" href="/patient-register">
            <UserIcon className="h-16 w-16 mb-4 text-gray-500 dark:text-gray-400" />
            <span className="text-lg font-medium">
              
              Register as a Patient 
            </span></Link>
          </button>
          <button className="flex hover:bg-gray-300 flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg dark:bg-gray-800 focus:ring-2 focus:outline-none"><Link className="flex flex-col items-center justify-center" href="/doctor-register">
            <BriefcaseIcon className="h-16 w-16 mb-4 text-gray-500 dark:text-gray-400" />
            <span className="text-lg font-medium">Register as a Doctor</span></Link>
          </button>
        </div>
      </div>
    )
  }

  interface BriefcaseIconProps extends SVGProps<SVGSVGElement> {}
  interface UserIconProps extends SVGProps<SVGSVGElement> {}
  
  function BriefcaseIcon(props:BriefcaseIconProps) {
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
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    )
  }
  
  
  function UserIcon(props:UserIconProps) {
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
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }
  