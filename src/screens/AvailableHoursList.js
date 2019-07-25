import React, { Component } from "react";
import { FlatList, StatusBar, View, TouchableOpacity } from "react-native";

import { ListItem, Separator } from "../components/List";
import Button from "../components/Button";

class AvailableHoursList extends Component {
  _renderItem({ item }) {
    return <ListItem text={item.Hour} />;
  }

  _keyExtractor = item => item.Hour;

  render() {
    const { navigation } = this.props;
    const hours = navigation.getParam("hours", "hour");
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={hours}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default AvailableHoursList;
