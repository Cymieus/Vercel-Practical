import { useState, useEffect } from 'react';

function Summary({ gadgets, onNavigate }) {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [selectedGadget, setSelectedGadget] = useState(null);
    const [filterText, setFilterText] = useState('');

    // Filter gadgets by name or category before paginating
    const filteredGadgets = gadgets.filter((gadget) => {
        const search = filterText.toLowerCase();
        return (
            gadget.name.toLowerCase().includes(search) ||
            gadget.category.toLowerCase().includes(search)
        );
    });

    // Calculate pagination (based on the filtered list)
    const totalPages = Math.ceil(filteredGadgets.length / pageSize);
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    const currentGadgets = filteredGadgets.slice(startIndex, endIndex);

    // Selection Sync: whenever the selected gadget changes, sync its details.
    // In a real app this might be an API call to fetch full details;
    // here we just simulate that sync.
    useEffect(() => {
        if (selectedGadget) {
            console.log('Syncing details for:', selectedGadget.name);
        }
    }, [selectedGadget]);

    function handleRowClick(gadget) {
        setSelectedGadget(gadget);
    }

    return (
        <div className="summary-page max-w-3xl mx-auto p-6 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Summary Page</h1>
            <p>This is the summary page of our application.</p>

            <button
                onClick={() => onNavigate('landing')}
                className="text-violet-800 hover:text-violet-600 text-left"
            >
                ← Back to Add Gadget
            </button>

            {/* Filter control */}
            <input
                type="text"
                value={filterText}
                onChange={(e) => {
                    setFilterText(e.target.value);
                    setCurrentPage(0); // reset to first page when filtering
                }}
                placeholder="Filter by name or category..."
                className="border border-gray-300 rounded p-2 w-full"
            />

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2 text-left">Gadget ID</th>
                            <th className="border border-gray-300 p-2 text-left">Gadget Name</th>
                            <th className="border border-gray-300 p-2 text-left">Category</th>
                            <th className="border border-gray-300 p-2 text-left">Manufacturer</th>
                            <th className="border border-gray-300 p-2 text-left">Health Rating</th>
                            <th className="border border-gray-300 p-2 text-left">Brand</th>
                            <th className="border border-gray-300 p-2 text-left">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentGadgets.map((gadget) => (
                            <tr
                                key={gadget.id}
                                onClick={() => handleRowClick(gadget)}
                                className={
                                    "hover:bg-gray-50 cursor-pointer " +
                                    (selectedGadget && selectedGadget.id === gadget.id
                                        ? "bg-violet-50"
                                        : "")
                                }
                            >
                                <td className="border border-gray-300 p-2">{gadget.id}</td>
                                <td className="border border-gray-300 p-2">{gadget.name}</td>
                                <td className="border border-gray-300 p-2">{gadget.category}</td>
                                <td className="border border-gray-300 p-2">{gadget.manufacturer}</td>
                                <td className="border border-gray-300 p-2">{gadget.healthRating}</td>
                                <td className="border border-gray-300 p-2">{gadget.brand}</td>
                                <td className="border border-gray-300 p-2">{gadget.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {filteredGadgets.length === 0 && (
                <p className="text-gray-500 text-center">No gadgets found.</p>
            )}

            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                        disabled={currentPage === 0}
                        className="border border-gray-300 rounded px-3 py-1 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                        disabled={currentPage >= totalPages - 1}
                        className="border border-gray-300 rounded px-3 py-1 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                    <span className="text-sm text-gray-600">
                        Page {currentPage + 1} of {totalPages || 1}
                    </span>
                </div>

                <label className="flex items-center gap-2 text-sm">
                    Rows per page:
                    <select
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                            setCurrentPage(0);
                        }}
                        className="border border-gray-300 rounded p-1"
                    >
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </label>
            </div>

            {selectedGadget && (
                <div className="border border-gray-300 rounded-lg p-4 mt-4 bg-white shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold">{selectedGadget.name}</h2>
                        <span className="bg-violet-100 text-violet-800 text-xs font-medium px-2 py-1 rounded-full">
                            {selectedGadget.role}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600">Category: {selectedGadget.category}</p>
                    <p className="text-sm text-gray-600">Manufacturer: {selectedGadget.manufacturer}</p>
                    <p className="text-sm text-gray-600">Brand: {selectedGadget.brand}</p>
                    <p className="text-sm text-gray-600">Health Rating: {selectedGadget.healthRating}</p>
                </div>
            )}
        </div>
    );
}

export default Summary;