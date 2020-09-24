import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const getCourseNumber = course => (
  course.id.slice(1)
)

const Course = ({course, isDisabled, isSelected, select}) => (
    //add selection property to tge course
    // add a isDisabled property, and a disabled stlye, that uses a grey color, #d3d3d3
    <TouchableOpacity style={styles[isDisabled ? 'courseButtonDisabled' : isSelected ? 'courseButtonSelected' : 'courseButton']}
        onPress={() => { if (!isDisabled) select(course); }}>
        <Text style={styles.courseText}>
        {`CS ${getCourseNumber(course)}\n${course.meets}`}
        </Text>
    </TouchableOpacity>
);

//a common style shared between courseButton and courseButtonSelected
const courseButtonBase = {
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
};
const styles = StyleSheet.create({
  courseButton: {
    ...courseButtonBase,
    backgroundColor: '#66b0ff',
  },
  courseText:{
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  courseButtonSelected:{
    ...courseButtonBase,
    backgroundColor: '#004a99',
  },
  courseButtonDisabled: {
    ...courseButtonBase,
    backgroundColor: '#d3d3d3',
  },
});

export default Course;