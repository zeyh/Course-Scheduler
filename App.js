import React, { useState, useEffect }  from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CourseList from './components/CourseList';

const schedule = {
    "title": "CS Courses for 2020",
    "courses":[{
        "id": "F101",
        "title": "Computer Science: Concepts, Philosophy, and Connections",
        "meets": "MWF 11:00-11:50"
      },
      {
        "id": "F110",
        "title": "Intro Programming for non-majors",
        "meets": "MWF 10:00-10:50"
      },
      {
        "id": "F111",
        "title": "Fundamentals of Computer Programming I",
        "meets": "MWF 13:00-13:50"
      },
      {
        "id": "F211",
        "title": "Fundamentals of Computer Programming II",
        "meets": "TuTh 12:30-13:50"
      }
    ]
};


const fetchSchedule = async () => {
    const response = await fetch(url); //using async and await to get the schedule JSON data
    if (!response.ok) throw response;
    const json = await response.json();
    setSchedule(json); //store it using the setSchedule() function created by useState()
};

const Banner = ({title}) => (
    <Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
    // show "[loading...]" until the data has been received.
);


const App = () => {
    //Fetch data from a URL
    const [schedule, setSchedule] = useState({ title: '', courses: [] });
    const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';
    useEffect(() => { //run only when the values of any of those variables has changed since the last run
        const fetchSchedule =  async () => {
            const response = await fetch(url);
            if (!response.ok) throw response;
            const json = await response.json();
            setSchedule(json);
        }
        fetchSchedule();
    }, []);
  
    return (
        <SafeAreaView style={styles.container}>
        <Banner title={schedule.title} />
        <CourseList courses={schedule.courses} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  bannerStyle: {
    color: '#0f5c23',
    fontSize: 32,
  }
});

export default App;

