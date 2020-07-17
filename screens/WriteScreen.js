import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';

export default class WriteScreen extends React.Component{
    constructor(){
        super(
            this.state(
                text=""
            )
        )
    }
render(){
    return(
        <View>
        <TextInput
        style={styles.text}
        placeholder="Write A Story"
        onChangeText={(text)=>{
            this.setState({
                text:text
            })
        }}
        multiline={true}/>
        <TouchableOpacity style={styles.button}>
            <Text>Submit</Text>
        </TouchableOpacity>   
        </View>
    )
}
}

const styles = StyleSheet.create({
    text:{
        height:250,
        borderWidth:2,
        margin:10
    },
    button:{
        textAlign:'center',
        alignSelf:'center',
        backgroundColor:'red',
        width:80,
        height:40
    }
})