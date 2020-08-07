import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = dimensions.height;
const imageWidth = dimensions.width;

const ImageInfoScreen = (props) => {
  const {imageLinks} = props.route.params;
  return (
    <View style={styles.container}>
      <Image source={{uri: imageLinks.regular}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: 'cover',
  },
});

export default ImageInfoScreen;
