// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // import Signup from './pages/Signup';
// // import Login from './pages/Login';
// // import LessonsPage from './pages/LessonsPage';

// // function App() {
// //     return (
// //         <Router>
// //             <Routes>
// //                 {/* Set Login as the first page */}
// //                 <Route path="/" element={<Navigate to="/login" />} />
// //                 <Route path="/signup" element={<Signup />} />
// //                 <Route path="/login" element={<Login />} />
// //                 <Route path="/lessons" element={<LessonsPage />} />
// //             </Routes>
// //         </Router>
// //     );
// // }

// // export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import LessonsPage from './pages/LessonsPage';

// const PrivateRoute = ({ element }) => {
//     const token = localStorage.getItem('token');
//     return token ? element : <Navigate to="/login" />;
// };

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Navigate to="/login" />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/lessons" element={<PrivateRoute element={<LessonsPage />} />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LessonsPage from './pages/LessonsPage';
import LessonDetail from './pages/LessonDetail';

const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem('token');
    return token ? element : <Navigate to="/login" />;
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/lessons" element={<PrivateRoute element={<LessonsPage />} />} />
                <Route path="/lesson/:lessonId" element={<PrivateRoute element={<LessonDetail />} />} />
            </Routes>
        </Router>
    );
}

export default App;
