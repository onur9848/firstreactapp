import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal,Image } from 'react-native';


function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.images} source={require('../assets/goal.png')}/>
                <TextInput
                    style={styles.textInput}
                    placeholder='Yazınız...'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                ></TextInput>
                {/* butonlar */}
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Gönder'  onPress={addGoalHandler} ></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title='İptal' color='red' onPress={props.onCancel} ></Button>
                    </View>
                </View>
            </View>

        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        backgroundColor: '#ffd110',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    buttonContainer: {
        flexDirection: 'row',
    }
    ,
    textInput: {
        borderWidth: 1,
        width: '100%',
        borderRadius: 10,
        padding: 8,
    },
    button: {
        width: '40%',
        marginVertical: 10,
        marginHorizontal: 5,
        height: 40,
    },
    images:{
        width: 100,
        height: 100,
        margin: 20
    }
});