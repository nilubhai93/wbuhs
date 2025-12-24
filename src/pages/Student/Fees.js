import React from 'react';
import StudentLayout from '../../components/studentLayout/StudentLayout';
import {
  FaCreditCard,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaReceipt
} from 'react-icons/fa';

const Fees = () => {
  const feeData = {
    totalOutstanding: '₹45,000',
    totalPaid: '₹2,55,000',
    nextDueDate: '2024-02-15',
    feeStructure: [
      { category: 'Tuition Fee', amount: '₹1,50,000', status: 'Paid', dueDate: '2024-01-15' },
      { category: 'Hostel Fee', amount: '₹25,000', status: 'Paid', dueDate: '2024-01-15' },
      { category: 'Examination Fee', amount: '₹5,000', status: 'Pending', dueDate: '2024-02-15' },
      { category: 'Library Fee', amount: '₹2,000', status: 'Paid', dueDate: '2024-01-15' },
      { category: 'Sports Fee', amount: '₹3,000', status: 'Paid', dueDate: '2024-01-15' },
      { category: 'Medical Insurance', amount: '₹10,000', status: 'Pending', dueDate: '2024-02-15' }
    ],
    paymentHistory: [
      { date: '2024-01-15', description: 'Semester 5 Fees', amount: '₹1,75,000', status: 'Paid' },
      { date: '2023-08-15', description: 'Semester 4 Fees', amount: '₹1,70,000', status: 'Paid' },
      { date: '2023-01-15', description: 'Semester 3 Fees', amount: '₹1,65,000', status: 'Paid' },
      { date: '2022-08-15', description: 'Semester 2 Fees', amount: '₹1,60,000', status: 'Paid' },
      { date: '2022-01-15', description: 'Semester 1 Fees', amount: '₹1,55,000', status: 'Paid' }
    ]
  };

  const getStatusColor = (status) => {
    return status === 'Paid' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100';
  };

  const getStatusIcon = (status) => {
    return status === 'Paid' ? <FaCheckCircle className="text-green-500" /> : <FaExclamationTriangle className="text-red-500" />;
  };

  return (
    <StudentLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaCreditCard className="mr-3 text-green-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Fees & Payments</h2>
              <p className="text-gray-600 mt-1">Manage your fee payments and view payment history</p>
            </div>
          </div>
        </div>

        {/* Fee Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaMoneyBillWave className="text-red-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Outstanding Amount</p>
                <p className="text-2xl font-bold text-red-600">{feeData.totalOutstanding}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Total Paid</p>
                <p className="text-2xl font-bold text-green-600">{feeData.totalPaid}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaCalendarAlt className="text-blue-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Next Due Date</p>
                <p className="text-lg font-bold text-blue-600">{new Date(feeData.nextDueDate).toLocaleDateString('en-IN')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fee Structure */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaReceipt className="text-blue-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Fee Structure</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Category</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Status</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {feeData.feeStructure.map((fee, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-800">{fee.category}</td>
                    <td className="py-3 px-4 text-gray-700">{fee.amount}</td>
                    <td className="py-3 px-4 text-center">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(fee.status)}`}>
                        {getStatusIcon(fee.status)}
                        <span className="ml-2">{fee.status}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center text-gray-700">
                      {new Date(fee.dueDate).toLocaleDateString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaCreditCard className="text-green-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Payment History</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Description</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {feeData.paymentHistory.map((payment, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700">
                      {new Date(payment.date).toLocaleDateString('en-IN')}
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-800">{payment.description}</td>
                    <td className="py-3 px-4 text-gray-700">{payment.amount}</td>
                    <td className="py-3 px-4 text-center">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(payment.status)}`}>
                        {getStatusIcon(payment.status)}
                        <span className="ml-2">{payment.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Fees;
