import { useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getUserInfo } from '@/lib/actions/user.action';

export default async function Profile() {
    const userId = 'CL123456';
    const userInfo = await getUserInfo({ userId });

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-1 flex-col gap-6">
                {/* Profile information goes here */}
                <p>Firstname: {userInfo.firstname}</p>
                <p>Lastname: {userInfo.lastname}</p>
                <p>Username: {userInfo.username}</p>
                <p>Email: {userInfo.email}</p>
                <p>Phone Number: {userInfo.phoneNumber}</p>
                <p>Bio: {userInfo.bio}</p>
                <p>Picture: {userInfo.picture}</p>
                <p>Location: {userInfo.location}</p>
                <p>Social Media Link: {userInfo.socialMediaLink}</p>
                <p>Reputation: {userInfo.reputation}</p>
                <p>Saved: {userInfo.saved}</p>
                <p>Joined At: {userInfo.joinedAt.toLocaleString()}</p>
            </div>

            <div className="flex flex-col gap-3">
                {/* Log out button */}
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    <Image
                        src="/assets/icons/logout.svg"
                        alt="log out"
                        width={20}
                        height={20}
                        className="invert-colors lg:hidden"
                    />
                    <span className="primary-text-gradient max-lg:hidden">
                        Log Out
                    </span>
                </Button>
            </div>
        </div>
    );
};