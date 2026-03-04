import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 70, 
  },

  form: {
    width: '100%',
    paddingHorizontal: 16,
    gap: 7,
    marginTop: 42,
    borderRadius:20,
    borderTopColor:'#eee',
    borderTopWidth:1,
    paddingTop: 32,
    display: 'flex',
    flexDirection: 'row',

  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal:24,
    marginBottom: 50,
    paddingBottom:0

  },

  flex: {
    display: 'flex',
    flexDirection: 'row',
  },

  right: {
    marginLeft: 'auto',
    marginRight: 16
  },

  h1:{
    color: '#6a46eb',
    fontFamily: 'arial',
    fontSize: 25,
    textAlign: 'left'
  },

  text:{
    color: '#464545',
    fontFamily: 'arial',
    fontSize: 15,
    textAlign: 'left',
  },

  placeholder:{
    borderRadius: 15,
  },

  inputArea: {
    display: 'flex',
    flexDirection: 'row',
    //paddingHorizontal: 75,
    backgroundColor:'#fafafa',
    borderRadius: 32,
    borderStyle: 'solid',
    borderColor: '#dfdfdf',
    borderWidth: 1,
    verticalAlign: 'middle',
    flexGrow:1
  },

  input: {
    backgroundColor: 'transparent',
    flexGrow:1,
    paddingLeft: 8,
    marginRight: "auto",
  },

  searchIcon: {
    verticalAlign: 'middle',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 16
  },

  slidershIcon: {
    backgroundColor:'#fafafa',
    borderRadius: 32,
    borderStyle: 'solid',
    borderColor: '#dfdfdf',
    borderWidth: 1,
    paddingHorizontal: 15,
    padding: 'auto',
    verticalAlign: 'middle',
    marginLeft: 'auto'
  },


  paddingLeft: {
    paddingLeft:16
  }

});
