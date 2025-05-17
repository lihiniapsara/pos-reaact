import React from "react";

type DialogProps = {
    isOpen: boolean;
    title: string;
    onCancel: () => void;
    onConfirm?: () => void;
    confirmLabel?: string;
    showFooter?: boolean;
    children: React.ReactNode;
};

const Dialog: React.FC<DialogProps> = ({
                                           isOpen,
                                           title,
                                           onCancel,
                                           onConfirm,
                                           confirmLabel = "Confirm",
                                           showFooter = false,
                                           children,
                                       }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <div>{children}</div>
                {showFooter && (
                    <div className="flex justify-end gap-2 mt-6">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={onConfirm}
                            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                        >
                            {confirmLabel}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dialog;
