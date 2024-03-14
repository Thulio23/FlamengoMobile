import { ImageBackground, Switch, Text, View } from "react-native";
import { styles } from "./src/styles/GlobalStyle";
import { useState } from "react";
import { Buttons } from "./src/components/Buttons";
import { Slide2 } from "./src/screens/Slide2";
import { Slide3 } from "./src/screens/Slide3";
import { Slide1 } from "./src/screens/Slide1";

export default function App() {
  const [page, setPage] = useState(1)
  const BackImage = require('./src/assets/back.jpeg')

  let slideToShow;

  if (page === 1) {
    slideToShow = <Slide1 altera={setPage} />;
  } else if (page === 2) {
    slideToShow = <Slide2 />;
  } else if (page === 3) {
    slideToShow = <Slide3 />;
  } else {
    slideToShow = <Slide1 altera={setPage} />;
  }

  return (
    <ImageBackground source={BackImage} style={styles.back}>
      <View style={styles.backcor}>
        <View>
          {slideToShow}
        </View>
      </View>
      <Buttons page={page} altera={setPage} />
    </ImageBackground>
  );
}
