import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import DishSection from "./DishSection";
import Container from "../Container";
import Flag from "../Flag";
import Button from "../Button";

const Dish = ({
  DishName,
  DishPrice,
  DishPhoto,
  CategoryName,
  DishFlags,
  onHoursPress
}) => {
  let DishFlag = DishFlags.length ? DishFlags[0].Flag : "Normal";
  return (
    <Container>
      <DishSection>
        <View style={styles.logoImageContainer}>
          <Image
            source={require("./images/Viola.png")}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{DishName}</Text>
          <View style={styles.bottomTextWrapper}>
            <Text style={styles.categoryText}>{CategoryName}</Text>
            <Text style={styles.textPrice}>${DishPrice}</Text>
          </View>
        </View>
      </DishSection>
      <DishSection>
        <Image source={{ uri: DishPhoto }} style={styles.dishImage} />
      </DishSection>
      <DishSection>
        <View style={styles.footerWrapper}>
          <Flag flag={DishFlag} />

          <TouchableOpacity onPress={onHoursPress}>
            <Text>Available Hours</Text>
          </TouchableOpacity>
        </View>
      </DishSection>

      <DishSection>
        <Button onPress={() => console.log("clicked Ordered button")}>
          Order Now
        </Button>
      </DishSection>
    </Container>
  );
};

export default Dish;
