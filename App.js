import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableHighlight } from 'react-native';
import Constants from "expo-constants"
import Permissions from "react-native-permissions"
import MusicFiles from "react-native-get-music-files"

export default function App() {

  let getFilePermission = () => {
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Device File Only Music Player</Text>
      <TouchableHighlight onPress={() => console.log("Button Pressed")}>
        <View>
          <Text style={styles.button}>Browse Device Files</Text>
        </View>
      </TouchableHighlight>
      <View />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight + 10 : 0
  },
  text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center"
  },
  button: {
    color: "black",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50
  }
});
