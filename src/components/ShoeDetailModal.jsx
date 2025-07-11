export default function ShoeDetailModal({ shoe, handleClose }) {
    if (!shoe) return null

    return (
        // Backdrop
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
            onClick={handleClose}
        >
            {/* Modal Content */}
            <div
                className="bg-white rounded-lg shadow-xl w-11/12 md:w-3/4 lg:w-1/2 p-5"
                onClick={(e) => e.stopPropagation()} // Ngăn việc click bên trong modal đóng modal
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">{shoe.name}</h3>
                        <img
                            src={shoe.image}
                            alt={shoe.name}
                            className="w-full rounded"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold border-b pb-2 mb-2">
                            Details
                        </h4>
                        <p className="mb-4">{shoe.description}</p>
                        <p className="font-semibold">
                            Price: <span className="font-bold text-red-600">${shoe.price}</span>
                        </p>
                        <p className="font-semibold">
                            In Stock: <span className="font-normal">{shoe.quantity}</span>
                        </p>
                        <div className="text-right mt-5">
                            <button
                                onClick={handleClose}
                                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}