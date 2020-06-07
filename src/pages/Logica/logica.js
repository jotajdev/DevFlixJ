import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import logoImg from "../../assets/logo.png";
import Style from "../Logica/style";
import { WebView } from 'react-native-webview';
import {Feather} from '@expo/vector-icons'

export default function Logica({ navigation }) {
  return (
    <View style={Style.container}>
      <View style={Style.header}>
        <View style={Style.header}>
        <Feather style={Style.icon} name='arrow-left' size={30} color='#0be881' onPress={() => navigation.navigate("Disciplinas")}/>
          <Image source={logoImg} style={Style.logoImg}/>
        </View>
         
         <Text style={Style.title}>Lógica de Programação</Text>
            <View style={Style.player}>
                <WebView source={{ uri: 'https://www.youtube.com/embed/6vE0oFFSE7chttps://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV'}} allowsFullscreenVideo={true} style={Style.video} />
            </View>            

      </View>
    </View>
  );
}  
