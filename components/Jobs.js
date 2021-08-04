import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';

const myJob = {
  id: 4518,
  title: 'My job',
  status: 'Acknowledged',
  description: 'Repair to broken glazing in reception',
  location: 'Cambridge Harcome Plaza',
  date: new Date(),
};

const Job = () => (
  <ListItem>
    <ListItem.Content>
      <ListItem.Title>
        <Text style={styles.idText}>{myJob.id}</Text>
        <Text
          style={
            myJob.status == 'Acknowledged'
              ? styles.greenStatusText
              : styles.amberStatusText
          }>
          {' '}
          {myJob.status}
        </Text>
      </ListItem.Title>
      <ListItem.Subtitle>
        <View style={{display: 'flex'}}>
          <Text>{myJob.description}</Text>
        </View>
      </ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
  // <View style={styles.container}>
  //   <View style={{display: 'flex', flexDirection: 'row'}}>
  //     <View style={{width: '80%', backgroundColor: 'orange'}}>
  //       <Text style={styles.idText}>{myJob.id}</Text>
  //     </View>
  //     <View style={{width: '20%', backgroundColor: 'red'}}>
  //       <Text style={styles.idText}>{myJob.id}</Text>
  //     </View>
  //   </View>
  // </View>
);

const Jobs = () => (
  <View>
    <Text>Hello from the jobs page!</Text>
    <Job />
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#000000',
  },
  greenStatusText: {
    fontWeight: 'bold',
    color: '#228B22',
  },
  amberStatusText: {
    fontWeight: 'bold',
    color: '#FFA500',
  },
  idText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleText: {
    paddingHorizontal: 100,
    marginHorizontal: 100,
    marginLeft: 100,
    paddingLeft: 100,
  },
});

export default Jobs;
