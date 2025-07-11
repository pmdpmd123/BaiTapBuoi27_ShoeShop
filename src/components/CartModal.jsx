export default function CartModal(props) {
    const { carts, handleCartQuantity, handleDeleteCart } = props

    const renderCarts = () => {
        if (carts.length === 0) {
            return (
                <tr>
                    <td colSpan="6" className="text-center p-5">
                        Your cart is empty.
                    </td>
                </tr>
            )
        }

        return carts.map((item) => {
            return (
                <tr
                    key={item.id}
                    className="bg-white border-b"
                >
                    <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        {item.name}
                    </th>
                    <td className="px-6 py-4">
                        <img className="w-20" src={item.image} alt={item.name} />
                    </td>
                    <td className="px-6 py-4">${item.price}</td>
                    <td className="px-6 py-4 space-x-2">
                        <button
                            disabled={item.soLuong === 1}
                            className="px-2 py-1 rounded-md border border-black text-black disabled:opacity-50"
                            onClick={() => handleCartQuantity(item.id, -1)}
                        >
                            -
                        </button>
                        <span>{item.soLuong}</span>
                        <button
                            className="px-2 py-1 rounded-md border border-black text-black"
                            onClick={() => handleCartQuantity(item.id, 1)}
                        >
                            +
                        </button>
                    </td>
                    <td className="px-6 py-4 font-bold">${item.price * item.soLuong}</td>
                    <td className="px-6 py-4">
                        <button
                            className="font-bold text-red-500 hover:text-red-700"
                            onClick={() => handleDeleteCart(item.id)}
                        >
                            Remove
                        </button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div>
            <button
                data-modal-target="cart-modal"
                data-modal-toggle="cart-modal"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4"
                type="button"
            >
                Cart ({carts.reduce((total, item) => total + item.soLuong, 0)})
            </button>
            <div
                id="cart-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative p-4 w-full max-w-4xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Shopping Cart
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                data-modal-hide="cart-modal"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-500">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">Product name</th>
                                            <th scope="col" className="px-6 py-3">Image</th>
                                            <th scope="col" className="px-6 py-3">Price</th>
                                            <th scope="col" className="px-6 py-3">Quantity</th>
                                            <th scope="col" className="px-6 py-3">Total</th>
                                            <th scope="col" className="px-6 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderCarts()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}