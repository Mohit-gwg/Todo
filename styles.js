import { StyleSheet, Dimensions } from 'react-native';
const isAndroid = Platform.OS == "android";
const viewPadding = 10;
import { Platform } from "react-native";
export default styles = StyleSheet.create({
    /////////Main.js////////////////////

    container: {
        flex: 1,
        //justifyContent: "center",
        alignItems: "center",
        padding: 10,
        paddingTop: 50
    },
    textInput: {
        height: 40,
        fontSize: 15,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: "gray",
        borderWidth: isAndroid ? 0 : 1,
        width: "100%"
    },

    //////////SimpleList.js/////////////////////
    SimpleContainer: {
        flex: 1,
        marginTop: 24.1,
        justifyContent: "center",
        backgroundColor: 'yellow',
        alignItems: "center",
        padding: 10,
    },
    list: {
        width: "100%"
    },
    listItem: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 20,
        paddingBottom: 2,
        fontSize: 18
    },
    hr: {
        height: 1,
        backgroundColor: "gray"
    },
    listItemCont: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
});
