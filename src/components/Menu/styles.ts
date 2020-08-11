import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        marginTop: 0,
        marginBottom: 0,
        marginRight: 30,
        marginLeft: 30,
    },
    code:{
        backgroundColor: '#FFF',
        padding: 10,
        alignSelf: 'center',
    },
    nav:{
        marginTop: 30,
        alignSelf: 'stretch',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#FFFFFF6A',
    },
    navItem:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 12,
        paddingTop: 12,
        paddingLeft: 0,
        paddingRight: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#FFFFFF6A',
    },
    navText:{
        fontSize: 15,
        color: '#FFF',
        marginLeft: 20,
    },
    signOutButton:{
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#FFFFFF6A',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginTop: 15,
        height: 50,
        width: 300,
    },
    singOutText:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 13,
    },
});

export default styles;