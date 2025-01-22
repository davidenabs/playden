import React, { useState } from 'react';
import FrameComponent from '../components/FrameComponent';
import FrameComponent6 from '../components/FrameComponent6';
import { Img, Text, Button, CheckBox, Input, Heading } from "../components";


const ProfileSetting = () => {
      const [loading, setLoading] = useState(false);
      const [password, setPassword] = useState(false);
    
      const handleProfile = async (e) => {
        e.preventDefault();
        setLoading(true);
      };

      const handlePasswordChange = async (e) => {
        e.preventDefault();
        setPassword(true);
      };

    return (
        <div className="w-full bg-light-mode-gray-10-f5f5f5 overflow-hidden flex flex-col items-start justify-start pb-10">
        <FrameComponent aare="/aare2@2x.png" />
        <FrameComponent6 />
        <section className="self-stretch flex flex-row items-start justify-start bg-gray-300 py-3 pl-[65px] pr-16 box-border max-w-full mq975:pl-8 mq975:pr-8 mq975:box-border">
            <div className='flex flex-col bg-whitebg rounded-md border-none p-6 w-full h-full'>
                <h3>Profile Setting</h3>
                <form onSubmit={handleProfile} className='flex flex-col gap-4 mb-4'>
                    <div className='flex flex-col gap-2 w-full'>
                        <label>Full Name</label>
                        <input type='text' placeholder="" value='' name="fName" className='w-[46] h-6 rounded-full border-black'/>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label>Email</label>
                        <input type='email' placeholder="" value='' name="fName" className='w-[46] h-6 rounded-full border-black'/>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label>Username</label>
                        <input type='text' placeholder="" value='' name="fName" className='w-[46] h-6 rounded-full border-black'/>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label>Phone Number</label>
                        <input type='tel' placeholder="" value='' name="fName" className='w-[46] h-6 rounded-full border-black'/>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label>Address</label>
                        <input type='text' placeholder="" value='' name="fName" className='w-[46] h-6 rounded-full border-black'/>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <Button
                                      type='submit' color="gray_800" size="lg" shape="round" className="min-w-[188px] font-worksans text-ghostwhite"
                                      disabled={loading}
                                    >
                                      {loading ? "Updating..." : "Update"}
                                    </Button>
                    </div>
                </form>
                    <hr/>
                <form onSubmit={handlePasswordChange} className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2 w-full'>
                        <label>Old Password</label>
                        <input type='password' placeholder="" value='' name="fName" className='w-[46] h-6 rounded-full border-black'/>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label>New Password</label>
                        <input type='password' placeholder="" value='' name="fName" className='w-[46] h-6 rounded-full border-black'/>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label>Confirm Password</label>
                        <input type='password' placeholder="" value='' name="fName" className='w-[46] h-6 rounded-full border-black'/>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <Button
                                      type='submit' color="gray_800" size="lg" shape="round" className="min-w-[188px] font-worksans text-ghostwhite"
                                      disabled={password}
                                    >
                                      {password ? "Changing Password..." : "Change Password"}
                                    </Button>
                    </div>
                </form>
            </div>
        </section>

        </div>
    )
}

export default ProfileSetting;