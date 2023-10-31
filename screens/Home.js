import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    Image
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class Home extends Component {
    return(){
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.headingContainer}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style={styles.titleText1}>Sombreros</Text><Text style={styles.titleText2}>APP</Text>
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style={styles.subheading1}>Prueba</Text><Text style={styles.subheading2}>de sombreros</Text>
            </View>
        </View>
        <View style={styles.contentContainer}>
            <View style={{ flex: 0.5 }}>
            
            </View>
            <View style={{ flexDirection: "row", flex: 0.25 }}>
                <View style={{ flex: 0.5 }}>
                    <Image source={require('../assets/crown-pic1.png')} style={{ height: 64, width: 160 }} />
                </View>
                <View style={{ flex: 0.5 }}>
                    <Image source={require('../assets/flower-pic1.png')} style={{ height: 64, width: 160 }} />
                </View>
            </View>
            <View style={{ flexDirection: "row", flex: 0.25 }}>
                <View style={{ flex: 0.5 }}>
                    <Image source={require('../assets/hair-pic1.png')} style={{ height: 64, width: 160 }} />
                </View>
                <View style={{ flex: 0.5 }}>
                    <Image source={require('../assets/other-pic1.png')} style={{ height: 64, width: 160 }} />
                </View>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>¡Prueba ahora!</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
    }
}