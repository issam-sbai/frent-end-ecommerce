
import React, { useEffect, useState } from 'react';
import { FaEllipsisV, FaEdit, FaTrash } from 'react-icons/fa';

import axios from 'axios';

export function Products() {
  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      description: "liamjames@example.com",
      price: "+1 (555) 000-000",
      position: "Software engineer",
      salary: "$100K",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Product designer",
      salary: "$90K",
    },
  ];

  const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('token'); // Retrieve the JWT token from localStorage
                const response = await axios.get('http://localhost:8080/api/produits')
                // , {
                //     headers: {
                //         Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
                //     },
                // });

                // Check if the response is successful (status code 200)
                if (response.status === 200) {
                    setProducts(response.data);
                    console.log(response.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

  return (
    <div className="my-10 flex w-full flex-col gap-8">
      <div className="  px-4 md:px-8">
        <div className="max-w-lg">
          <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
            Products
          </h3>
          <p className="mt-2 text-gray-600">A list of products</p>
        </div>
        <div className="mt-12 overflow-x-auto rounded-lg border shadow-sm">
          <table className="w-full table-auto text-left text-sm">
            <thead className="border-b bg-gray-50 font-medium text-gray-600">
              <tr>
                <th className="py-3 px-6">Image</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Description</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Contity</th>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6">Edit</th>
                <th className="py-3 px-6">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y text-gray-600">
              {products.map((item, idx) => (
                <tr key={idx}>
                  <td className="flex items-center gap-x-3 whitespace-nowrap py-3 px-6">
                    <img src={item.image} className="h-10 w-10 rounded-full" />
                    
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.nom}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.description}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.prix}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.quantite}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.categorie.nom}
                    
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      <FaEdit />
                    </a>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <a href="#" className="text-red-600 hover:text-red-900">
                      <FaEdit />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
