import { useState } from 'react'
import ShoeItem from './ShoeItem'
import ShoeDetailModal from './ShoeDetailModal'
import CartModal from './CartModal'
import data from '../data.json'

export default function ShoeShop() {
    const [shoeList] = useState(data)
    const [selectedShoe, setSelectedShoe] = useState(null)
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
    const [carts, setCarts] = useState([])

    // Mở modal chi tiết sản phẩm
    const handleSelectShoe = (shoe) => {
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
        <div className="container mx-auto p-5">
            <h1 className="text-5xl text-center mb-5 font-bold">Shoe Shop</h1>
            <CartModal
                carts={carts}
                handleCartQuantity={handleCartQuantity}
                handleDeleteCart={handleDeleteCart}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {shoeList.map((shoe) => (
                    <ShoeItem
                        key={shoe.id}
                        shoe={shoe}
                        handleSelectShoe={handleSelectShoe}
                        handleAddCart={handleAddCart}
                    />
                ))}
            </div>
            {isDetailModalOpen && (
                <ShoeDetailModal
                    shoe={selectedShoe}
                    handleClose={handleCloseDetailModal}
                />
            )}
        </div>
    )
}