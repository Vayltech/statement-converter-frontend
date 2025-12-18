import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const DeleteAccountModal = ({ isOpen, onClose, onConfirm, isLoading }) => {
    const [confirmationText, setConfirmationText] = useState('');

    if (!isOpen) return null;

    // The button is disabled unless they type exactly "DELETE" and it's not currently loading.
    const isDeleteDisabled = confirmationText !== 'DELETE' || isLoading;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Gray backdrop blocker */}
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                {/* Modal panel */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">

                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <AlertTriangle className="h-6 w-6 text-red-600" aria-hidden="true" />
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                    Delete Account Forever
                                </h3>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500">
                                        Are you absolutely sure? This action cannot be undone.
                                    </p>
                                    <ul className="list-disc list-inside text-sm text-red-600 mt-3 font-semibold space-y-1">
                                        <li>Your subscription will be canceled immediately.</li>
                                        <li>All transaction history and data will be permanently wiped.</li>
                                        <li>You will lose access immediately.</li>
                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="confirm-delete" className="block text-sm font-medium text-gray-700">
                                        To confirm, type "DELETE" below:
                                    </label>
                                    <input
                                        type="text"
                                        id="confirm-delete"
                                        className="mt-2 p-2 border-2 border-red-300 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm rounded-md"
                                        placeholder="DELETE"
                                        value={confirmationText}
                                        onChange={(e) => setConfirmationText(e.target.value)}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            type="button"
                            onClick={onConfirm}
                            disabled={isDeleteDisabled}
                            className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm
                ${isDeleteDisabled
                                    ? 'bg-red-300 cursor-not-allowed'
                                    : 'bg-red-600 hover:bg-red-700'}`}
                        >
                            {isLoading ? 'Deleting...' : 'Delete Forever'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isLoading}
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteAccountModal;