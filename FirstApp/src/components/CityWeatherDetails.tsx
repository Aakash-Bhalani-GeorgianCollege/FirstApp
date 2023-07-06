import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions } from "react-native"

export default CityWeatherDetails = () => {
    
    const {primary,topNav,box1,box2,textStyles,imageStyles,imageContainer,textContainer, textContainer_3} = styles;
    return(
        <SafeAreaView style = {styles.wrapper}>
            <View style = {[primary, topNav]}></View>
            <View style = {[primary, box1]}>
                <View style={textContainer}>
                    <Text style={[textStyles, textStyles.mediumFont]}>Surat</Text>
                    <Text style={textStyles}>90% Chance of Rain</Text>
                </View>

                <View style={textContainer}>
                    <Text style={textStyles}>Drizzle</Text>
                    <Text style={[textStyles, textStyles.largeFont]}>26{'\u00b0'}C </Text>
                </View>

                <View style={imageContainer}>
                    <Image 
                    source={require('../../assets/cloudIcons.png')}
                    style={imageStyles} />
                </View>

                <View style={textContainer_3}>
                    <Text style={textStyles}>H:33{'\u00b0'} L:23{'\u00b0'}</Text>
                </View>
                
            </View>
            <View style = {[primary, box2]}></View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#2B2B2B",  
    },

    primary: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    
    topNav:{
        flex: 0.5,
        backgroundColor: "grey"
    },

    textContainer: {
        flex: 0.3,
        marginTop: 20
    },

    textContainer_3: {
        alignSelf: "flex-end",
        marginRight: 30
    },

    textStyles: {
        fontWeight: 700,
        textAlign: 'center',
        color: "white",
        fontSize: '16px',
        largeFont: {
            fontSize: '96px',   
        },
        mediumFont: {
            fontSize: '40px',
        }, 
    },

    imageContainer: {
        flex: 1,
    },

    imageStyles: {
        height: 300,
        width: 300,
        resizeMode: 'contain'
    },

    box1: {
        borderRadius: 40,
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black",
        paddingBottom: 15,
    },

    box2: {
        borderRadius: 40,
        flex: 0.7,
        backgroundColor: "#E6E9ED"
    }

})