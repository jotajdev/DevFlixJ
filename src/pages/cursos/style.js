import { StyleSheet, DrawerLayoutAndroidComponent } from "react-native";
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
    color: 'rgb(255, 255, 255)'
  },

  logoImg: {
    resizeMode: 'stretch',
    marginBottom: '5%',
    marginLeft: '20%',
    height: 100,
    width: 230,
  },

  content:{
    marginLeft: '10%',
  },

  coursesSubjectsText:{
    color: 'white',
    fontWeight: 'bold',
    marginTop: 50,
    fontSize: 18,
    backgroundColor: '#0be881',
    width: 190,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    height: 40,
    borderRadius: 20,
    paddingTop: 9,
    paddingLeft: 11,
  },

  coursesName:{
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 16,
    width: 220,
    height: 30,
    paddingTop: '1.3%',
    paddingLeft: '1%',
    borderRadius: 20,
  },  

  title:{
    marginTop: '2%',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: '2%',
    marginLeft: '5%',
    backgroundColor: '#0be881',
    width: '25%',
    textAlign: 'center',
    height: '4%',
    paddingTop: '1.5%',
    borderRadius: 20,
    fontSize: 25,
  }
});
