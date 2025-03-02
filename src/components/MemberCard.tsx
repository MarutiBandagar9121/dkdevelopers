import { TeamMembersProps } from "interfaces/TeamMembersProps";
import Image from "next/image";

type Props = {
  member: TeamMembersProps;
};
export default function MemberCard({ member }: Props) {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs">
        <div className="relative h-64 w-full">
          <Image
            src={member.imgSrc || "/placeholder.svg"}
            alt={`profile picture`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.position}</p>
        </div>
      </div>
    </>
  );
}
