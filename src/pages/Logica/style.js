import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(51, 51, 51)",
    paddingTop: Constants.statusBarHeight + 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "rgb(255, 255, 255)",
  },

  logoImg: {
    resizeMode: 'stretch',
    marginBottom: '5%',
    marginLeft: '10%',
    height: 100,
    width: 230,
  },

  icon:{
    marginLeft: 9
  },

  title:{
    marginTop: 135,
    marginLeft: -371,
    backgroundColor: '#0be881',
    borderRadius: 20,
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',                
    fontSize: 17,
    color: 'white',
    width: 280,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    height: 40,
    textAlign: 'center',
  },

    player: {
        height: 400,
        maxWidth: 1000,
        width: '100%',
        marginLeft: -450,
        marginTop: 200,
    },
});
