import { StyleSheet } from "react-native";

export default StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFF"
  },
  text: {
    color: "#343434",
    fontSize: 16
  },
  separator: {
    backgroundColor: "#E2E2E2",
    height: StyleSheet.hairlineWidth,
    flex: 1,
    marginLeft: 20
  }
});
