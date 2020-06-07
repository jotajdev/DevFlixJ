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
    marginBottom: Constants.statusBarHeight - 20,
  },

  logoImg:{
      resizeMode: 'stretch',
      marginBottom: '5%',
      marginLeft: '9.5%',
      height: 100,
      width: 230,
    },

    icon:{
      marginLeft: '3%',
    },

    iconLogica:{
      marginRight: '16%',
    },

    iconDesen:{
      marginRight: '16%',
    },

  content:{
    marginLeft: '4%',
    color: 'rgb(255, 255, 255)',
  },
  cursoNome:{
    marginBottom: 30,
    marginLeft: 30,
    color: 'white',
    marginTop: '1%',
    backgroundColor: '#0be881',
    width: 300,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    height: 40,
    borderRadius: 20,
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',                
    fontSize: 17,
  },
  coursesSubjectsText:{
    color: 'white',
    marginTop: '1%',
    marginLeft: '5%',
    fontSize: 16,
    fontWeight: 'bold',
  },
});