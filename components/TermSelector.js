import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';


//once selected, pass setSelectedTerm(term) to the term selector
const TermButton = ({term, isActive, setSelectedTerm}) => (
    <TouchableOpacity style={styles[isActive ? 'termButtonActive' : 'termButton']}
        onPress={() => setSelectedTerm(term)}> 
      <Text style={styles.termText}>{term}</Text>
    </TouchableOpacity>
);
  
const TermSelector = ({terms, selectedTerm, setSelectedTerm}) => (
    //set style
    <View style={styles.termSelector}> 
      { //it passes a flag indicating if the term is selected or not.
        terms.map(term => (
          <TermButton key={term} term={term} setSelectedTerm={setSelectedTerm}
            isActive={term === selectedTerm} //after onPress, call the termButtom fcn and pass the parameters
          />
        ))
      }
    </View>
  );

  const termButtonBase = {
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 40,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
  };

  const styles = StyleSheet.create({
    termSelector: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 350,
    },
    termButton: {
        ...termButtonBase,
        backgroundColor: '#4f9f64'
    },
    termButtonActive: { //a different style when it is selected
        ...termButtonBase,
        backgroundColor: '#105f25', 
    },
    termText: {
      color: '#fff',
      fontSize: 15,
    },
  });
  
  export default TermSelector;