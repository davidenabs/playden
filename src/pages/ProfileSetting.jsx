import React, { useState, useEffect } from 'react';
import FrameComponent from '../components/FrameComponent';
import FrameComponent6 from '../components/FrameComponent6';
import { toast } from 'react-toastify';
import { Img, Text, Button, CheckBox, Input, Heading } from "../components";

const ProfileSetting = () => {
    const [loading, setLoading] = useState(false);
    const [passwordLoading, setPasswordLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        username: "",
        phone_number: "",
        address: "",
        account_number: "",
        account_holder_name: "",
        bank_name: "",
        business_name: "",
    });

    const [passwordData, setPasswordData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    useEffect(() => {
        const fetchProfileData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setError("You are not logged in. Please log in to view your profile.");
                toast.error("You are not logged in. Please log in to view your profile.");
                return;
            }

            try {
                const response = await fetch("https://api.playdenapp.com/api/v1/user", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch profile data.");
                }

                const data = await response.json();
                setFormData({
                    full_name: data.full_name || "",
                    email: data.email || "",
                    username: data.username || "",
                    phone_number: data.phone_number || "",
                    address: data.address || "",
                    account_number: data.account_number || "",
                    account_holder_name: data.account_holder_name || "",
                    bank_name: data.bank_name || "",
                    business_name: data.business_name || "",
                });
            } catch (err) {
                setError(err.message);
                toast.error(err.message);
            }
        };

        fetchProfileData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePasswordInputChange = (e) => {
        const { name, value } = e.target;
        setPasswordData((prev) => ({ ...prev, [name]: value }));
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = localStorage.getItem("token");
            const response = await fetch("https://api.playdenapp.com/api/v1/user", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to update profile.");
            }

            toast.success("Profile updated successfully!");
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        setPasswordLoading(true);

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            toast.error("Passwords do not match.");
            setPasswordLoading(false);
            return;
        }

        try {
            const token = localStorage.getItem("token");
            const response = await fetch("https://api.playdenapp.com/api/v1/user/password", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    old_password: passwordData.oldPassword,
                    new_password: passwordData.newPassword,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to change password.");
            }

            toast.success("Password changed successfully!");
            setPasswordData({ oldPassword: "", newPassword: "", confirmPassword: "" });
        } catch (err) {
            toast.error(err.message);
        } finally {
            setPasswordLoading(false);
        }
    };

    return (
        <div className="w-full bg-light-mode-gray-10-f5f5f5 overflow-hidden flex flex-col items-start justify-start pb-10">
            <FrameComponent aare="/aare2@2x.png" />
            <FrameComponent6 />
            <section className="self-stretch flex flex-row items-start justify-start bg-gray-300 py-3 pl-[65px] pr-16 box-border max-w-full mq975:pl-8 mq975:pr-8 mq975:box-border">
                <div className='flex flex-col bg-whitebg rounded-md border-none p-6 w-full h-full'>
                    <h3>Profile Setting</h3>
                    {error && <p className="text-red-500">{error}</p>}
                    <form onSubmit={handleProfileUpdate} className='flex flex-col gap-4 mb-4'>
                        {Object.keys(formData).map((key) => (
                            <div key={key} className='flex flex-col gap-2 w-full'>
                                <label>{key.replace(/_/g, ' ').toUpperCase()}</label>
                                <input
                                    type='text'
                                    name={key}
                                    value={formData[key]}
                                    onChange={handleInputChange}
                                    className='w-full h-6 rounded-full border border-gray-400 p-2'
                                />
                            </div>
                        ))}
                        <Button
                            type='submit'
                            color="gray_800"
                            size="lg"
                            shape="round"
                            className="min-w-[188px] font-worksans text-ghostwhite"
                            disabled={loading}
                        >
                            {loading ? "Updating..." : "Update"}
                        </Button>
                    </form>

                    <hr className="my-6" />

                    <form onSubmit={handlePasswordChange} className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label>Old Password</label>
                            <input
                                type='password'
                                name='oldPassword'
                                value={passwordData.oldPassword}
                                onChange={handlePasswordInputChange}
                                className='w-full h-6 rounded-full border border-gray-400 p-2'
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label>New Password</label>
                            <input
                                type='password'
                                name='newPassword'
                                value={passwordData.newPassword}
                                onChange={handlePasswordInputChange}
                                className='w-full h-6 rounded-full border border-gray-400 p-2'
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label>Confirm Password</label>
                            <input
                                type='password'
                                name='confirmPassword'
                                value={passwordData.confirmPassword}
                                onChange={handlePasswordInputChange}
                                className='w-full h-6 rounded-full border border-gray-400 p-2'
                            />
                        </div>
                        <Button
                            type='submit'
                            color="gray_800"
                            size="lg"
                            shape="round"
                            className="min-w-[188px] font-worksans text-ghostwhite"
                            disabled={passwordLoading}
                        >
                            {passwordLoading ? "Changing Password..." : "Change Password"}
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ProfileSetting;
