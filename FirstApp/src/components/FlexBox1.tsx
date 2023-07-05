import { SafeAreaView, View, StyleSheet } from "react-native"

const FlexBox1 = ()=> {
    return (
        <SafeAreaView style = {styles.wrapper}>
            <View style = {[styles.primary, styles.box1]}>
                <View style = {styles.default}/>
            </View>
            <View style = {[styles.primary, styles.box2]}>
                <View style = {styles.default}/>
            </View>
            <View style = {[styles.primary, styles.box3]}>
                <View style = {styles.default}/>
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
        height: 80,
        padding: 15
    },
    default: {
        flex: 1,
        backgroundColor: 'red'
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