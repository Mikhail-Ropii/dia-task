import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../../GlobalStyles";

export const Btn = ({ children }) => {
  return (
    <View style={styles.btn}>
      <Text style={styles.btnText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.secondBlack,
    borderRadius: 34,
    shadowColor: "rgba(102, 92, 209, 0.22)",
    elevation: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.24,
    shadowRadius: 7,
  },
  btnText: {
    fontFamily: FontFamily.bold,
    fontSize: FontSize.H3_size,
    color: Color.mainLight,
  },
});
