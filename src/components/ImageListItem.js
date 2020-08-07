import React from 'react';
import {
  View,
  Image,
  Text,
  Pressable,
  Dimensions,
  StyleSheet,
} from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

const ImageListItem = ({item, onPress}) => {
  return (
    <Pressable
      key={item.id}
      style={styles.item}
      onPress={(e) => onPress(item.urls)}>
      <Image source={{uri: item.urls.regular}} style={styles.image} />
      <View style={styles.textBlock}>
        <Text style={styles.text}>Author: {item.user.name}</Text>
        {item.description || item.alt_description ? (
          <Text style={styles.text}>
            Description:{' '}
            {!item.description ? item.alt_description : item.description}
          </Text>
        ) : undefined}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: 'cover',
  },
  textBlock: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  text: {
    color: '#ffffff',
  },
  item: {
    position: 'relative',
  },
});

export default ImageListItem;
