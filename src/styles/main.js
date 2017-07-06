import { StyleSheet, Text, View } from 'react-native';

export default styles = StyleSheet.create({
    // Generic classes
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    col: {
        flex: 1,
        flexDirection: 'column'
    },
    HeaderBlock: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeaderBlockText: {
        fontSize: 20,
        margin: 20
    },
    GameBoard: {
        margin: 30
    },
    GameBlock: {
        backgroundColor: '#fff',
        borderColor: '#333',
        borderWidth: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    GameBlockText: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    Button: {
        marginBottom: 30,
        paddingLeft: 50,
        paddingRight: 50,
        flex: 0,
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonText: {
        color: 'white',
        fontSize: 20
    }
});