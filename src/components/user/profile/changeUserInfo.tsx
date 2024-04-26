import { useState, ChangeEvent, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast from "react-hot-toast";
import { useModal } from "@/context/ModalContext";

interface UserData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}

const ChangeUserInfo = () => {
    const { closeModal } = useModal();
    const { data: session, update } = useSession();
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [userData, setUserData] = useState<UserData>({
        firstName: session?.user.firstName || "",
        lastName: session?.user.lastName || "",
        phone: session?.user.phone || "",
        email: session?.user.email || "",
    });

    useEffect(() => {
        setButtonDisabled(
            userData.firstName === session?.user.firstName &&
            userData.lastName === session?.user.lastName &&
            userData.phone === session?.user.phone &&
            userData.email === session?.user.email 
        );
    }, [userData, session]);


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
        setButtonDisabled(false);
    };

    const updateProfileHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedUserData: Partial<UserData> = {};

        if (userData.firstName.trim() != session?.user.firstName && userData.firstName.trim() !== "") {
            updatedUserData.firstName = userData.firstName.trim();
        }
        if (userData.lastName.trim() !== session?.user.lastName && userData.lastName.trim() !== "") {
            updatedUserData.lastName = userData.lastName.trim();
        }
        if (userData.email.trim() !== session?.user.email && userData.email.trim() !== "") {
            updatedUserData.email = userData.email.trim();
        }
        if (userData.phone.trim() !== session?.user.phone && userData.phone.trim() !== "") {
            updatedUserData.phone = userData.phone.trim();
        }
        // Avoid updating photo here, as it's handled separately when the user selects a new image

        if (Object.keys(updatedUserData).length > 0) {
            try {
                const request = await axios.patch('api/user/changeprofileinfo', updatedUserData);
                if (request.status === 200) {
                    toast.success('Profile updated successfully');
                    await update({
                        ...session,
                        user: {
                            ...session?.user,
                            ...updatedUserData,
                        },
                    });
                    setTimeout(() => {
                        closeModal();
                    }, 500);
                }
            } catch (error:any) {
                if (error.response && error.response.data) {
                    const errorMessage = error.response.data;
                    toast.error(errorMessage)
                }
                console.error(error)
            }
        }
    };

    return (
        <div className="w-full flex flex-col mt-[20px]">
            <form className="flex gap-7 flex-col items-center" onSubmit={updateProfileHandler}>
                    
                    <div className="flex flex-col w-full gap-3">
                        <input
                            className="input1"
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            value={userData.firstName}
                            onChange={handleInputChange}
                        />
                        <input
                            className="input1"
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            value={userData.lastName}
                            onChange={handleInputChange}
                        />
                        <input
                            className="input1"
                            placeholder="Email"
                            type="text"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                        />
                        <input
                            className="input1"
                            placeholder="Phone"
                            type="number"
                            name="phone"
                            value={userData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                <div className="w-full">
                    <button className="btn1" type="submit" disabled={buttonDisabled}>
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChangeUserInfo;
