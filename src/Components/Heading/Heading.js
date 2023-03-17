import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Heading = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>
            Task App
        </Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
    },
    headerText: {
        textAlign: 'center',
        fontSize: 64,
        color: 'rgba(200,90,0,0.5)',
        fontWeight: '400'
        
    }
});

export default Heading;