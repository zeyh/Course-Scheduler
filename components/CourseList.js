import React, {useState} from 'react';
import { ScrollView, View} from 'react-native';

import Course from './Course';
import TermSelector from './TermSelector'

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);
const getCourseTerm = course => (
    termMap[course.id.charAt(0)]
);

const CourseList = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
    return (
        <ScrollView>
            <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>                        
            <View style={styles.courseList}>
                { termCourses.map(course => <Course key={course.id} course={course}/>)}
            </View> 
        </ScrollView>
    );
};

const styles = {
    courseList: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    }
  };

export default CourseList;