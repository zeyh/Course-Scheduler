import React from 'react';
import { ScrollView, View} from 'react-native';
import Course from './Course';

const CourseList = ({ courses }) => (
    <ScrollView>
      <View style={styles.courseList}>
        { courses.map(course => <Course key={course.id} course={ course } />) }
      </View>
    </ScrollView>
  );

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