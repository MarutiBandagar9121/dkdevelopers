import TeamMembersData from '../data/TeamMembersData.json';
import { TeamMembersProps } from "interfaces/TeamMembersProps";
import MemberCard from './MemberCard';


export default function MeetTheTeam(){
    return(
        <div className="py-4">
            <div className="heading">
                <h1 className='text-2xl font-bold mx-4 my-8'> Meet The Team</h1>
            </div>
            <div className="team flex flex-wrap">
                    {TeamMembersData.map((member: TeamMembersProps, index: number) => (
                        <div key={index} className="card m-4 w-64">
                            <MemberCard member={member} />
                        </div>
                    ))}
            </div>
        </div>
    )
}