import { StyleSheet } from 'react-native';
import { height, width } from '../../utils/dimensions/dimensions';
import { COLOR } from '../../utils/color/color';
import { ROBOTO_BOLD, ROBOTO_MEDIUM } from '../../assets/fonts';
export default StyleSheet.create({
    mainContainer: {
        height: height * 1,
        width: width * 1,
        backgroundColor: COLOR.BACKGROUND,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: height * 0.94,
        width: width * 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    SafeAreaView: {
        backgroundColor: COLOR.SAFEAREAVIEW,
    },
    mainView: {
        height: height * 0.8,
        width: width * 0.9,
        alignSelf: 'center',
    },
    forgotView: {
        height: 40,
        marginTop: 50

    },
    textStyle: {
        textAlign: 'center',
        fontSize: 24,
        fontFamily: ROBOTO_MEDIUM,
        lineHeight: 29,
        color: COLOR.TEXTBLACK,
    },
    description: {
        color: '#797979',
        lineHeight: 24,
        fontFamily: ROBOTO_MEDIUM,
        fontSize: 15,
        textAlign: 'center',
    },
    descriptionView: {
        width: '70%',
        height: height * 0.1,
        alignSelf: 'center'
    },
});
