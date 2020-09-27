import React, { useContext, useState, useEffect }  from 'react';
import { SafeAreaView, StyleSheet, Text,} from 'react-native';

import CourseList from '../components/CourseList';
import UserContext from '../UserContext';
import CourseEditScreen from './CourseEditScreen';


const Banner = ({title}) => (
    <Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
    // show "[loading...]" until the data has been received.
);


const ScheduleScreen = ({navigation}) => {
    //sets user to the data specifed in the value prop of UserContext.Provider in the App component
    const user = useContext(UserContext);
    const canEdit = user && user.role === 'admin';

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
    
    const view = (course) => {
        // navigation.navigate('CourseDetailScreen', { course });
        navigation.navigate(canEdit? 'CourseEditScreen' : "CourseDetailScreen", { course });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Banner title={schedule.title} error={schedule.error} />
            <CourseList courses={schedule.courses} view={view} />
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

export default ScheduleScreen;

