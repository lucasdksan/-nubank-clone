import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card:{
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 4,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 20,
        marginRight: 20,
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
    },
    cardHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
    },
    cardContent:{
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 30,
        paddingLeft: 30,
        justifyContent: 'center',
    },
    titleContent:{
        fontSize: 13,
        color: '#999',
    },
    descriptionContent:{
        fontSize: 32,
        marginTop: 3,
        color: '#333',
    },
    cardFooter:{
        padding: 30,
        backgroundColor: '#EEE',
        borderRadius: 4,
    },
    annotationFooter:{ 
        fontSize: 13,
        color: '#333',
    },
});

export default styles;