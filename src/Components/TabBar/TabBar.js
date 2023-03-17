import React from "react";
import { View, StyleSheet } from "react-native";
import TabButton from "./TabButton";

// TabBar kokoaa kaikki filtteröinti komponentit yhteen komponenttiin
// active parametri määrittää mikä komponenteista on "aktiivinen", eli mikä state.type staten
// arvo on, sekä mitä filtteröidään. Tämä vaikuttaa ainoastaan visuaalisesti komponentteihin
const TabBar = ({toggleType, active}) => {
    return(
        <View style={styles.tabContainer}>
            <TabButton toggleType = {toggleType} active={active} type="All" />
            <TabButton toggleType = {toggleType} active={active} type="Active" />
            <TabButton toggleType = {toggleType} active={active} type="Complete" /> 
        </View>
    )
}
    

const styles = StyleSheet.create({
    tabContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent:'space-evenly',
        width: '100%',
    }
});

export default TabBar;