import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 2,
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#4D4D4D"
  },
  inputContainer: {
    width: "80%",
  },
});

export default styles;