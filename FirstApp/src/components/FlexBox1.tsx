import { SafeAreaView, View, Text, StyleSheet } from "react-native"

const FlexBox1 = ()=> {
    return (
        <SafeAreaView style = {styles.wrapper}>
            <View style = {[styles.primary, styles.box1]}>
                <View style = {styles.default}>
                    <Text>Some text here</Text>
                </View>
            </View>
            <View style = {[styles.primary, styles.box2]}>
                <View style = {styles.default}>
                    <Text>Some text here</Text>
                </View>
            </View>
            <View style = {[styles.primary, styles.box3]}>
                <View style = {styles.default}>
                    <Text>Some text here</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    primary: {
        width: "100%",
        height: 70,
        padding: 15
    },
    default: {
        flex: 1,
        backgroundColor: "#ededed"
    },
    box1: {
        flex: 0.6
    },
    box2: {
        flex: 3
    },
    box3: {
        flex: 0.6
    }
})

export default FlexBox1