import React from 'react';
import { Button, Dimensions, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { decrementCounter, incrementCounter } from './src/actions';
import store from './src/store';

const { width, height } = Dimensions.get('window');

// Counter component
const Counter = ({ counter, increment, decrement }) => {
    return (
        <View>
            <Text style={{ fontSize: 50, marginTop: height * 0.1 }}>Counter: {counter}</Text>
            <View style={{ height: '30%', width: '50%', marginLeft: width * 0.2 }}>
                <Button title="+" onPress={increment} />

            </View>
            <View style={{ width: '50%', marginLeft: width * 0.2, marginTop: height * 0.0011 }}>
                <Button title="-" onPress={decrement} />
            </View>
            {/* <TouchableOpacity style={{color: 'red'}}>
        <Text>hi</Text>
      </TouchableOpacity> */}
        </View>
    );
};

// Map the Redux state to component props
const mapStateToProps = state => ({
    counter: state.counter,
});

// Map the Redux actions to component props
const mapDispatchToProps = {
    increment: incrementCounter,
    decrement: decrementCounter,
};

// Connect the component to Redux
const ConnectedCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

// App component
const App = () => {
    return (
        <Provider store={store}>
            <ConnectedCounter />
        </Provider>
    );
};

export default App;
