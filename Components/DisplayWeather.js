import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const DisplayWeather = (props) => {
  if (props.data === null) {
    return <Text>Loading...</Text>
  }

  if (props.data.cod !== 200) {
    return <Text>An Error has occurred</Text>
  }

  const { name } = props.data
  const { temp } = props.data.main
  const { humidity } = props.data.main
  const { speed } = props.data.wind
  const { description } = props.data.weather[0]

  return (
    <View style={styles.container}>
      <Text style={styles.article}>it is</Text>
      <Text style={styles.temp}>{temp.toFixed(0)}˚</Text>
      <Text style={styles.article}>in</Text>
      <Text style={styles.location}>{name}.</Text>
      
      <View style={styles.stretch}>
          <Text style={styles.stretchText}>Humidity: {humidity}%</Text>
          <Text style={styles.stretchText}>Wind Speed: {speed.toFixed(0)}mph</Text>
          <Text style={styles.stretchText}>Sky: {description.charAt(0).toUpperCase() + description.slice(1)}</Text>
      </View>
    </View>
  )
}

export default DisplayWeather

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stretch: {
    flex: 1,
    maxHeight: 100,
    width: 200,
    marginTop: 10,

    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  stretchText: {
    fontSize: 16,
    fontFamily: 'monospace',
  },
  temp: {
    fontSize: 96,
    fontWeight: '100',
    color: '#fff',
    marginLeft: 15,
    marginTop: -15,
    marginBottom: -5,
  },
  article: {
    fontFamily: 'monospace',
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  location: {
    fontSize: 36,
    fontWeight: '400',
    color: '#3F51B5',
  }
})