import React from 'react';
import { View, Text, Button } from 'react-native';

export default class TestTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: 'A'
        }
    }

    componentDidMount() {

    }

    _renderA() {
        if (this.state.selection !== 'A') {
            return null;
        }
        return (
            <View>
                <Text>HELLO A</Text>
            </View>
        )
    }

    _renderB() {
        if (this.state.selection !== 'B') {
            return null;
        }
        return (
            <View>
                <Text>HELLO B</Text>
            </View>
        )
    }

    _renderC() {
        if (this.state.selection !== 'C') {
            return null;
        }
        return (
            <View>
                <Text>HELLO C</Text>
            </View>
        )
    }

    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <Button title="Tab A" onPress={() => this.setState({ selection: 'A' })} />
                    <Button title="Tab B" onPress={() => this.setState({ selection: 'B' })} />
                    <Button title="Tab C" onPress={() => this.setState({ selection: 'C' })} />
                </View>
                {this._renderA()}
                {this._renderB()}
                {this._renderC()}
            </View>
        )
    }
}