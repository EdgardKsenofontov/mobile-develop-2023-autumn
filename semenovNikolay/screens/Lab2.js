import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  StyleSheet,
} from "react-native";

const Lab2 = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    StatusBar.setBackgroundColor(backgroundColor);
  }, [styles.backgroundColor]);

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor,
      }}
    >
      <TouchableOpacity
        onPress={() => handleColorChange("white")}
        style={styles.commonButton}
      >
        <Text style={styles.commonText}>White</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleColorChange("pink")}
        style={styles.commonButton}
      >
        <Text style={styles.commonText}>Pink</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleColorChange("yellow")}
        style={styles.commonButton}
      >
        <Text style={styles.commonText}>Yellow</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleColorChange("red")}
        style={styles.commonButton}
      >
        <Text style={styles.commonText}>Red</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  commonButton: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    borderRadius: 1,
    backgroundColor: "#87cefa",
    width: 100,
    height: 80,
  },
  commonText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Lab2;