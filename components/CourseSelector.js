import React, {useState} from 'react';
import {View} from 'react-native';
import Course from './Course';
import {hasConflict} from '../utils/course.js';


const CourseSelector = ({courses, view}) => {
    const [selected, setSelected] = useState([]); //init empty list - state variable for the list of currently selected courses
    
    // adds a course to or removes a course from selected:
    const toggle = course => setSelected(selected => (
        selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
    ));

    return (
        <View style={styles.courseList}>
          { 
            courses.map(course => (
              <Course key={course.id} course={course} 
                select={toggle}
                isDisabled={hasConflict(course, selected)}
                isSelected={selected.includes(course)}
                view={view}
              />
            ))
          }
        </View>
      );
}

const styles = {
    courseList: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    }
  };

export default CourseSelector;