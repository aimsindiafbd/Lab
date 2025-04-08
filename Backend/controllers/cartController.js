import userModel from "../models/userModel.js"


// add test to user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, name } = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;
        if (cartData[itemId]) {
            if (cartData[itemId][name]) {
                cartData[itemId][name] += 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][name] = 1;
        }
        await userModel.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: "Add to Cart" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// update cart
const updateToCart = async (req, res) => {
    try {
        const { userId, itemId, name, quantity } = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        cartData[itemId][name] = quantity
        await userModel.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: "Delete from Cart" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// get user cart data
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;
        res.json({ success: true, cartData })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { addToCart, updateToCart, getUserCart };
