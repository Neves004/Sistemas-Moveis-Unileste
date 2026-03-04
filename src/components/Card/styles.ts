import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        borderColor: '#eee',
        borderRadius: 8,
        borderWidth:2,
        maxHeight:150,
        paddingTop:8,
        paddingBottom:16,
        paddingLeft:4,

        marginTop: 6,
        marginBottom:6
    },
    title: {
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
        padding: 5
    },

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },

    right: {
        marginLeft:'auto'
    },

    aprovado_view: {
        margin:8,
        color:"#008a17",
        backgroundColor:"#a9edb5",
        borderRadius:8,
        padding:5,
        display: 'flex',
        flexDirection: 'row'
    },

    aprovado_bolinha: {
        width:8,
        height:8,
        borderRadius:10,
        backgroundColor:'#008a17',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 4,
        marginLeft: 4
    },

    aprovado_text: {
        color:"#008a17",
    },

    recusado_view: {
        margin:8,
        color:"#741111",
        backgroundColor:"#ffb9b9",
        borderRadius:8,
        padding:5,
        display: 'flex',
        flexDirection: 'row'
    },

    recusado_bolinha: {
        width:8,
        height:8,
        borderRadius:10,
        backgroundColor:'#741111',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 4,
        marginLeft: 4
    },

    recusado_text: {
        color:"#741111",
    },

    enviado_view: {
        margin:8,
        color:"#00525f",
        backgroundColor:"#b8f1fe",
        borderRadius:8,
        padding:5,
        display: 'flex',
        flexDirection: 'row'
    },

    enviado_bolinha: {
        width:8,
        height:8,
        borderRadius:10,
        backgroundColor:'#00525f',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 4,
        marginLeft: 4
    },

    enviado_text: {
        color:"#00525f",
    },

    rascunho_view: {
        margin:8,
        color:"#474747",
        backgroundColor:"#cdcdcd",
        borderRadius:8,
        padding:5,
        display: 'flex',
        flexDirection: 'row'
    },

    rascunho_bolinha: {
        width:8,
        height:8,
        borderRadius:10,
        backgroundColor:'#474747',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 4,
        marginLeft: 4
    },

    rascunho_text: {
        color:"#474747",
    },

    rightRow: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
    },

    cutoff: {
        maxWidth: '50%'
    },





}); 