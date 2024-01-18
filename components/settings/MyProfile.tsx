import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { shimmer, toBase64 } from "@/components/Shimmer";
import { useSession } from "next-auth/react";

export function MyProfile() {
  const { data: session, status } = useSession();
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Avatar className="h-24 w-24  border-gray-200 rounded-full">
        <Image
          className="w-24 h-24 rounded-full"
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475),
          )}`}
          quality={100}
          alt="picture"
          width={100}
          height={100}
          src={session?.user?.image as string}
        />
      </Avatar>
      <h1 className="text-3xl font-bold">Dr {session?.user?.name}</h1>
      <p className="text-gray-500 dark:text-gray-400">Cardiologist</p>
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-semibold" htmlFor="experience">
                Experience
              </Label>
              <p className="text-sm" id="experience">10 years</p>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold" htmlFor="education">
                Education
              </Label>
              <p className="text-sm" id="education">Harvard Medical School</p>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold" htmlFor="affiliations">
                Professional Affiliations
              </Label>
              <p className="text-sm" id="affiliations">American Heart Association</p>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-semibold" htmlFor="bio">
                Bio
              </Label>
              <p className="text-sm" id="bio">
                Dr. John Doe is a cardiologist with 10 years of experience. He
                received his medical degree from Harvard Medical School and is
                affiliated with multiple hospitals and medical centers.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
