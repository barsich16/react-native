import {FlatList, Image, Text, View, StyleSheet} from "react-native";
import {storiesData} from './data';
import LinearGradient from "react-native-linear-gradient";

export const Stories = () => {
    return (
        <View>
            <FlatList
                data={storiesData}
                renderItem={({ item }) => (
                    <StoryItem
                        item={item}
                    />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ columnGap: 10, paddingHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        </View>
    );
}

const StoryItem = ({item}) => {
    return (
        <View style={{width: 90, paddingBottom: 20,}}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{x: 1, y: 1 }}
                colors={[ '#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737' ]}
                style={styles.gradient}
            >
                <Image source={item.photo} style={styles.circle}/>
            </LinearGradient>

            <Text style={{textAlign: 'center', marginTop: 5}} numberOfLines={1}>{item.author}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    gradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 75,
        padding: 3,
    },
    circle: {
        borderRadius: 85,
        width: 85,
        height: 85,
        // padding: 30,
        borderWidth: 5,
        borderColor: 'black',
    },
});
