import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import {itemsFetchData} from '../actions/items';
import ImageListItem from '../components/ImageListItem';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
  };
};

const ImageListScreen = ({items, fetchData, navigation}) => {
  useEffect(() => {
    fetchData(
      'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
    );
  }, [fetchData]);

  const onItemPress = (links) => {
    navigation.navigate('Full Image', {imageLinks: links});
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {items.map((item) => (
          <ImageListItem item={item} key={item.id} onPress={onItemPress} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageListScreen);
