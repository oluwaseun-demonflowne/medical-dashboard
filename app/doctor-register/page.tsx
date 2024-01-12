/**
 * v0 by Vercel.
 * @see https://v0.dev/t/o44E6oNTHHM
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"


export default function Component() {
  return (
    <main className="mx-auto pt-4 max-w-md space-y-6 mb-10">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Doctor Registration</h1>
        <p className="text-gray-500 dark:text-gray-400">Fill in the details to create your account</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Dr. John Doe" required />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="patient" />
          <Label htmlFor="patient">Are you also a patient?</Label>
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Select>
            <SelectTrigger id="role">
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general-practitioner">General Practitioner</SelectItem>
              <SelectItem value="surgeon">Surgeon</SelectItem>
              <SelectItem value="specialist">Specialist</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="doctor@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input id="confirm-password" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Register
        </Button>
      </div>
    </main >
  )
}

