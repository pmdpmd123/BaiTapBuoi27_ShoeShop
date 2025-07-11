export default function ShoeItem(props) {
    const { shoe, handleSelectShoe, handleAddCart } = props

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between">
            <img
                className="rounded-t-lg cursor-pointer p-4"
                src={shoe.image}
                alt={shoe.name}
                onClick={() => handleSelectShoe(shoe)} // Click vào ảnh để xem chi tiết
            />
            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    {shoe.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700">${shoe.price}</p>
                <button
                    type="button"
                    className="w-full text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    onClick={() => handleAddCart(shoe)}
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}