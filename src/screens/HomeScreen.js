<<<<<<< HEAD
import { SafeAreaView, FlatList } from "react-native";
import React from 'react';
import WelcomeComponent from "../components/WelcomeComponent";
import HomeCarouselComponent from "../components/HomeCarouselComponent";
import HomeHeadingComponent from "../components/HomeHeadingComponent";
import fetchHomeProduct from '../hooks/fetchHomeProduct';
import ProductCardComponent from '../components/ProductCardComponent';
import LoadingErrorComponent from "../components/LoadingErrorComponent";

const HomeScreen = () => {
    const { isLoading, data, error } = fetchHomeProduct();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LoadingErrorComponent isLoading={isLoading} error={error} />
            {
                !isLoading && !error && (
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ProductCardComponent item={item} />
                        )}
                        numColumns={2}
                        ListHeaderComponent={() => (
                            <>
                                <WelcomeComponent />
                                <HomeCarouselComponent />
                                <HomeHeadingComponent />
                            </>
                        )}
                    />
                )
            }
        </SafeAreaView>
    );
}

export default HomeScreen;
=======
import { SafeAreaView, FlatList } from "react-native";
import React from 'react';
import WelcomeComponent from "../components/WelcomeComponent";
import HomeCarouselComponent from "../components/HomeCarouselComponent";
import HomeHeadingComponent from "../components/HomeHeadingComponent";
import fetchHomeProduct from '../hooks/fetchHomeProduct';
import ProductCardComponent from '../components/ProductCardComponent';
import LoadingErrorComponent from "../components/LoadingErrorComponent";

const HomeScreen = () => {
    const { isLoading, data, error } = fetchHomeProduct();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LoadingErrorComponent isLoading={isLoading} error={error} />
            {
                !isLoading && !error && (
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ProductCardComponent item={item} />
                        )}
                        numColumns={2}
                        ListHeaderComponent={() => (
                            <>
                                <WelcomeComponent />
                                <HomeCarouselComponent />
                                <HomeHeadingComponent />
                            </>
                        )}
                    />
                )
            }
        </SafeAreaView>
    );
}

export default HomeScreen;
>>>>>>> 8c5af2cd61e0a5854906bc3de61b99cf2564fab4
