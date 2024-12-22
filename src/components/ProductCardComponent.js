<<<<<<< HEAD
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles/productcard.style'
import { useNavigation } from '@react-navigation/native'

export default function ProductCardComponent({ item }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
        style={{ flex:1 }}
        onPress={() => navigation.navigate('product_detail', {item})}
        >
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={item.path} />
                <View style={styles.details}>
                    <Text style={styles.title}> {item.title} </Text>
                    <Text style={styles.price}> {item.price} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
=======
import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../styles/productcard.style'

export default function ProductCardComponent({ item }) {
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image}
                source={item.path}
            />
            <View style={styles.details}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <Text style={styles.price}>
                    {item.price}
                </Text>
            </View>
        </View>
    )
}
>>>>>>> 8c5af2cd61e0a5854906bc3de61b99cf2564fab4
