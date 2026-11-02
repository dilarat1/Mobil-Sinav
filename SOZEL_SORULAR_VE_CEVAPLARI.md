# 📱 Mobile App Development - Midterm Theory & Verbal Study Guide (Vize Sözel & Boşluk Doldurma)

Bu rehber, vize sınavında çıkabilecek tüm teorik, mimari ve boşluk doldurma sorularının İngilizce ve Türkçe birebir cevaplarını içerir. Sınav anında `Ctrl + F` (veya `Cmd + F`) ile aratarak kullanabilirsiniz.

---

## 1. Architecture Fundamentals (Mimari Temelleri)

### Q: What are the fundamental threads in React Native architecture and what are their roles?
* **JavaScript Thread**: This is where React logic, API calls, event handlers, and state management execute.
* **Shadow Thread (Yoga Engine)**: This layer calculates the layout, dimensions, and positions of UI elements using Facebook's Yoga Flexbox engine before passing them to the native side.
* **Native Main Thread (UI Thread)**: This is the OS-level thread (iOS/Android) responsible for drawing native UI components on the screen and listening to user touch gestures.
* **Bridge**: An asynchronous, serialized JSON communication bridge that connects JavaScript code with the native platform modules.

---

## 2. React vs. React Native (Karşılaştırma)

| Feature / Topic | React (Web) | React Native (Mobile) |
| :--- | :--- | :--- |
| **Target Platform** | Web Browsers (Chrome, Safari, Edge) | iOS & Android Mobile Devices |
| **UI Creation** | Virtual DOM & HTML elements (`<div>`, `<p>`, `<span>`, `<h1>`) | Native Platform Components (`<View>`, `<Text>`, `<Image>`) |
| **Style Definition**| CSS stylesheets, CSS modules, classes (`className`) | Flexbox style objects via `StyleSheet.create({ ... })` |
| **Navigation** | React Router (`<BrowserRouter>`, `<Route>`) | React Navigation or Expo Router |
| **Build Process** | Webpack / Vite / Parcel | Metro Bundler + Xcode / Android Studio |
| **Click Events** | `onClick` | `onPress` |

---

## 3. Expo vs. React Native CLI

### Q: What are the advantages of using Expo over React Native CLI?
1. **Quick & Zero-configuration Start**: No need to install heavy Android Studio, Java SDK, or Xcode to start development.
2. **Instant Physical Testing (Expo Go)**: You can test the app on a physical phone simply by scanning a QR code with the Expo Go app.
3. **OTA (Over-The-Air) Updates**: Update your application code remotely without submitting a new build to the App Store or Google Play.
4. **Rich Pre-configured Modules**: Built-in, ready-to-use native packages for Camera, Location, Notifications, Sensors, and Filesystem.

---

## 4. Props vs. State (Bileşen Veri Yönetimi)

### Q: What is the difference between Props and State?
* **Props (Properties)**:
  * Used to pass data from a parent component down to a child component.
  * **Read-only (Immutable)**: A component cannot modify its own incoming props.
* **State (`useState`)**:
  * An internal storage holding mutable data that belongs to the component.
  * **Mutable**: Updated using its setter function (e.g., `setCount`).
  * **Triggers Re-render**: Whenever the state changes, React automatically re-renders the component to update the UI on the screen.

---

## 5. Core Components & Important Props (Temel Bileşenler)

### A. `<FlatList>` (The List Machine)
Used for rendering large, dynamic, and scrollable data sets efficiently through virtualization (lazy loading).

* **`data`**: The array of items to render.
* **`renderItem`**: A function taking `{ item, index }` that returns the JSX element to render for each row.
* **`keyExtractor`**: Extracts a unique string identifier (`id`) for each item (critical for list performance).
* **`ListHeaderComponent`**: Component rendered at the very top of the list.
* **`ListFooterComponent`**: Component rendered at the very bottom of the list (used for counters, totals, or load buttons).
* **`ListEmptyComponent`**: Fallback UI rendered when the `data` array is empty.
* **`ItemSeparatorComponent`**: Visual divider placed between rows.

> **FlatList vs. ScrollView**:
> * `ScrollView` renders all rows into memory simultaneously, causing lag and crashes on large lists.
> * `FlatList` virtualizes data, rendering only the items currently visible on the screen.

### B. `<TouchableOpacity>` (Interactive Button)
* Replaces the native `<Button>` component for customizable layouts.
* Dims its opacity when pressed to provide visual feedback to the user.
* Main event: **`onPress`** (instead of `onClick`).
* Prop: **`activeOpacity`** (controls the transparency level when pressed).

### C. `<SafeAreaView>`
* Positions content within the safe boundaries of a mobile device screen.
* Prevents UI components from being covered by notches, camera cutouts, rounded corners, or status bars (especially on iPhones and modern Androids).

### D. `<TextInput>` (User Input Field)
* **`value`**: The text value currently displayed (controlled by state).
* **`onChangeText`**: Callback function fired whenever the text changes (`onChangeText={(text) => setText(text)}`).
* **`placeholder`**: Faded hint text shown when the input is empty.
* **`keyboardType`**: Changes keyboard layout (`'default'`, `'numeric'`, `'email-address'`).
* **`secureTextEntry`**: Masks input for password fields (`true`/`false`).

### E. `<Image>` (Graphics & Photos)
* **Remote image (from URL)**: Must specify `{ uri: 'https://...' }` and explicit `width` & `height` in styles:
  ```jsx
  <Image source={{ uri: 'https://picsum.photos/100' }} style={{ width: 50, height: 50 }} />
  ```
* **Local asset**: Uses `require('./assets/logo.png')`:
  ```jsx
  <Image source={require('./assets/logo.png')} style={{ width: 50, height: 50 }} />
  ```

---

## 6. React Hooks

### Q: What is `useState`?
Special React function that allows functional components to store and update dynamic data:
```jsx
const [count, setCount] = useState(0);
```

### Q: What is `useEffect`?
Used to manage side effects and lifecycle events in functional components (such as fetching data from an API, subscribing to events, or setting timers):
* **`useEffect(() => { ... }, [])` (Empty Dependency Array)**: Runs only **ONCE** when the component first mounts (loads onto the screen).
* **`useEffect(() => { ... }, [value])`**: Runs on mount AND whenever the variable `value` changes.
* **`useEffect(() => { ... })` (No Dependency Array)**: Runs after **EVERY** single render.

---

## 7. Flexbox & Styling Rules (Stil ve Düzen Kuralları)

* **`flex: 1`**: Expand and fill the entire available screen space.
* **`flexDirection: 'row'`**: Align child components **SIDE BY SIDE (horizontally)**. (Default is `'column'`, which stacks them vertically).
* **`alignItems: 'center'`**: Center items along the cross axis (e.g., vertically when `row`, horizontally when `column`).
* **`justifyContent: 'center'`**: Center items along the main axis.
* **`justifyContent: 'space-between'`**: Push first item to the start, last item to the end, with equal space between them.
* **`borderRadius`**: Rounds the corners of a box (e.g., `borderRadius: 25` with `width: 50` creates a perfect circle).
