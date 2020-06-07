import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import Style from "./style";
import logoImg from "../../assets/logo.png";

export default function Disciplinas({ navigation }) {
  return (
    <View style={Style.container}>
      <View style={Style.header}>
        <View style={Style.header}>
          <Feather style={Style.icon} name='arrow-left' size={30} color='#0be881' onPress={() => navigation.navigate("Cursos")}/><Image source={logoImg} style={Style.logoImg}/>
        </View>        
      </View>
      <View style={Style.content}>
        <Text style={Style.cursoNome}>Desenvolvimento de Sistemas</Text>
        <TouchableOpacity
          style={Style.coursesSubjects}
          onPress={() => navigation.navigate("Logica")}>
          <Text style={Style.coursesSubjectsText}><Feather style={Style.iconLogica} name='book-open' size={30} color='#0be881'/> Lógica de programação</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Style.coursesSubjects}
          onPress={() => navigation.navigate("Desenvolvimento1")}>
          <Text style={Style.coursesSubjectsText}><Feather style={Style.iconDesen} name='monitor' size={30} color='#0be881'/> Desenvolvimento de Sistemas 1</Text>
        </TouchableOpacity>

      </View>      
    </View>
  );
}
