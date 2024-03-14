# Task-4 : Project description

## [Srivatsa's Coding platform: LeetClone](https://65c667661fffc0255fbcea4b--steady-platypus-d0a662.netlify.app/)
### [Github repo link](https://github.com/srivatsa007/Leetcode-clone-FE-)

### Description:
- This is a front-end project, a coding platform landing and coding area inspired by LeetCode.
- Built using React, it allows users to solve coding problems and test their solutions against provided test cases by submitting the code.

### Tech-stack Used:
- ReactJS
- CodeMirror for code compilation and result
- Firebase Authentication for User authentication (account creation and login)
- Daisy UI for theme and Dark mode toggle.

### Features Used:

#### React Concepts Used:
1. **Context API:**
   The Context API is used for managing authentication state across components. `AuthProvider` wraps the entire application to provide authentication context.

```javascript
// AuthProvider.js
import { createContext, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  // Authentication state management logic
};

export default AuthProvider;
```

2. **[Firebase Authentication](https://firebase.google.com/):**
   - Used for user authentication. `useAuthState` hook is used to track authentication state.
```javascript
// CodeEditor.js
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

const [user] = useAuthState(auth);
```

3. **React Router DOM:**
   - Used for routing within the application. Different routes are defined using `Routes` and `Route` components.
```javascript
/// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}
```

4. **Destructuring:**
   - Used extensively to extract values from objects and arrays.
 ```javascript
// CodeEditor.js
const { examples, id, starterCode, handlerFunction } = Problem;
```

5. **Dark/Light Mode using [Daisy UI](https://daisyui.com/docs/themes/):**
   - Implemented Dark and Light mode functionality using Daisy UI components and CSS classes toggling.
