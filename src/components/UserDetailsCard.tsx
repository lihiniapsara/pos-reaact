interface UserDetailsProps {
    name: string;
    age: number;
    avatarUrl: string;
    isVerified?: boolean; // Optional prop
}


const UserDetailsCard = ({name, age, avatarUrl, isVerified = false} : UserDetailsProps) => {
    return (
        <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
            <div className="relative">
                <img
                    src={avatarUrl}
                    alt={`${name}'s avatar`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                />
            </div>
            <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-600">{age} years old</p>
                {isVerified && <div className="px-2 text-white  rounded bg-green-900">Verified</div>}
            </div>
        </div>
    );
};

export default UserDetailsCard;