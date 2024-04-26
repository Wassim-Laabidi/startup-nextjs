import Image from "next/image";
import profilePic from './3662.jpg'
import location from './location.svg'
import calender from './calendar.svg'
import link from './link.svg'
import Link from "next/link";
import { getJoinedDate } from '@/lib/utils';
import { useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { getUserInfo } from '@/lib/actions/user.action';
import { userInfo } from "os";
import ProfileLink from "../shared/ProfileLinks";

export default async function Profile() {
    const userId = 'CL123456';
    const userInfo = await getUserInfo({ userId });

    return (
        <>

            <div className="flex flex-col-reverce items-start justify-between sm:flex-row container mt-16 pt-20">
                <div className="flex flex-col items-start gap-4 lg:flex-row">
                    <Image
                        src={profilePic}
                        alt="Profile Picture"
                        width={140}
                        height={140}
                        className="rounded-full object-cover"
                    />
                    <div className="mt-3">
                        <h2>{userInfo.firstname} {userInfo.lastname} </h2>
                        <p>@{userInfo.username}</p>

                        <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
                            {/* Location */}
                            {userInfo.location && (
                                <ProfileLink
                                    imgUrl={location}
                                    title={userInfo.location}
                                />
                            )}

                            {/* Portfolio Website */}
                            {userInfo.socialMediaLink && (
                                <ProfileLink
                                    imgUrl={link}
                                    href={userInfo.socialMediaLink}
                                    title={userInfo.socialMediaLink}
                                />
                            )}

                            {/* Joined Date */}
                            <ProfileLink
                                imgUrl={calender}
                                title={getJoinedDate(userInfo.joinedAt)}
                            />
                        </div>
                        <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
                            {userInfo.bio && (
                                <>{userInfo.bio}</>
                            )}

                        </div>
                    </div>
                </div>
                <div className="flex jusitify-end max-sm:mb-5 max-sm:w-full sm:mt-3">
                    {/* if signed in add clerk edit */}
                    <Link href="">
                        {/* edit profile ref */}
                        <Button className="paragraph-medium btn-secondary min-h-[46px] min-w-[175px]">
                            Edit Profile
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

