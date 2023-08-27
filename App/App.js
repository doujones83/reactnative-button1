import React, { useState } from 'react'
import {StyleSheet,
   Text, 
   View,
   Button, 
   } from 'react-native';


const App = () => {
  const [nickname, setNickName] = useState('Will')
  const [changes, setChanges] = useState({title: 'Jones'})
  const [current, setCurrent] = useState(true)


  const onNickName = () => {
    setNickName('Will is a nice man')
    setChanges({title: 'Hello Man'})
    setCurrent(false)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{nickname}</Text>
      <Text style={styles.text}>Welcome to the South, {changes.title}</Text>
      <Text style={styles.text}>{current ? 'previous session' : 'current session'}</Text>
      <Button
        title="Youtube"
        onPress={onNickName}></Button>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#37C69B',
  },
  text: {
    color: '#F2F3E9',
    fontSize: 35,
    fontStyle: 'italic',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
