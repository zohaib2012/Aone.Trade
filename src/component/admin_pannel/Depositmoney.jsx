

import { useState } from 'react';
import { useDisplayMoneyQuery } from '../../redux/Depositmoney';
import { Images } from 'lucide-react';

export const Depositmoney = () => {

    const { data, error, isLoading, isError } = useDisplayMoneyQuery();

    const [selectedImage, setSelectedImage] = useState(0);
    
    console.log("one")
console.log(data)
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#23282B]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00B894]"></div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#23282B] text-red-500">
                Error loading account details: {error.message}
            </div>
        );
    }

    console.log(data)
    // Extract accounts from the API response
    const accounts = data?.data?.map(account => ({
        Transaction: account._id,
        date: account.date,
        createdAt: account.createdAt,
        amount: account.amount,
        images:account.images
    })) || [];

    return (
        <div className="bg-[#23282B] min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto text-white font-sans">
        
                <h1 className='bg-gray-700 boder-1 p-2 border-gray-950 my-2 h-14 text-center font-semibold  text-3xl text-white'>Deposit Money Transactions</h1>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#2C3235] border-2 border-gray-600 text-gray-400 text-sm">
                            <tr>
                                <th className="p-3">TransactionId</th>
                                <th className="p-3">Date</th>
                                <th className="p-3">Time</th>
                                <th className="p-3">Amount</th>
                                <th className="p-3">Images</th>
                                <th className="p-3">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account, index) => (
                                <tr key={index} className="border-b border-gray-600 bg-[#2C3235] hover:bg-[#3a3a3a]">
                                  
                                    <td className="p-3">{account.Transaction}</td>
                                    <td className="p-3 text-sm text-gray-400">
                                        {account.date}
                                    </td>
                                    <td className="p-3">
                                        {account.createdAt}
                                    </td>
                                    <td className="p-3">
                                        {account.amount}
                                    </td>
                                    <td className="p-3">
                                    <div className="mb-4 border rounded-lg overflow-hidden">
        <img 
          src={account.images[selectedImage]} 
          alt={`Product image ${selectedImage + 1}`}
          className="w-full fit object-contain"
        />
      </div>
     
    
            {/* <div 
              key={index} 
              className={`cursor-pointer border-2 rounded ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'}`}
              onClick={() => setSelectedImage(index)}
            > */}
              {/* <img 
                src={Images} 
                alt={`Thumbnail ${index + 1}`}
                className="h-16 w-16 object-cover"
              /> */}
            {/* </div> */}
        
                                    </td>
                                    <td className="p-3">

                                        <div className="flex space-x-2">
                                            <button className="bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm">
                                                Register
                                            </button>
                                            <button className="bg-gray-800 text-[#00B894] px-3 py-1 rounded text-sm">
                                                Trade
                                            </button>
                                        </div>


                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
