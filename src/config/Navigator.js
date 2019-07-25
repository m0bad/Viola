import { StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import LunchList from "../screens/LunchList";
import AvailableHoursList from "../screens/AvailableHoursList";

const MainStack = createStackNavigator(
  {
    LunchList: {
      screen: LunchList,
      navigationOptions: {
        header: () => null,
        headerTitle: "Lunch Menu"
      }
    }
  },
  { headerMode: "screen" }
);

const AvailableHoursStack = createStackNavigator({
  AvailableHoursList: {
    screen: AvailableHoursList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title
    })
  }
});

const MainNavigator = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    AvailableHours: {
      screen: AvailableHoursList
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    cardStyle: { paddingTop: StatusBar.currentHeight }
  }
);
export default createAppContainer(MainNavigator);
