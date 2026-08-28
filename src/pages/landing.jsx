import setPage from '../App.jsx'

function landing() {
    return (
        <div className="max-w-xl mx-auto p-6 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Welcome to Tech Gadget & Inventory Hub</h1>
            <p className="text-gray-600">This is the landing page of our application.</p>

            <label htmlFor="gadgetName" className="font-medium">Gadget Name:</label>
            <input
                id="gadgetName"
                name="gadgetName"
                type="text"

                placeholder="Input Gadget Name here"
                className="border border-gray-300 rounded p-2"
            />

            <label htmlFor="category" className="font-medium">Category:</label>
            <select
                id="category"
                name="category"
                defaultValue="default"
                className="border border-gray-300 rounded p-2"
            >
                <option value="default" disabled>Select a category</option>
                <option value="smartphone">Smartphone</option>
                <option value="laptop">Laptop</option>
                <option value="wearable">Wearable</option>
                <option value="audio">Audio</option>
            </select>

            <label htmlFor="price" className="font-medium">Manufacturer:</label>
            <input
                type="text"
                id="price"
                name="price"
                placeholder="Input Manufacturer here"
                className="border border-gray-300 rounded p-2"
            />

            <label htmlFor="quantity" className="font-medium">Health Rating:</label>
            <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Input Health Rating here"
                min="1"
                max="100"
                className="border border-gray-300 rounded p-2"
            />
            <button
                onClick={() => alert('Gadget added successfully!')}
                className="bg-green-600 text-white rounded px-4 py-2 mt-2 hover:bg-green-700"
            >
                Add Gadget
            </button>
        </div>
    );
}
export default landing;