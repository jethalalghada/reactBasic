import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen  from "./src/screens/ColorScreen";
import EgStateScreen from "./src/screens/EgStateScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreenReducer from "./src/screens/SquareScreenReducer";
import CounterScreenReducer from "./src/screens/CounterScreenReducer";
import TextInputScreen from "./src/screens/TextInputScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Component : ComponentScreen,
    Image: ImageScreen,
    Counter : CounterScreen,
    Color: ColorScreen,
    EgState: EgStateScreen,
    Square: SquareScreen,
    SquareReducer : SquareScreenReducer,
    CounterReducer : CounterScreenReducer,
    TextInput: TextInputScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
