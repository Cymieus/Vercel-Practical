import { useState } from 'react';

function Landing( { addGadget } ) {
    const [gadgetName, setGadgetName] = useState('');
    const [category, setCategory] = useState('default');
    const [manufacturer, setManufacturer] = useState('');
    const [healthRating, setHealthRating] = useState('');
    const [brand, setBrand] = useState('');
    const [role, setRole] = useState('');

    const [nameError, setNameError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [manufacturerError, setManufacturerError] = useState('');
    const [healthError, setHealthError] = useState('');
    const [brandError, setBrandError] = useState('');
    const [roleError, setRoleError] = useState('');

    const handleSubmit = () => {
        let isValid = true;

        if (gadgetName === '') {
            setNameError('Gadget name is required.');
            isValid = false;
        } else if (gadgetName.length < 3) {
            setNameError('Gadget name must be at least 3 characters.');
            isValid = false;
        } else {
            setNameError('');
        }

        if (category === 'default') {
            setCategoryError('Please select a category.');
            isValid = false;
        } else {
            setCategoryError('');
        }

        if (manufacturer === '') {
            setManufacturerError('Manufacturer is required.');
            isValid = false;
        } else {
            setManufacturerError('');
        }

        if (healthRating === '') {
            setHealthError('Health rating is required.');
            isValid = false;
        } else if (Number(healthRating) < 1 || Number(healthRating) > 100) {
            setHealthError('Health rating must be between 1 and 100.');
            isValid = false;
        } else {
            setHealthError('');
        }

        if (brand === '') {
            setBrandError('Brand is required.');
            isValid = false;
        } else {
            setBrandError('');
        }

        if (role === '') {
            setRoleError('Role is required.');
            isValid = false;
        } else {
            setRoleError('');
        }
        

        if (isValid) {
            const newGadget = {
                name: gadgetName,
                category: category,
                manufacturer: manufacturer,
                healthRating: Number(healthRating),
                brand: brand,
                role: role
            };
            setGadgetName('');
            setCategory('default');
            setManufacturer('');
            setHealthRating('');
            setBrand('');
            setRole('');
            addGadget(newGadget);
            console.log('Gadget added:', newGadget);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Welcome to Tech Gadget & Inventory Hub</h1>
            <p className="text-gray-600">This is the landing page of our application.</p>

            <label htmlFor="gadgetName" className="font-medium">Gadget Name:</label>
            <input
                id="gadgetName"
                name="gadgetName"
                type="text"
                value={gadgetName}
                onChange={(e) => setGadgetName(e.target.value)}
                placeholder="Input Gadget Name here"
                className="border border-gray-300 rounded p-2"
            />
            {nameError !== '' && <p className="text-red-500 text-sm">{nameError}</p>}

            <label htmlFor="category" className="font-medium">Category:</label>
            <select
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-300 rounded p-2"
            >
                <option value="default" disabled>Select a category</option>
                <option value="smartphone">Smartphone</option>
                <option value="laptop">Laptop</option>
                <option value="wearable">Wearable</option>
                <option value="audio">Audio</option>
            </select>
            {categoryError !== '' && <p className="text-red-500 text-sm">{categoryError}</p>}

            <label htmlFor="manufacturer" className="font-medium">Manufacturer:</label>
            <input
                type="text"
                id="manufacturer"
                name="manufacturer"
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
                placeholder="Input Manufacturer here"
                className="border border-gray-300 rounded p-2"
            />
            {manufacturerError !== '' && <p className="text-red-500 text-sm">{manufacturerError}</p>}

            <label htmlFor="healthRating" className="font-medium">Health Rating:</label>
            <input
                type="number"
                id="healthRating"
                name="healthRating"
                value={healthRating}
                onChange={(e) => setHealthRating(e.target.value)}
                placeholder="Input Health Rating here"
                min="1"
                max="100"
                className="border border-gray-300 rounded p-2"
            />
            {healthError !== '' && <p className="text-red-500 text-sm">{healthError}</p>}

            <label htmlFor="brand" className="font-medium">Brand:</label>
            <input
                type="text"
                id="brand"
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Input Brand here"
                className="border border-gray-300 rounded p-2"
            />
            {brandError !== '' && <p className="text-red-500 text-sm">{brandError}</p>}

            <label className="font-medium">Role:</label>
            <div className="flex gap-4">
                <label className="flex items-center gap-1">
                    <input
                        type="radio"
                        name="role"
                        value="Engineer"
                        checked={role === 'Engineer'}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    Engineer
                </label>

                <label className="flex items-center gap-1">
                    <input
                        type="radio"
                        name="role"
                        value="Tester"
                        checked={role === 'Tester'}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    Tester
                </label>
            </div>
            {roleError !== '' && <p className="text-red-500 text-sm">{roleError}</p>}
            <button
                onClick={handleSubmit}
                className="bg-green-600 text-white rounded px-4 py-2 mt-2 hover:bg-green-700"
            >
                Add Gadget
            </button>
        </div>
    );
}
export default Landing;