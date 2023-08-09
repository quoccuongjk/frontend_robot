import { View, Text,TextInput, StyleSheet, Button,Modal } from 'react-native'
import React from 'react'
import { defaultStyles,inputStyling } from '../../styles/styles'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
    const navigation = useNavigation()
  return (
    <View style={{...defaultStyles,
        justifyContent: "center",
    }}>
        <Text style={styles.title}>
            Chào Mừng Trở Lại!
        </Text>
      <View style={{marginVertical: 10}}>
        <Text  style={styles.label}>Email:</Text>
        <TextInput style={inputStyling}></TextInput>
      </View>
      <View style={{marginVertical: 10}}>
        <Text style={styles.label}>Password:</Text>
        <TextInput secureTextEntry={true} style={inputStyling}></TextInput>
      </View>
      <Button onPress={() => navigation.navigate("home")} color="black" title="Đăng nhập">
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: "bold",
        marginBottom: 5
    },
    title: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 25
    }
})