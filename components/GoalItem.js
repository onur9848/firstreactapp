import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {


    return (
         <View style={styles.goalsItem}>
            <Pressable 
            style={({pressed}) => pressed && styles.pressedItem } 
            android_ripple={{ color: "#000000" }} 
            onPress={props.onDeleteItem.bind(this, props.id)}

            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );

};

export default GoalItem;

const styles = StyleSheet.create({
    goalsItem: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
    },
    goalText:{
        padding: 10,
    }
    ,
    pressedItem: {
     opacity: 0.5, 
    }
});