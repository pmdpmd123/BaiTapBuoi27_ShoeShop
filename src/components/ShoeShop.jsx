import { useState } from 'react'
import ShoeItem from './ShoeItem'
import ShoeDetailModal from './ShoeDetailModal'
import CartModal from './CartModal'
import data from '../data.json'

export default function ShoeShop() {
    const [shoeList] = useState(data)
    const [selectedShoe, setSelectedShoe] = useState(null)
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
    const [isCartModalOpen, setIsCartModalOpen] = useState(false)
    const [carts, setCarts] = useState([])

    // Mở modal chi tiết sản phẩm
    const handleSelectShoe = (shoe) => {
        console.log('Selected shoe:', shoe);
        setSelectedShoe(shoe)
        setIsDetailModalOpen(true)
    }

    // Đóng modal chi tiết sản phẩm
    const handleCloseDetailModal = () => {
        setIsDetailModalOpen(false)
    }

    // Thêm sản phẩm vào giỏ hàng
    const handleAddCart = (shoe) => {
        const newCarts = [...carts]
        const index = newCarts.findIndex((item) => item.id === shoe.id)

        if (index === -1) {
            setCarts([...newCarts, { ...shoe, soLuong: 1 }])
        } else {
            newCarts[index].soLuong += 1
            setCarts(newCarts)
        }
    }

    // Thay đổi số lượng sản phẩm trong giỏ hàng
    const handleCartQuantity = (shoeId, quantity) => {
        const newCarts = carts.map((item) => {
            if (item.id !== shoeId) return item
            return { ...item, soLuong: item.soLuong + quantity }
        })
        setCarts(newCarts)
    }

    // Xóa sản phẩm khỏi giỏ hàng
    const handleDeleteCart = (shoeId) => {
        setCarts(carts.filter((item) => item.id !== shoeId))
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-6 px-2 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4 bg-white p-4 rounded-xl shadow-md">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm-3.71 3.96a.75.75 0 01.99.13l2.75 3.5A.75.75 0 119 9.5V8h2.5a.75.75 0 010 1.5H7.5a.75.75 0 01-.75-.75v-3a.75.75 0 01.54-.71z" clipRule="evenodd" />
                        </svg>
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 tracking-tight drop-shadow-sm mb-0 text-center md:text-left">
                            Shoe Shop
                        </h1>
                    </div>
                    <button
                        className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg hover:from-blue-700 hover:to-blue-900 font-bold shadow-md transition-all text-base md:text-lg transform hover:scale-105"
                        onClick={() => setIsCartModalOpen(true)}
                    >
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-6 h-6'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3' />
                        </svg>
                        Giỏ hàng <span className="bg-white text-blue-700 rounded-full px-2.5 py-0.5 ml-1 font-bold shadow-inner">{carts.length}</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {shoeList.map((shoe) => (
                        <ShoeItem
                            key={shoe.id}
                            shoe={shoe}
                            handleSelectShoe={handleSelectShoe}
                            handleAddCart={handleAddCart}
                        />
                    ))}
                </div>
            </div>
            {isDetailModalOpen && (
                <ShoeDetailModal
                    shoe={selectedShoe}
                    handleClose={handleCloseDetailModal}
                    handleAddCart={handleAddCart}
                />
            )}
            {isCartModalOpen && (
                <CartModal
                    carts={carts}
                    setCarts={setCarts}
                    handleClose={() => setIsCartModalOpen(false)}
                    handleCartQuantity={handleCartQuantity}
                    handleDeleteCart={handleDeleteCart}
                />
            )}
        </div>
    )
}