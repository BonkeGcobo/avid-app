import React from "react";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
} from "react-native";

import { Link } from "@react-navigation/native";

function Login() {
  const [email, onEmail] = React.useState("");
  const [password, onPassword] = React.useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={require("../assets/AvidAssets/ImagePeg.jpg")} />

        <View style={LoginSection.loginContainer}>
          <Text style={{ fontWeight: "bold" }}>Login to your Account</Text>

          <View>
            <TextInput
              onChangeText={onEmail}
              style={styles.input}
              value={email}
            ></TextInput>
            <TextInput style={styles.input}></TextInput>
          </View>

          <View style={btnSection}>
            <Pressable
              //onPress={handleStudent}
              style={{
                backgroundColor: "#C8A800",
                padding: 5,
                borderRadius: 15,
                width: 80,
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Sign in
              </Text>
            </Pressable>

            <Link style={{ color: "#C8A800", fontStyle: "italic" }} to="/">
              Forgot Password
            </Link>
          </View>

          <View style={{ flexDirection: "row", marginTop: 25, gap: 5 }}>
            <Text>Don't have an account?</Text>
            <Link
              to={{ screen: "SignUp" }}
              style={{
                color: "#C8A800",
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              Sign Up
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    marginTop: "15%",
    gap: 45,
  },
  input: {
    height: 35,
    width: 250,
    marginTop: 45,
    borderWidth: 1,
    padding: 10,
    borderRadius: 45,
  },
});

const LoginSection = StyleSheet.create({
  loginContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
});

const btnSection = StyleSheet.create({
  flexDirection: "row",
  alignItems: "center",
  gap: 25,
  marginTop: 45,
});
