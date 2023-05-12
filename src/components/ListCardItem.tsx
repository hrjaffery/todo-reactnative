import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {wp, hp} from '../utils';
import CheckBox from 'react-native-check-box';
import {colors} from '../constants';

const ListCardItem = ({
  data,
  dark = true,
  date = false,
  style,
  fullWidth = false,
}) => {
  const styles = StyleSheet.create({
    container: {
      // alignItems: 'center',
      // flexDirection: 'row',
      marginBottom: hp(2),
    },
    item: {
      fontSize: 17,
      color: dark ? colors.black : colors.white,
      marginLeft: wp(3),
      width: fullWidth ? wp(65) : hp(28),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    date: {
      marginLeft: wp(9.5),
    },
  });

  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={{...styles.container, ...style}}>
      <View style={styles.row}>
        <CheckBox
          isChecked={isChecked}
          onClick={() => {
            setIsChecked(!isChecked);
          }}
          checkBoxColor={dark ? colors.black : colors.white}
        />
        <Text numberOfLines={1} style={styles.item}>
          {data.task}
          {''}
        </Text>
      </View>

      {date && (
        <View style={styles.date}>
          <Text>Mon, April 30</Text>
        </View>
      )}
    </View>
  );
};

export default ListCardItem;
