import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const globalStyles = StyleSheet.create({
  h1: {
    color: Colors.text,
    fontSize: 32,
    fontFamily: 'open-sans-eb'
  },
  h2: {
    color: Colors.text,
    fontSize: 24,
    fontFamily: 'open-sans-eb'
  },
  h3: {
    color: Colors.text,
    fontSize: 20,
    fontFamily: 'open-sans-sb'
  },
  h4: {
    color: Colors.text,
    fontSize: 15,
    fontFamily: 'open-sans-sb'
  },
  baseText: {
    color: Colors.text,
    fontSize: 15,
    fontFamily: 'open-sans'
  },
  smText: {
    color: Colors.text,
    fontSize: 12,
    fontFamily: 'open-sans'
  },
  dangerText: {
    color: Colors.danger,
    fontSize: 15,
    fontFamily: 'open-sans-sb'
  },
  textCenter: {
    textAlign: 'center'
  },
  defaultInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: Colors.text,
    fontSize: 16,
  }
})