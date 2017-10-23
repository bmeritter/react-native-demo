/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import ViewText from "./component/ViewText";
import FlexDimensionsBasics from "./component/FlexDimensionsBasics";
import PizzaTranslator from "./component/PizzaTranslator";
import ButtonBasics from "./component/ButtonBasics";
import Touchables from "./component/Touchables";

export default class App extends Component {
    render() {
        return (
            <View>
                {/*<ViewText/>*/}
                {/*<FlexDimensionsBasics/>*/}
                {/*<PizzaTranslator/>*/}
                {/*<ButtonBasics/>*/}
                <Touchables/>
            </View>
        );
    }
}
