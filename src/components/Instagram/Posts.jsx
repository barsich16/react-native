import {Text, View, StyleSheet, Image} from "react-native";
import {postsData} from './data';
import EStyleSheet from "react-native-extended-stylesheet";
import Like from "../../../assets/icons/like.svg";
import i18next from "../../../services/i18next";
import {useTranslation} from "react-i18next";

export const Posts = () => {
    return (
        <View style={{borderColor: 'rgba(220, 220, 220, 0.15)', borderTopWidth: 1, paddingTop: 10}}>
            {postsData?.map((post) => (
                <PostCard
                    post={post}
                    key={`post-${post.id}`}
                />
            ))}
        </View>
    );
}

const PostCard = ({post}) => {
    const {t} = useTranslation();

    return (
        <View style={{paddingBottom: 25}}>
            <View style={styles.row}>
                <Image source={post.photo} style={styles.circle}/>
                <View>
                    <Text style={{lineHeight: 14, fontSize: 14}}>{post.author}</Text>
                    <Text style={{lineHeight: 11, fontSize: 11}}>{post.place}</Text>
                </View>
            </View>
            <Image source={post.image} resizeMode='contain' style={{width: '100%', height: 400}}/>
            <View style={{...styles.row, marginTop: 10}}>
                <Like width={25} height={25} color='#fff' />
            </View>
            <View style={{...styles.row, marginTop: 10}}>
                <Text>{post.author}</Text>
                <Text>{t('title-post')}</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 15,
    },
    circle: {
        borderRadius: 30,
        width: 30,
        height: 30,
    },
})

const styles1 = EStyleSheet.create({
    image: {
        width: '100%',
        height: 'auto'
    }
})
