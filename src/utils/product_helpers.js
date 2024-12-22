export const increment = (setCount, count) => {
    setCount(count + 1);
}

export const decrement = (setCount, count) => {
    if (count > 1) {
        setCount(count - 1)
    }
}

export const handlePress = async (userLogin, navigation, item, setRefetch) => {
    if (userLogin == false) {
        // go to a different page
        console.log("handle press");
    } else {
        try {
            // user id
            const userId = 1;

            // data
            const data = {
                userId: userId,
                productId: item.id,
                imageUrl: item.path,
                price: item.price,
                title: item.title
            };

            console.log("Sending mock data ", data);

            // endpoint 
            const response = await mockApiCall(data);

            // response
            if (response.status == 201 || response.status == 200) {
                setRefetch(response.data.productId);
                console.log("Set fav item")
            }

            // check response

        } catch (e) {
            console.log("Error: ", e);
        }
    }
};


export const handleCart = async (navigation, item, count, userLogin, setUserCart) => {
   if(userLogin == false) {
        //navigate to login page
   } else {
        console.log("user has logged in");
   } 
};


const mockApiCall = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: 201,
                data: { productId: data.productId }
            });
        }, 1000)
    });
}