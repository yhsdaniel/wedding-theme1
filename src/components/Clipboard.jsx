import React from "react";
import toast from 'react-hot-toast';

const Clipboard = ({ textcopy }) => {
    const handleCopyClick = async () => {
        try {
            await window.navigator.clipboard.writeText(textcopy);
            toast.success('Copied successfully', { duration: 3000, position: 'top-center' })
        } catch (err) {
            console.error("Unable to copy to clipboard.", err);
            toast.error('Copied Failed', { duration: 3000, position: 'top-center' })
        }
    };

    return (
        <div className="my-4">
            <button className="bg-white/30 hover:bg-white/50 duration-150 ease-in px-4 py-2 rounded-lg" onClick={handleCopyClick}>
                Copy
            </button>
        </div>
    );
};

export default Clipboard;