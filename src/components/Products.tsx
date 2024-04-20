import React, { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
}

function Products(): JSX.Element {
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products") //YE URL CHANGE KARNA HAI
            .then((res) => res.json())
            .then((json: Product[]) => setData(json));
    }, []);

    return (
        
        <div>
            <div className="flex items-center justify-center flex-wrap">
                {data.map((item: Product) => (
                    <div key={item.id} className="flex items-center justify-between p-5">
                        <div
                            className="flex flex-col items-center justify-center space-y-3 shadow-2xl h-96 w-80 cursor-pointer hover:drop-shadow-xl transition-all duration-500 rounded-xl border-black border"
                        >
                            <img src={item.image} alt={item.title} className="h-60 w-52" />
                            <div className="flex flex-col items-center justify-center flex-wrap px-3 space-y-6">
                                <h1 className="text-gray-400 text-sm">{item.title}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
