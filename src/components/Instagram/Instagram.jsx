import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import {Header} from "./Header";
import {Stories} from "./Stories";
import {Posts} from "./Posts";
// import i18next from "../../../services/i18next";
// import {useTranslation} from 'react-i18next';

export const Instagram = () => {
    return (
        <SafeAreaView style={styles.main}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />
                <Stories />
                <Posts />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#000'
    },
})