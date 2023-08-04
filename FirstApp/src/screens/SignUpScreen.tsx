import { Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { signUpPageStyles } from "../styles/styles"
import { Button } from "react-native";
import { DARK_COLORS } from "../styles/Colors";
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const SignUpScreen: React.FC<Props> = ({ navigation }) => {


    const handleSignUp = () => {
        console.log("Clicked");
        navigation.goBack();
    }

    const removeSelf = () => {
        navigation.goBack();
    }

    return (
        <>
        <View style={signUpPageStyles.mainBody}>
            <Image style={signUpPageStyles.headerImage} source={require("../assets/images/rainy-black-cloud.png")} resizeMode="contain"></Image>

            <Text style={signUpPageStyles.header}>Create an Account</Text>
            <View style={signUpPageStyles.inputView}>
                <TextInput style={signUpPageStyles.inputTextField} placeholderTextColor={DARK_COLORS.PRIMARY_TEXT_COLOR} placeholder="Firstname"/>
                <TextInput style={signUpPageStyles.inputTextField} placeholderTextColor={DARK_COLORS.PRIMARY_TEXT_COLOR} placeholder="Lastname"/>
                <TextInput style={signUpPageStyles.inputTextField} placeholderTextColor={DARK_COLORS.PRIMARY_TEXT_COLOR} keyboardType="email-address" textContentType="emailAddress" placeholder="Email"/>
                <TextInput style={signUpPageStyles.inputTextField} placeholderTextColor={DARK_COLORS.PRIMARY_TEXT_COLOR} secureTextEntry={true} autoCapitalize="none" autoCorrect={false} placeholder="password"/>
            </View>
                <View style={signUpPageStyles.buttonView}>
                <View style={signUpPageStyles.signUpButtonView}><Pressable style={signUpPageStyles.signUpButton} onPress={handleSignUp}><Text style={signUpPageStyles.signUpButtonText}>Sign Up</Text></Pressable></View>
                <View style={signUpPageStyles.loginView}>
                    <Text style={signUpPageStyles.loginText}>Already Have an Account? <TouchableOpacity onPress={removeSelf} ><Text style={signUpPageStyles.loginAnchorText}>Log In</Text></TouchableOpacity></Text>
                </View>
                </View>
        </View>
        </>
    )
};

export default SignUpScreen;