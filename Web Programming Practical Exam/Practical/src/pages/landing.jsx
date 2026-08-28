function landing() {
    return (
        <div className="landing-page">
            <h1>Welcome to Tech Gadget & Inventory Hub</h1>
            <p>This is the landing page of our application.</p>

            <label htmlFor="gadgetName">Gadget Name:</label>
            <textarea placeholder="Input Gadget Name here" rows="4" cols="50"></textarea>

            <label htmlFor="category">Category:</label>
            <select id="category" name="category" defaultValue="default">
                <option value="default" disabled>Select a category</option>
                <option value="smartphone">Smartphone</option>
                <option value="laptop">Laptop</option>
                <option value="wearable">Wearable</option>
                <option value="audio">Audio</option>
            </select>
            
            <label htmlFor="price">Manufacturer:</label>
            <input type="text" id="price" name="price" placeholder="Input Manufacturer here" />
            
            <label htmlFor="quantity">Health Rating:</label>
            <input type="number" id="quantity" name="quantity" placeholder="Input Health Rating here" min="1" max="100" />

            <button onClick={() => window.location.href = '/summary'}>Go to Summary</button>
        </div>
    );
}
export default landing;