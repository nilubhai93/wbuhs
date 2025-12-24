import React from 'react';
import StudentLayout from '../../components/studentLayout/StudentLayout';
import {
  FaBook,
  FaSearch,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaBookOpen,
  FaReceipt,
  FaUser
} from 'react-icons/fa';

const Library = () => {
  const libraryData = {
    borrowedBooks: [
      {
        title: 'Guyton and Hall Textbook of Medical Physiology',
        author: 'John E. Hall',
        isbn: '978-0-323-59712-8',
        borrowDate: '2024-01-10',
        dueDate: '2024-02-10',
        status: 'Active',
        fine: '₹50'
      },
      {
        title: 'Harrison\'s Principles of Internal Medicine',
        author: 'Dennis L. Kasper',
        isbn: '978-1-259-64403-0',
        borrowDate: '2024-01-05',
        dueDate: '2024-02-05',
        status: 'Active',
        fine: '₹0'
      },
      {
        title: 'Robbins Basic Pathology',
        author: 'Vinay Kumar',
        isbn: '978-0-323-35317-5',
        borrowDate: '2023-12-20',
        dueDate: '2024-01-20',
        status: 'Active',
        fine: '₹0'
      }
    ],
    returnedBooks: [
      {
        title: 'Gray\'s Anatomy for Students',
        author: 'Richard L. Drake',
        isbn: '978-0-443-05868-7',
        borrowDate: '2023-11-15',
        returnDate: '2023-12-15',
        status: 'Returned'
      },
      {
        title: 'Netter\'s Atlas of Human Anatomy',
        author: 'Frank H. Netter',
        isbn: '978-0-323-79161-9',
        borrowDate: '2023-10-20',
        returnDate: '2023-11-20',
        status: 'Returned'
      }
    ],
    reservations: [
      {
        title: 'Campbell Biology',
        author: 'Lisa A. Urry',
        isbn: '978-0-131-89794-0',
        requestDate: '2024-01-20',
        status: 'Pending'
      }
    ],
    stats: {
      booksBorrowed: 3,
      booksReturned: 15,
      totalFines: '₹50',
      membershipExpiry: '2024-12-31'
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-blue-600 bg-blue-100';
      case 'Returned': return 'text-green-600 bg-green-100';
      case 'Pending': return 'text-yellow-600 bg-yellow-100';
      case 'Overdue': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active': return <FaCheckCircle className="text-blue-500" />;
      case 'Returned': return <FaCheckCircle className="text-green-500" />;
      case 'Pending': return <FaClock className="text-yellow-500" />;
      case 'Overdue': return <FaExclamationTriangle className="text-red-500" />;
      default: return <FaExclamationTriangle className="text-gray-500" />;
    }
  };

  return (
    <StudentLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaBook className="mr-3 text-blue-600 text-3xl" />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Library</h2>
              <p className="text-gray-600 mt-1">Manage your library books and reservations</p>
            </div>
          </div>
        </div>

        {/* Library Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaBookOpen className="text-blue-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Books Borrowed</p>
                <p className="text-2xl font-bold text-gray-800">{libraryData.stats.booksBorrowed}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Books Returned</p>
                <p className="text-2xl font-bold text-gray-800">{libraryData.stats.booksReturned}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaReceipt className="text-red-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Total Fines</p>
                <p className="text-2xl font-bold text-red-600">{libraryData.stats.totalFines}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <FaUser className="text-purple-500 text-2xl mr-3" />
              <div>
                <p className="text-sm text-gray-500">Membership Expiry</p>
                <p className="text-lg font-bold text-purple-600">{new Date(libraryData.stats.membershipExpiry).toLocaleDateString('en-IN')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Currently Borrowed Books */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaBookOpen className="text-blue-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Currently Borrowed Books</h3>
          </div>
          <div className="space-y-4">
            {libraryData.borrowedBooks.map((book, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{book.title}</h4>
                    <p className="text-sm text-gray-600">by {book.author}</p>
                    <p className="text-xs text-gray-500">ISBN: {book.isbn}</p>
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(book.status)}`}>
                    {getStatusIcon(book.status)}
                    <span className="ml-2">{book.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Borrow Date</p>
                    <p className="font-medium text-gray-800">
                      {new Date(book.borrowDate).toLocaleDateString('en-IN')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Due Date</p>
                    <p className="font-medium text-gray-800">
                      {new Date(book.dueDate).toLocaleDateString('en-IN')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Fine</p>
                    <p className={`font-medium ${book.fine === '₹0' ? 'text-green-600' : 'text-red-600'}`}>
                      {book.fine}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Days Left</p>
                    <p className="font-medium text-gray-800">
                      {Math.max(0, Math.ceil((new Date(book.dueDate) - new Date()) / (1000 * 60 * 60 * 24)))} days
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Returned Books History */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaCheckCircle className="text-green-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Returned Books History</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Book Title</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Author</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Borrow Date</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Return Date</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {libraryData.returnedBooks.map((book, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-800">{book.title}</td>
                    <td className="py-3 px-4 text-gray-700">{book.author}</td>
                    <td className="py-3 px-4 text-center text-gray-700">
                      {new Date(book.borrowDate).toLocaleDateString('en-IN')}
                    </td>
                    <td className="py-3 px-4 text-center text-gray-700">
                      {new Date(book.returnDate).toLocaleDateString('en-IN')}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(book.status)}`}>
                        {getStatusIcon(book.status)}
                        <span className="ml-2">{book.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Book Reservations */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <FaClock className="text-orange-500 mr-2 text-xl" />
            <h3 className="text-xl font-bold text-gray-800">Book Reservations</h3>
          </div>
          <div className="space-y-4">
            {libraryData.reservations.map((reservation, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{reservation.title}</h4>
                    <p className="text-sm text-gray-600">by {reservation.author}</p>
                    <p className="text-xs text-gray-500">ISBN: {reservation.isbn}</p>
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(reservation.status)}`}>
                    {getStatusIcon(reservation.status)}
                    <span className="ml-2">{reservation.status}</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Request Date</p>
                  <p className="font-medium text-gray-800">
                    {new Date(reservation.requestDate).toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Library;
