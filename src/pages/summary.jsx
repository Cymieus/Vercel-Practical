

function summary() {
    return (
        <div className="summary-page max-w-xl mx-auto p-6 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Summary Page</h1>
            <p>This is the summary page of our application.</p>
            <label htmlFor="summaryInput" className="font-medium">Summary Input:</label>
            <table className="border border-gray-300 rounded p-2">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Gadget ID</th>
                        <th className="border border-gray-300 p-2">Gadget Name</th>
                        <th className="border border-gray-300 p-2">Category</th>
                        <th className="border border-gray-300 p-2">Manufacturer</th>
                        <th className="border border-gray-300 p-2">Health Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2">Example Gadget</td>
                        <td className="border border-gray-300 p-2">Smartphone</td>
                        <td className="border border-gray-300 p-2">Example Manufacturer</td>
                        <td className="border border-gray-300 p-2">85</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default summary;