import {useDispatch, useSelector} from "react-redux";
import {Button, FlatList, Text, View} from "react-native";
import {increaseCount} from "../redux/actions/actionCreator";

export const ReduxExample = () => {
    const counter = useSelector(store => store.counter.latestNews);
    const dispatch = useDispatch();
    console.log(counter);

    const handleIncrease = () => {
        dispatch(increaseCount());
    }

    return (
        <View>
            {/*<Text>{counter}</Text>*/}
            <Button title={'Increase value'} onPress={handleIncrease}></Button>
            <FlatList data={counter} renderItem={({item}) => <Text>{item.title}</Text>}></FlatList>
        </View>
    )
}