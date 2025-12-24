import React from 'react';
import { FaCreditCard, FaMoneyBillWave, FaCalendarAlt, FaCheckCircle, FaClock, FaExclamationTriangle, FaDownload } from 'react-icons/fa';
import ParentLayout from '../../../components/ParentLayout/ParentLayout';

const ViewPaymentHistory = () => {
    const paymentHistory = [
        {
            id: 1,
            date: '2024-01-15',
            description: 'Tuition Fee - Semester 3',
            amount: 25000,
            status: 'paid',
            paymentMethod: 'Online Banking',
            transactionId: 'TXN20240115001',
            dueDate: '2024-01-10'
        },
        {
            id: 2,
            date: '2024-01-10',
            description: 'Hostel Fee - January',
            amount: 8000,
            status: 'paid',
            paymentMethod: 'UPI',
            transactionId: 'TXN20240110002',
            dueDate: '2024-01-05'
        },
        {
            id: 3,
            date: '2023-12-20',
            description: 'Examination Fee',
            amount: 1500,
            status: 'paid',
            paymentMethod: 'Credit Card',
            transactionId: 'TXN20231220003',
            dueDate: '2023-12-15'
        },
        {
            id: 4,
            date: '2024-02-15',
            description: 'Tuition Fee - Semester 4',
            amount: 25000,
            status: 'pending',
            paymentMethod: '-',
            transactionId: '-',
            dueDate: '2024-02-10'
        },
        {
            id: 5,
            date: '2024-02-10',
            description: 'Hostel Fee - February',
            amount: 8000,
            status: 'overdue',
            paymentMethod: '-',
            transactionId: '-',
            dueDate: '2024-02-05'
        }
    ];

    const paymentSummary = {
        totalPaid: 41500,
        totalPending: 33000,
        totalOverdue: 8000,
        thisMonthPaid: 33000,
        nextDueDate: '2024-02-10',
        nextDueAmount: 25000
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'paid':
                return <FaCheckCircle className="text-green-500" />;
            case 'pending':
                return <FaClock className="text-yellow-500" />;
            case 'overdue':
                return <FaExclamationTriangle className="text-red-500" />;
            default:
                return null;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'paid':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'overdue':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(amount);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <ParentLayout>
            <div className="p-6 space-y-6">
                {/* Page Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <FaCreditCard className="mr-3 text-indigo-600 text-3xl" />
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">Payment History</h2>
                            <p className="text-gray-600 mt-1">View all payment transactions and outstanding dues.</p>
                        </div>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition flex items-center">
                        <FaDownload className="mr-2" />
                        Download Statement
                    </button>
                </div>

                {/* Payment Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Total Paid</p>
                                <p className="text-2xl font-bold text-green-600">{formatCurrency(paymentSummary.totalPaid)}</p>
                            </div>
                            <FaMoneyBillWave className="text-green-500 text-3xl" />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Pending Payments</p>
                                <p className="text-2xl font-bold text-yellow-600">{formatCurrency(paymentSummary.totalPending)}</p>
                            </div>
                            <FaClock className="text-yellow-500 text-3xl" />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Overdue Amount</p>
                                <p className="text-2xl font-bold text-red-600">{formatCurrency(paymentSummary.totalOverdue)}</p>
                            </div>
                            <FaExclamationTriangle className="text-red-500 text-3xl" />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Next Due</p>
                                <p className="text-lg font-bold text-gray-800">{formatDate(paymentSummary.nextDueDate)}</p>
                                <p className="text-sm text-gray-600">{formatCurrency(paymentSummary.nextDueAmount)}</p>
                            </div>
                            <FaCalendarAlt className="text-blue-500 text-3xl" />
                        </div>
                    </div>
                </div>

                {/* Payment History Table */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Transaction History</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <th className="text-left py-3 px-4">Date</th>
                                    <th className="text-left py-3 px-4">Description</th>
                                    <th className="text-right py-3 px-4">Amount</th>
                                    <th className="text-center py-3 px-4">Status</th>
                                    <th className="text-left py-3 px-4">Payment Method</th>
                                    <th className="text-left py-3 px-4">Transaction ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paymentHistory.map((payment) => (
                                    <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-3 px-4">{formatDate(payment.date)}</td>
                                        <td className="py-3 px-4">
                                            <div>
                                                <p className="font-medium text-gray-800">{payment.description}</p>
                                                {payment.status !== 'paid' && (
                                                    <p className="text-xs text-gray-500">Due: {formatDate(payment.dueDate)}</p>
                                                )}
                                            </div>
                                        </td>
                                        <td className="py-3 px-4 text-right font-semibold">{formatCurrency(payment.amount)}</td>
                                        <td className="py-3 px-4 text-center">
                                            <div className="flex items-center justify-center">
                                                {getStatusIcon(payment.status)}
                                                <span className={`ml-2 px-2 py-1 rounded text-xs font-medium ${getStatusColor(payment.status)}`}>
                                                    {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-4">{payment.paymentMethod}</td>
                                        <td className="py-3 px-4">
                                            <span className="font-mono text-xs text-gray-600">{payment.transactionId}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
                            <FaCreditCard className="text-3xl mb-2" />
                            <span className="text-sm font-medium">Pay Pending Fees</span>
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
                            <FaDownload className="text-3xl mb-2" />
                            <span className="text-sm font-medium">Download Receipt</span>
                        </button>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center">
                            <FaCalendarAlt className="text-3xl mb-2" />
                            <span className="text-sm font-medium">Set Payment Reminder</span>
                        </button>
                    </div>
                </div>
            </div>
        </ParentLayout>
    );
};

export default ViewPaymentHistory;
