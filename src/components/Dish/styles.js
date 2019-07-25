import { StyleSheet } from "react-native";

export default StyleSheet.create({
  logoImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  logoImage: {
    height: 50,
    width: 50
  },
  textWrapper: {
    flexDirection: "column",
    justifyContent: "space-around",
    width: 245
  },
  bottomTextWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  footerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300
  },
  textPrice: {
    color: "#F59315"
  },
  title: {
    fontSize: 18
  },
  categoryText: {
    color: "#969696"
  },
  dishImage: {
    height: 300,
    width: null,
    flex: 1
  }
});
