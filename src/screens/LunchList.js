import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { apiCall } from "../services/api";

import Spinner from "../components/Spinner";
import { Dish } from "../components/Dish";

class LunchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lunchList: [],
      fetched: false
    };
  }
  componentDidMount() {
    this.fetchData(
      "get",
      "http://www.voilarestaurantapp.com/VoilaService.svc/LunchList"
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state != nextState;
  }

  fetchData(method, path) {
    return apiCall(method, path)
      .then(res => this.setState({ lunchList: res, fetched: true }))
      .catch(err => console.log(err));
  }

  onHoursPress() {
    this.props.navigation.navigate("AvailableHours", {
      hours: this.state.lunchList[0].DishHours
    });
  }

  _keyExtractor = (item, index) => item.DishID;

  _renderItem({ item }) {
    const {
      DishName,
      DishPhoto,
      CategoryName,
      DishPrice,
      AvailableToday,
      DishID,
      DishFlags
    } = item;
    if (AvailableToday) {
      return (
        <Dish
          DishName={DishName}
          DishPrice={DishPrice}
          DishPhoto={DishPhoto}
          CategoryName={CategoryName}
          DishFlags={DishFlags}
          onHoursPress={this.onHoursPress.bind(this)}
        />
      );
    }
  }

  render() {
    if (this.state.fetched) {
      return (
        <FlatList
          data={this.state.lunchList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem.bind(this)}
        />
      );
    }
    return <Spinner />;
  }
}

export default LunchList;
