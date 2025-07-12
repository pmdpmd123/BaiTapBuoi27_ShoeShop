export default function ShoeItem(props) {
    const { shoe, handleSelectShoe, handleAddCart } = props

    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:-translate-y-1 hover:scale-[1.02]">
            <div className="relative bg-gradient-to-br from-blue-50 to-white p-6">
                <div className="absolute inset-0 bg-white/30 rounded-full blur-xl"></div>
                <img
                    className="h-52 w-full object-contain mx-auto cursor-pointer hover:scale-110 transition-transform duration-500 relative z-10"
                    src={shoe.image}
                    alt={shoe.name}
                    onClick={() => handleSelectShoe(shoe)}
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                    NEW
                </div>
            </div>
            <div className="p-5 flex-grow flex flex-col">
                <h5 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 h-14 hover:text-blue-700 transition-colors">
                    {shoe.name}
                </h5>
                <div className="flex items-center mt-1 mb-3">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(150 reviews)</span>
                </div>
                <p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 mt-auto mb-4">
                    ${shoe.price}
                </p>
                <div className="flex flex-col gap-2 mt-auto">
                    <button
                        type="button"
                        className="w-full text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all shadow-md"
                        onClick={() => handleAddCart(shoe)}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                            </svg>
                            Add to cart
                        </div>
                    </button>
                    <button
                        type="button"
                        className="w-full text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors"
                        onClick={() => handleSelectShoe(shoe)}
                    >
                        Xem chi tiết
                    </button>
                </div>
            </div>
        </div>
    )
}