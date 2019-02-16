import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TestNavigate extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={() =>
                    this.props.navigation.navigate('Main')}> Todo Note App </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});