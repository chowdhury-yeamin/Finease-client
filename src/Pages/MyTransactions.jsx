import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

const MyTransactions = () => {
    const { user } = useContext(AuthContext);
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch transactions (you'll need to implement this with your backend)
    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                setIsLoading(true);
                // Replace this with your actual API call
                // Example: const response = await fetch(`/api/transactions/${user.email}`);
                // const data = await response.json();
                // setTransactions(data);
                
                // Temporary mock data
                const mockData = [
                    {
                        id: 1,
                        type: 'Income',
                        category: 'Salary',
                        amount: 5000,
                        date: '2025-11-09',
                        description: 'Monthly salary'
                    },
                    {
                        id: 2,
                        type: 'Expense',
                        category: 'Shopping',
                        amount: 150,
                        date: '2025-11-08',
                        description: 'Groceries'
                    }
                ];
                setTransactions(mockData);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (user?.email) {
            fetchTransactions();
        }
    }, [user]);

    const handleUpdate = (id) => {
        console.log('Update transaction:', id);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this transaction?')) {
            console.log('Delete transaction:', id);
        }
    };
    const handleViewDetails = (transaction) => {
        console.log('View transaction details:', transaction);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">My Transactions</h1>
            
            {transactions.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-gray-500 text-xl">No transactions found</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {transactions.map((transaction) => (
                        <div 
                            key={transaction.id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                            <div className={`p-4 ${
                                transaction.type === 'Income' 
                                    ? 'bg-green-50 border-l-4 border-green-500' 
                                    : 'bg-red-50 border-l-4 border-red-500'
                            }`}>
                                <div className="flex justify-between items-center mb-3">
                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                        transaction.type === 'Income'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                        {transaction.type}
                                    </span>
                                    <span className="font-mono font-bold text-lg">
                                        {transaction.type === 'Income' ? '+' : '-'}$
                                        {transaction.amount.toLocaleString()}
                                    </span>
                                </div>
                                
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Category:</span>
                                        <span className="font-medium">{transaction.category}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Date:</span>
                                        <span className="font-medium">
                                            {new Date(transaction.date).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-50 flex justify-between gap-2">
                                <button
                                    onClick={() => handleViewDetails(transaction)}
                                    className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                >
                                    View Details
                                </button>
                                <button
                                    onClick={() => handleUpdate(transaction.id)}
                                    className="flex-1 px-3 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-200"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(transaction.id)}
                                    className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyTransactions;