export default function CartModal(props) {
    const { carts, handleCartQuantity, handleDeleteCart, handleClose } = props

    const renderCarts = () => {
        if (carts.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center py-12">
                    <div className="relative mb-6">
                        <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-70"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-blue-400 relative z-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                    <p className="text-2xl font-bold text-gray-700">Giỏ hàng trống</p>
                    <p className="text-gray-500 mt-2 mb-6 text-center">Chưa có sản phẩm nào trong giỏ hàng của bạn</p>
                    <button 
                        onClick={handleClose}
                        className="mt-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium text-sm rounded-lg hover:from-blue-700 hover:to-blue-900 transition-colors shadow-md transform hover:scale-105 transition-transform"
                    >
                        Tiếp tục mua sắm
                    </button>
                </div>
            )
        }

        return (
            <>
                <div className="overflow-x-auto">
                    <table className="w-full min-w-full divide-y divide-gray-200">
                        <thead className="bg-gradient-to-r from-gray-50 to-blue-50">
                            <tr>
                                <th scope="col" className="px-4 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Sản phẩm</th>
                                <th scope="col" className="px-4 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Giá</th>
                                <th scope="col" className="px-4 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Số lượng</th>
                                <th scope="col" className="px-4 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tổng tiền</th>
                                <th scope="col" className="px-4 py-3.5 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {carts.map((item) => (
                                <tr key={item.id} className="hover:bg-blue-50 transition-colors">
                                    <td className="px-4 py-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-16 w-16 bg-gray-50 rounded-md overflow-hidden border border-gray-100">
                                                <img className="h-full w-full object-contain p-1" src={item.image} alt={item.name} />
                                            </div>
                                            <div className="ml-4 max-w-[180px]">
                                                <div className="text-sm font-medium text-gray-900 line-clamp-2">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="flex items-center space-x-2">
                                            <button
                                                disabled={item.soLuong === 1}
                                                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
                                                onClick={() => handleCartQuantity(item.id, -1)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                </svg>
                                            </button>
                                            <span className="text-gray-900 font-medium w-6 text-center">{item.soLuong}</span>
                                            <button
                                                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                                                onClick={() => handleCartQuantity(item.id, 1)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="text-sm font-bold text-blue-700">${(item.price * item.soLuong).toFixed(2)}</div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-right">
                                        <button
                                            className="text-red-500 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-full"
                                            onClick={() => handleDeleteCart(item.id)}
                                            aria-label="Xóa"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-6 border-t pt-6 bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <p className="text-lg font-semibold text-gray-700">Tổng tiền:</p>
                            <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                                ${carts.reduce((total, item) => total + item.price * item.soLuong, 0).toFixed(2)}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <button 
                                onClick={handleClose}
                                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-100 transition-colors flex-1 md:flex-none text-center"
                            >
                                Tiếp tục mua sắm
                            </button>
                            <button 
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium text-sm rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all shadow-md flex-1 md:flex-none text-center"
                            >
                                Thanh toán ngay
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 flex justify-center items-start overflow-y-auto py-8">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full m-4 max-h-[90vh] overflow-hidden animate-modalAppear">
                <div className="flex items-center justify-between p-5 border-b bg-gradient-to-r from-gray-50 to-blue-50">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h18l-2-9H7z" />
                        </svg>
                        Giỏ hàng 
                        <span className="ml-2 bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded-full">
                            {carts.reduce((total, item) => total + item.soLuong, 0)} sản phẩm
                        </span>
                    </h3>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition p-2 hover:bg-gray-100 rounded-full"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-60px)]">
                    {renderCarts()}
                </div>
            </div>
        </div>
    )
}