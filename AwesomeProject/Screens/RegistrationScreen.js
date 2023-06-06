import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";

const ImgBtn = require("../images/add.png");

const RegistrationScreen = ({ changeScreen }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (text) => {
    setLogin(text);
  };
  const handleEmail = (text) => {
    setEmail(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };

  const register = () => {
    if (!login || !email || !password) {
      alert("Please fill out all fields");
      return;
    }
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
  };

  const passwordShow = () => alert(`Your password is: ${password}`);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.containerKey}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.addbutton} activeOpacity={0.5}>
            <ImageBackground
              source={ImgBtn}
              style={{ width: "100%", height: "100%" }}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Реєстрація</Text>

        <TextInput
          style={styles.inputLogin}
          placeholder="Логін"
          inputMode="text"
          value={login}
          onChangeText={handleLogin}
        />
        <TextInput
          style={styles.inputEmailPassw}
          placeholder="Адреса електронної пошти"
          inputMode="email"
          value={email}
          onChangeText={handleEmail}
        />
        <TextInput
          style={styles.inputEmailPassw}
          placeholder="Пароль"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePassword}
        />

        <TouchableOpacity
          style={styles.passwordShow}
          activeOpacity={0.5}
          onPress={passwordShow}
        >
          <Text style={styles.passwordShowText}>Показати</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          activeOpacity={0.5}
          onPress={register}
        >
          <Text style={styles.registerButtonText}>Зареєстуватися</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginLink}
          activeOpacity={0.5}
          onPress={() => changeScreen(0)}
        >
          <Text style={styles.loginLinkText}>
          Вже є акаунт? Увійти
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  containerKey: {
    justifyContent: "flex-end",
  },
  imageContainer: {
    marginTop: -60,
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  addbutton: {
    marginTop: "65%",
    left: "90%",
    height: 25,
    width: 25,
    pointerEvents: "auto",
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    marginTop: 32,
    lineHeight: 35,
  },
  inputLogin: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    marginTop: 33,
    padding: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  inputEmailPassw: {
    backgroundColor: "#F6F6F6",
    width: 343,
    height: 50,
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    position: "relative",
  },
  passwordShowText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
  passwordShow: {
    top: -34,
    left: 130,
  },
  registerButton: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 44,
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "400",
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  loginLinkText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default RegistrationScreen;
