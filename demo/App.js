import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import Navigation from "./src/navigation/Navigation";
import Loading from "./src/components/Loading";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
