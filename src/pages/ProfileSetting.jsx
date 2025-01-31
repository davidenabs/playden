import React, { useState, useEffect } from 'react';
import FrameComponent from '../components/FrameComponent';
import FrameComponent6 from '../components/FrameComponent6';
import { toast } from 'react-toastify';
import { Button } from "../components";

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
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                        "ngrok-skip-browser-warning": "true",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch profile data.");
                }

                const result = await response.json();
                console.log("API Response:", result); // Debugging

                if (!result.success || !result.data) {
                    throw new Error(result.message || "Failed to fetch profile data.");
                }

                const userData = result.data; // Corrected data extraction

                // Update state with received data, replacing `null` values with empty strings
                setFormData({
                    full_name: userData.full_name ?? "",
                    email: userData.email ?? "",
                    username: userData.username ?? "",
                    phone_number: userData.phone_number ?? "",
                    address: userData.address ?? "",
                    account_number: userData.account_number ?? "",
                    account_holder_name: userData.account_holder_name ?? "",
                    bank_name: userData.bank_name ?? "",
                    business_name: userData.business_name ?? "",
                });

                console.log("Updated FormData State:", formData);
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
            if (!token) throw new Error("User is not authenticated.");

            console.log("Sending payload:", formData);

            const response = await fetch("https://api.playdenapp.com/api/v1/user", {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    "ngrok-skip-browser-warning": "true",
                },
                body: JSON.stringify(formData),
            });

            if (response.redirected) {
                toast.error("Redirection issue. Profile update might have failed.");
                return;
            }

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
            if (!token) throw new Error("User is not authenticated.");

            const response = await fetch("https://api.playdenapp.com/api/v1/user", {
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
                <div className='flex flex-row bg-white rounded-md border-none p-6 w-full h-full gap-8'>
                <div className='flex flex-col w-1/2'>
                <h3>Profile Setting</h3>
                    {error && <p className="text-red-500">{error}</p>}
                    <form onSubmit={handleProfileUpdate} className='flex flex-col gap-4 mb-4'>
                        {Object.keys(formData).map((key) => (
                            <div key={key} className='flex flex-col gap-2 w-full'>
                                <label>{key.replace(/_/g, ' ').toUpperCase()}</label>
                                <input
                                    type='text'
                                    name={key}
                                    value={formData[key] || ""}
                                    onChange={handleInputChange}
                                    className='w-full h-10 rounded-lg border border-gray-400 p-2'
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
                </div>

                    <hr className="my-6" />

                    <div className='flex flex-col w-1/2'>
                    <h3>Change Password</h3>
                    <form onSubmit={handlePasswordChange} className='flex flex-col gap-4'>
                        {["oldPassword", "newPassword", "confirmPassword"].map((field) => (
                            <div key={field} className='flex flex-col gap-2 w-full'>
                                <label>{field.replace(/([A-Z])/g, " $1").toUpperCase()}</label>
                                <input
                                    type='password'
                                    name={field}
                                    value={passwordData[field] || ""}
                                    onChange={handlePasswordInputChange}
                                    className='w-full h-10 rounded-lg border border-gray-400 p-2'
                                />
                            </div>
                        ))}
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
                </div>
            </section>
        </div>
    );
};

export default ProfileSetting;
