import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableHighlight, PermissionsAndroid } from 'react-native';
import * as Notifcations from "expo-notifications"
import Constants from "expo-constants"
// import { PERMISSIONS, request } from "react-native-permissions"

export default function App() {

  let getFilePermission = async () => {
    try {
      if(Platform.OS === "android" ) {
        // let reason = {
        //   title: "Allow File Access",
        //   message: "File access is required to be able to listen to music",
        //   buttonPositive: "Allow",
        //   buttonNegative: "Deny"
        // }
  
        // let androidRequest = Permissions.request(
        //   permission: "READ_EXTERNAL_STORAGE",
        //   rationale: reason
        // ):
        // await Permissions.request("android.permission.READ_EXTERNAL_STORAGE").then(response => {
        //   console.log(response)
        // })
        Notifcations.setNotificationChannelAsync("first noti", {name: "first"})
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: "Device File Only Music Player File Permission",
            message: "File access needed to play music",
            buttonPositive: "Allow",
            buttonNegative: "Deny"
          }
        )
        if(granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("granted")
        }
        else {
          console.log("Denied")
        }
      }
      else {
  
      }
      
    }
    catch(err) {
      console.warn(err)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Device File Only Music Player</Text>
      <TouchableHighlight onPress={getFilePermission}>
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
