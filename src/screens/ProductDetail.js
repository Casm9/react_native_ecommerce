import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import styles from '../styles/product.style';
import { RatingInput } from 'react-native-stock-star-rating';
import { theme } from '../constants/theme';
import { AntDesign, Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { decrement, handlePress, increment, handleCart } from '../utils/product_helpers';
import { LoginContext } from '../contexts/UserLoginContext';
import { FavContext } from '../contexts/RefetchFavContext';
import { CartContext } from '../contexts/UserCartContext';


export default function ProductDetail({navigation}) {
    const [rating, setRating] = useState(0);
    const [count, setCount] = useState(1);
    const { userLogin, setUserLogin } = useContext(LoginContext);
    const { refetchFav, setRefetchFav } = useContext(FavContext);
    const { userCart, setUserCart} = useContext(CartContext);
    const route = useRoute();
    const item = route.params.item;
    console.log("product id is ", item.id);
    console.log("fav id is ", refetchFav);

    return (
        <View style={styles.container} >
            <Image style={styles.image} source={item.path} />
            <View style={styles.details}>
                {/* this is for title and price */}
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                </View>
                <View style={styles.ratingRow}>
                    {/* this is for star rating */}
                    <View style={styles.rating}>
                        <RatingInput
                            rating={rating}
                            setRating={setRating}
                            size={25}
                            maxStars={5}
                            color={theme.colors.primary}
                        />
                        <Text>[4.9]</Text>
                    </View>
                    {/* this is for plus and minus */}
                    <View style={styles.rating}>
                        <TouchableOpacity onPress={() => increment(setCount, count)}>
                            <SimpleLineIcons name="plus" size={20} />
                        </TouchableOpacity>
                        <Text style={styles.textSpace}>
                            {count}
                        </Text>
                        <TouchableOpacity onPress={() => decrement(setCount, count)}>
                            <SimpleLineIcons name="minus" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* this is for showing description */}
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.descriptionTitle}>
                        Description Title
                    </Text>
                    <Text style={styles.descriptionText}>
                        Description details will be here.Description details will be here.Description details will be here.Description details will be here.Description details will be here.
                    </Text>
                </View>
                {/* showing location */}
                <View style={{ margin: theme.sizes.medium }}>
                    {/* put everything in a row or horizontally */}
                    <View style={styles.location}>
                        {/* show icon and location name */}
                        <View style={{ flexDirection: "row" }}>
                            <Ionicons name="location-outline" size={18} />
                            <View style={{ marginLeft: 10 }}>
                                <Text>İstanbul Türkiye</Text>
                            </View>
                        </View>
                        { /* delivery info showing an Icon and text */}
                        <View style={{ flexDirection: "row", marginRight: 5 }}>
                            <MaterialCommunityIcons name="truck-delivery-outline" size={18}/>
                            <View style={{ marginLeft: 10 }}>
                            <Text>Free Delivery</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* cart related information */}
                <View style={styles.cartRow}>
                    {/* fav button */}
                    <TouchableOpacity onPress={() => handlePress(userLogin, navigation, item, setRefetchFav)} style={styles.favButton}>
                        <AntDesign name='heart' size={20} color={theme.colors.lightWhite}/>
                    </TouchableOpacity>
                    {/* buy button */}
                    <TouchableOpacity onPress={() => console.log("buy tapped")} style={styles.buyButton}>
                        <Text style={styles.cartTitle}>BUY NOW</Text>
                    </TouchableOpacity>
                    {/* shopping bag icon */}
                    <TouchableOpacity onPress={() => handleCart(navigation, item, count, userLogin, setUserCart)} style={styles.addCart}>
                        <Fontisto name="shopping-bag" size={22} color={theme.colors.lightWhite}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}