import React, {Component} from 'react';
import {View} from 'react-native';

export default class FlexDimensionsBasics extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}}></View>
                <View style={{flex: 2, backgroundColor: 'skyblue'}}></View>
                <View style={{flex: 3, backgroundColor: 'steeblue'}}></View>
            </View>
        );
    }
}