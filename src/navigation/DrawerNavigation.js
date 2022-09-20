import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritedJobs from '../pages/Jobs/Jobs';
import JobDetails from '../pages/JobDetails/JobDetails';
import FavJobs from '../pages/FavouriteJobs/FavJobs';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="FavoritedJobsPage"
        component={FavoritedJobs}
        options={{title: 'All Jobs', headerTintColor: '#FF5C58'}}
      />
      <Drawer.Screen
        name="FavJobs"
        component={FavJobs}
        options={{title: 'Favourite Jobs', headerTintColor: '#FF5C58'}}
      />
      <Drawer.Screen
        name="JobDetails"
        component={JobDetails}
        options={{title: 'Job Details', headerTintColor: '#FF5C58'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;