import {View, StyleSheet, Text} from "react-native";
import Logo from '../../../assets/icons/instagram-logo.svg';
import Messenger from '../../../assets/icons/messenger.svg';
import Like from '../../../assets/icons/like.svg';
import i18next from "../../../services/i18next";
import {useTranslation} from "react-i18next";

export const Header = () => {
    const changeLng = (lng) => {
        i18next.changeLanguage(lng);
    }
    return (
        <View style={styles.container}>
            <Logo width={100} height={30} color='#fff' />
            <View style={styles.icons}>
                <Text onPress={() => changeLng('en')}>EN</Text>
                <Text onPress={() => changeLng('ua')}>UA</Text>
                <Like width={25} height={25} color='#fff' />
                <Messenger width={25} height={25} color='#fff' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 20
    },
    icons: {
        paddingRight: 5,
        flexDirection: 'row',
        gap: 25,
        alignItems: 'center'
    }
})