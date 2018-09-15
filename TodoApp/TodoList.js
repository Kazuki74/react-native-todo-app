import React, {Component} from 'react';
import {
	ScrollView,
	Text,
	View,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
	scrollView: {
	    backgroundColor: "#DDD"
	},
	todoContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	    backgroundColor: "#FFF",
	    padding: 10
	},
	deleteButton: {
		color: "red"
	}
})

export default (props) => {
	return (
		<ScrollView style={styles.scrollView}>
	      {
	        props.todos.map((todo, index) => (
	          <View key={todo+index} style={styles.todoContainer}>
	            <Text>{todo}</Text>
	            <TouchableOpacity onPress={() => props.onPressDelete(index)}>
	            	<Text style={styles.deleteButton}>DELETE</Text>
	            </TouchableOpacity>
	          </View>
	        ))
	      }
	    </ScrollView>
	)	
}