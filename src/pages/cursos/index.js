import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Style from "./style";
import logoImg from "../../assets/logo.png";
import { Feather } from '@expo/vector-icons'

export default function Cursos({ navigation }) {
  return (
    <View style={Style.container}>
      <View style={Style.header}>
        <Image source={logoImg} style={Style.logoImg}/>
      </View>

      <Text style={Style.title}>Cursos</Text>

      <View style={Style.content}>
      <Text style={Style.coursesName} onPress={() => navigation.navigate("Disciplinas")}><Feather name='monitor' size={18} color='#0be881'/> Desenvolvimento de Sistemas</Text>
      </View>
    </View>
  );
}
