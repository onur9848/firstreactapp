import { FlatList, StyleSheet, View, Button } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) =>
      [...courseGoals, {
        text: enteredGoalText,
        key: Math.random().toString()
      }]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(goalKey) {
    console.log("deleteGoalHandler");
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter(
        (goal) => goal.key !== goalKey);
    })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler} />
        {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />}

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}

            renderItem={itemData => {
              return (<GoalItem
                text={itemData.item.text}
                id={itemData.item.key}
                onDeleteItem={deleteGoalHandler}
              />);
            }}
            keyExtractor={(item, index) => {
              return item.key;
            }}

            alwaysBounceVertical={false}>
          </FlatList>
        </View>


      </View>
    </>

  );
}

function clickMe() {
  alert("myAlertView.apply")
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#1FBBAE',
    paddingTop: '15%',
    paddingHorizontal: 20,
    flex: 1,

  },
  goalsContainer: {
    marginTop: 20,
    flex: 9,
  },

});
