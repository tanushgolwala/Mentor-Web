import React, { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
}

function Products(): JSX.Element {
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((json: { products: Product[] }) => setData(json.products));
    }, []);

    return (
        <div>
            <div className="flex items-center justify-center flex-wrap">
                {data.map((item: Product) => (
                    <div key={item.id} className="flex items-center justify-between p-5">
                        <div
                            className="flex flex-col items-center justify-center space-y-3 shadow-2xl h-96 w-80 cursor-pointer hover:drop-shadow-xl transition-all duration-500 rounded-xl border-black border"
                        >
                            <img src={item.thumbnail} alt={item.title} className="h-40 w-40 rounded-full" />
                            <div className="flex flex-col items-center justify-center flex-wrap px-3 space-y-6">
                                <h1 className="text-gray-400 text-md">{item.title}</h1>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
