import { StyleSheet } from "react-native";
import { DARK_COLORS } from "./Colors";


export const favoritePageStyles = StyleSheet.create({
    warningContainerContainer: {
        backgroundColor: DARK_COLORS.PRIMARY_COLOR
    },
    warningContainerText: {
        color: DARK_COLORS.PRIMARY_TEXT_COLOR
    },
    dangerContainerContainer: {
        backgroundColor: DARK_COLORS.SECONDARY_COLOR
    },
    dangerContainerText: {
        color: DARK_COLORS.TERTIARY_TEXT_COLOR
    },
    containerBase: {
        borderRadius: 5,
        padding: 10,
        flex: 0.2,
    },
    favoriteScrollSize: {
        flexGrow: 1,
        padding: 3,
        backgroundColor: DARK_COLORS.PRIMARY_BACKGROUND_COLOR,
    },
    infoContainer: {
        flexDirection: "column",
        paddingLeft: 10,
        paddingRight: 5,
    },
    upperInfo: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    spaceTimeContainer: {
        flexDirection: "column"
    },
    lowerInfo: {
        flex: 1,
        alignItems: "flex-end"
    },
    backgroundImageContainer: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
    }
});