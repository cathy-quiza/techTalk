import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginCont: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  regContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },

  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    margin: 20
  },
  regInput: {
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    margin: 20
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    margin: 15,
    borderRadius: 25,
  },
  buttonDanger: {
    backgroundColor: '#dc3545'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  errorContainer: {
    backgroundColor: '#f8d7da',
    padding: 10,
    textAlign: 'center',
    margin: 5
  },
  errorText: {
    color: '#721c24',
    fontWeight: 'bold'
  },
  screenHeader: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 40,
  },
  loginImg: {
    width: 200, 
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  
  regImg: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  footer: {
    position: 'relative',
    bottom: 15,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    marginRight: 5,
    color: 'black',
  },
  registerText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  usersText: {
    marginBottom: 20,
    textAlign: 'center',
    
  },

});

export default styles;