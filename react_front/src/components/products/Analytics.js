import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 15", price: 80000, category: "Mobile" },
  { id: 2, name: "Samsung Galaxy S24", price: 75000, category: "Mobile" },
  { id: 3, name: "OnePlus 12", price: 65000, category: "Mobile" },
  { id: 4, name: "Realme Narzo", price: 18000, category: "Mobile" },
  { id: 5, name: "Redmi Note 13", price: 22000, category: "Mobile" },

  { id: 6, name: "Samsung Smart TV", price: 55000, category: "Electronics" },
  { id: 7, name: "LG OLED TV", price: 120000, category: "Electronics" },
  { id: 8, name: "Sony Bravia TV", price: 95000, category: "Electronics" },
  { id: 9, name: "Mi TV 5X", price: 42000, category: "Electronics" },
  { id: 10, name: "Boat Headset", price: 2000, category: "Accessories" },

  { id: 11, name: "JBL Speaker", price: 6000, category: "Accessories" },
  { id: 12, name: "Noise Smartwatch", price: 3500, category: "Accessories" },
  { id: 13, name: "Apple Watch", price: 45000, category: "Accessories" },
  { id: 14, name: "Dell Laptop", price: 78000, category: "Computers" },
  { id: 15, name: "HP Pavilion", price: 67000, category: "Computers" },

  { id: 16, name: "Lenovo IdeaPad", price: 58000, category: "Computers" },
  { id: 17, name: "MacBook Air", price: 110000, category: "Computers" },
  { id: 18, name: "Asus ROG", price: 135000, category: "Computers" },
  { id: 19, name: "Logitech Mouse", price: 1200, category: "Accessories" },
  { id: 20, name: "Mechanical Keyboard", price: 4500, category: "Accessories" },

  { id: 21, name: "Canon DSLR", price: 72000, category: "Camera" },
  { id: 22, name: "Nikon Camera", price: 69000, category: "Camera" },
  { id: 23, name: "GoPro Hero", price: 32000, category: "Camera" },
  { id: 24, name: "Sony Headphones", price: 9000, category: "Accessories" },
  { id: 25, name: "AirPods Pro", price: 24000, category: "Accessories" },

  { id: 26, name: "Puma Shoes", price: 3500, category: "Fashion" },
  { id: 27, name: "Nike Running Shoes", price: 5500, category: "Fashion" },
  { id: 28, name: "Adidas Hoodie", price: 2800, category: "Fashion" },
  { id: 29, name: "Levis Jeans", price: 2200, category: "Fashion" },
  { id: 30, name: "RayBan Sunglasses", price: 7000, category: "Fashion" },

  { id: 31, name: "Office Chair", price: 8500, category: "Furniture" },
  { id: 32, name: "Wooden Table", price: 12000, category: "Furniture" },
  { id: 33, name: "Gaming Chair", price: 14500, category: "Furniture" },
  { id: 34, name: "Study Lamp", price: 1800, category: "Home" },
  { id: 35, name: "Ceiling Fan", price: 3200, category: "Home" },

  { id: 36, name: "Mixer Grinder", price: 5400, category: "Home Appliances" },
  { id: 37, name: "Air Fryer", price: 8900, category: "Home Appliances" },
  { id: 38, name: "Refrigerator", price: 42000, category: "Home Appliances" },
  { id: 39, name: "Washing Machine", price: 36000, category: "Home Appliances" },
  { id: 40, name: "Microwave Oven", price: 12500, category: "Home Appliances" },

  { id: 41, name: "Cricket Bat", price: 2500, category: "Sports" },
  { id: 42, name: "Football", price: 1200, category: "Sports" },
  { id: 43, name: "Badminton Racket", price: 2200, category: "Sports" },
  { id: 44, name: "Yoga Mat", price: 900, category: "Sports" },
  { id: 45, name: "Dumbbell Set", price: 4800, category: "Sports" },

  { id: 46, name: "Notebook Pack", price: 400, category: "Stationery" },
  { id: 47, name: "Ball Pen Set", price: 150, category: "Stationery" },
  { id: 48, name: "Backpack", price: 1800, category: "Stationery" },
  { id: 49, name: "Water Bottle", price: 600, category: "Stationery" },
  { id: 50, name: "Desk Organizer", price: 950, category: "Stationery" },

  { id: 51, name: "Tablet Pro", price: 40000, category: "Electronics" },
  { id: 52, name: "Bluetooth Speaker", price: 2500, category: "Accessories" },
  { id: 53, name: "Smart Bulb", price: 1200, category: "Home" },
  { id: 54, name: "Power Bank", price: 1800, category: "Accessories" },
  { id: 55, name: "Gaming Mouse", price: 3200, category: "Computers" },

  { id: 56, name: "Wireless Keyboard", price: 2800, category: "Computers" },
  { id: 57, name: "Monitor 24 inch", price: 15000, category: "Computers" },
  { id: 58, name: "Monitor 32 inch", price: 28000, category: "Computers" },
  { id: 59, name: "Printer", price: 9500, category: "Electronics" },
  { id: 60, name: "Scanner", price: 8500, category: "Electronics" },

  { id: 61, name: "Drone Camera", price: 55000, category: "Camera" },
  { id: 62, name: "Tripod Stand", price: 2200, category: "Camera" },
  { id: 63, name: "Camera Lens", price: 35000, category: "Camera" },
  { id: 64, name: "Sneakers", price: 4500, category: "Fashion" },
  { id: 65, name: "Formal Shirt", price: 1800, category: "Fashion" },

  { id: 66, name: "T-Shirt Combo", price: 999, category: "Fashion" },
  { id: 67, name: "Cupboard", price: 18000, category: "Furniture" },
  { id: 68, name: "Dining Table", price: 24000, category: "Furniture" },
  { id: 69, name: "Bed Mattress", price: 14000, category: "Furniture" },
  { id: 70, name: "Vacuum Cleaner", price: 8900, category: "Home Appliances" },

  { id: 71, name: "Rice Cooker", price: 3500, category: "Home Appliances" },
  { id: 72, name: "Induction Stove", price: 2800, category: "Home Appliances" },
  { id: 73, name: "Tennis Ball", price: 300, category: "Sports" },
  { id: 74, name: "Gym Gloves", price: 700, category: "Sports" },
  { id: 75, name: "Skipping Rope", price: 450, category: "Sports" },

  { id: 76, name: "Marker Set", price: 250, category: "Stationery" },
  { id: 77, name: "Geometry Box", price: 180, category: "Stationery" },
  { id: 78, name: "Sticky Notes", price: 120, category: "Stationery" },
  { id: 79, name: "USB Cable", price: 350, category: "Accessories" },
  { id: 80, name: "Phone Charger", price: 1200, category: "Accessories" },

  { id: 81, name: "Extension Board", price: 950, category: "Electronics" },
  { id: 82, name: "Smart Door Lock", price: 15000, category: "Home" },
  { id: 83, name: "LED Strip Light", price: 650, category: "Home" },
  { id: 84, name: "Gaming Console", price: 50000, category: "Electronics" },
  { id: 85, name: "VR Headset", price: 32000, category: "Electronics" },

  { id: 86, name: "Smart Ring", price: 12000, category: "Accessories" },
  { id: 87, name: "Fitness Tracker", price: 4500, category: "Accessories" },
  { id: 88, name: "Bluetooth Earbuds", price: 2800, category: "Accessories" },
  { id: 89, name: "Laptop Stand", price: 1500, category: "Computers" },
  { id: 90, name: "SSD 1TB", price: 7200, category: "Computers" },

  { id: 91, name: "RAM 16GB", price: 5400, category: "Computers" },
  { id: 92, name: "Graphics Card", price: 45000, category: "Computers" },
  { id: 93, name: "Router", price: 3200, category: "Electronics" },
  { id: 94, name: "Projector", price: 38000, category: "Electronics" },
  { id: 95, name: "Smart AC", price: 52000, category: "Home Appliances" },

  { id: 96, name: "Water Purifier", price: 14500, category: "Home Appliances" },
  { id: 97, name: "Curtains", price: 2500, category: "Home" },
  { id: 98, name: "Wall Clock", price: 900, category: "Home" },
  { id: 99, name: "Bean Bag", price: 4200, category: "Furniture" },
  { id: 100, name: "Bookshelf", price: 8500, category: "Furniture" }
];

function Analytics() {

  const [category, setCategory] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 10;

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(product => product.category === category);

  const lastIndex = currentPage * productsPerPage;

  const firstIndex = lastIndex - productsPerPage;

  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Products
      </h1>

      <div className="flex gap-4 justify-center mb-8">

        <button
          onClick={() => setCategory("All")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          All
        </button>

        <button
          onClick={() => setCategory("Mobile")}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg"
        >
          Mobile
        </button>

        <button
          onClick={() => setCategory("Computers")}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg"
        >
          Computers
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {
          currentProducts.map(product => (

            <div
              key={product.id}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >

              <h2 className="text-2xl font-bold mb-2">
                {product.name}
              </h2>

              <p className="text-gray-600 mb-2">
                {product.category}
              </p>

              <p className="text-green-600 font-semibold mb-4">
                ₹ {product.price}
              </p>

              <Link
                to={`/product/${product.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                View Product
              </Link>

            </div>

          ))
        }

      </div>

      <div className="flex justify-center gap-4 mt-10">

        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Prev
        </button>

        <p className="text-xl font-bold">
          {currentPage}
        </p>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Next
        </button>

      </div>

    </div>

  );

}


export default Analytics;