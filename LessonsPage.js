

// // // // import React, { useState, useEffect } from 'react';

// // // // const LessonsPage = () => {
// // // //     const [lessons, setLessons] = useState([]);
// // // //     const [progress, setProgress] = useState({});
    
// // // //     const user_id = localStorage.getItem('user_id'); // Fetch user ID

// // // //     useEffect(() => {
// // // //         // Fetch all lessons
// // // //         fetch('http://localhost:5000/api/lessons')
// // // //             .then(res => res.json())
// // // //             .then(data => setLessons(data));

// // // //         // Fetch progress of lessons for the user
// // // //         fetch(`http://localhost:5000/api/progress/${user_id}`)
// // // //             .then(res => res.json())
// // // //             .then(data => {
// // // //                 const progressMap = {};
// // // //                 data.forEach(item => {
// // // //                     progressMap[item.lesson_id] = item.progress_percentage;
// // // //                 });
// // // //                 setProgress(progressMap);
// // // //             });
// // // //     }, []);

// // // //     const updateProgress = (lesson_id, newProgress) => {
// // // //         fetch('http://localhost:5000/api/progress/save', {
// // // //             method: 'POST',
// // // //             headers: { 'Content-Type': 'application/json' },
// // // //             body: JSON.stringify({ user_id, lesson_id, progress_percentage: newProgress })
// // // //         }).then(() => {
// // // //             setProgress(prev => ({ ...prev, [lesson_id]: newProgress }));
// // // //         });
// // // //     };

// // // //     return (
// // // //         <div>
// // // //             <h2>Lessons</h2>
// // // //             {lessons.map(lesson => (
// // // //                 <div key={lesson.lesson_id}>
// // // //                     <h3>{lesson.title}</h3>
// // // //                     <p>Progress: {progress[lesson.lesson_id] || 0}%</p>
// // // //                     <input
// // // //                         type="range"
// // // //                         min="0"
// // // //                         max="100"
// // // //                         value={progress[lesson.lesson_id] || 0}
// // // //                         onChange={(e) => updateProgress(lesson.lesson_id, e.target.value)}
// // // //                     />
// // // //                 </div>
// // // //             ))}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default LessonsPage;


// // // import React, { useState, useEffect } from "react";

// // // const LessonsPage = () => {
// // //     const [lessons, setLessons] = useState([]);
// // //     const [progress, setProgress] = useState({});
// // //     const [currentLesson, setCurrentLesson] = useState(null);

// // //     const user_id = localStorage.getItem("user_id"); // Fetch user ID

// // //     useEffect(() => {
// // //         // Fetch all lessons
// // //         fetch("http://localhost:5000/api/lessons")
// // //             .then((res) => res.json())
// // //             .then((data) => setLessons(data));

// // //         // Fetch progress of lessons for the user
// // //         fetch(`http://localhost:5000/api/progress/${user_id}`)
// // //             .then((res) => res.json())
// // //             .then((data) => {
// // //                 const progressMap = {};
// // //                 data.forEach((item) => {
// // //                     progressMap[item.lesson_id] = item.progress_percentage;
// // //                 });
// // //                 setProgress(progressMap);
// // //             });
// // //     }, []);

// // //     const handleLessonClick = (lesson) => {
// // //         setCurrentLesson(lesson);
// // //     };

// // //     const markAsUnderstood = () => {
// // //         if (!currentLesson) return;

// // //         const newProgress = 100;
// // //         fetch("http://localhost:5000/api/progress/save", {
// // //             method: "POST",
// // //             headers: { "Content-Type": "application/json" },
// // //             body: JSON.stringify({
// // //                 user_id,
// // //                 lesson_id: currentLesson.lesson_id,
// // //                 progress_percentage: newProgress,
// // //             }),
// // //         }).then(() => {
// // //             setProgress((prev) => ({ ...prev, [currentLesson.lesson_id]: newProgress }));

// // //             // Move to the next lesson (if exists)
// // //             const nextLesson = lessons.find((lesson) => lesson.lesson_id === currentLesson.next_lesson_id);
// // //             setCurrentLesson(nextLesson || null);
// // //         });
// // //     };

// // //     return (
// // //         <div>
// // //             <h2>Lessons</h2>
// // //             {lessons.map((lesson) => (
// // //                 <div key={lesson.lesson_id}>
// // //                     <h3 style={{ cursor: "pointer" }} onClick={() => handleLessonClick(lesson)}>
// // //                         {lesson.title}
// // //                     </h3>
// // //                     <p>Progress: {progress[lesson.lesson_id] || 0}%</p>
// // //                     <input
// // //                         type="range"
// // //                         min="0"
// // //                         max="100"
// // //                         value={progress[lesson.lesson_id] || 0}
// // //                         readOnly
// // //                     />
// // //                 </div>
// // //             ))}

// // //             {currentLesson && (
// // //                 <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}>
// // //                     <h3>{currentLesson.title}</h3>
// // //                     <p>{currentLesson.content}</p>
// // //                     <button onClick={markAsUnderstood}>Understood</button>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default LessonsPage;


// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";

// // const LessonsPage = () => {
// //     const [lessons, setLessons] = useState([]);
// //     const [progress, setProgress] = useState({});
// //     const user_id = localStorage.getItem("user_id");

// //     useEffect(() => {
// //         fetch("http://localhost:5000/api/lessons")
// //             .then((res) => res.json())
// //             .then((data) => setLessons(data));

// //         fetch(`http://localhost:5000/api/progress/${user_id}`)
// //             .then((res) => res.json())
// //             .then((data) => {
// //                 const progressMap = {};
// //                 data.forEach((item) => {
// //                     progressMap[item.lesson_id] = item.progress_percentage;
// //                 });
// //                 setProgress(progressMap);
// //             });
// //     }, []);

// //     return (
// //         <div>
// //             <h2>Lessons</h2>
// //             {lessons.map((lesson) => (
// //                 <div key={lesson.lesson_id}>
// //                     <h3>
// //                         <Link to={`/lesson/${lesson.lesson_id}`} style={{ textDecoration: "none", color: "blue" }}>
// //                             {lesson.title}
// //                         </Link>
// //                     </h3>
// //                     <p>Progress: {progress[lesson.lesson_id] || 0}%</p>
// //                     <input type="range" min="0" max="100" value={progress[lesson.lesson_id] || 0} readOnly />
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default LessonsPage;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const LessonsPage = () => {
//     const [lessons, setLessons] = useState([]);
//     const [progress, setProgress] = useState({});
//     const user_id = localStorage.getItem("user_id");

//     useEffect(() => {
//         const fetchLessonsAndProgress = () => {
//             fetch("http://localhost:5000/api/lessons")
//                 .then((res) => res.json())
//                 .then((data) => setLessons(data));

//             fetch(`http://localhost:5000/api/progress/${user_id}`)
//                 .then((res) => res.json())
//                 .then((data) => {
//                     const progressMap = {};
//                     data.forEach((item) => {
//                         progressMap[item.lesson_id] = item.progress_percentage;
//                     });
//                     setProgress(progressMap);
//                 });
//         };

//         fetchLessonsAndProgress();

//         // ✅ Poll for progress updates every 3 seconds
//         const interval = setInterval(fetchLessonsAndProgress, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div>
//             <h2>Lessons</h2>
//             {lessons.map((lesson) => (
//                 <div key={lesson.lesson_id}>
//                     <h3>
//                         <Link to={`/lesson/${lesson.lesson_id}`} style={{ textDecoration: "none", color: "blue" }}>
//                             {lesson.title}
//                         </Link>
//                     </h3>
//                     <p>Progress: {progress[lesson.lesson_id] || 0}%</p>
//                     <input type="range" min="0" max="100" value={progress[lesson.lesson_id] || 0} readOnly />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default LessonsPage;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LessonsPage = () => {
    const [lessons, setLessons] = useState([]);
    const [progress, setProgress] = useState({});
    const user_id = localStorage.getItem("user_id");

    const fetchLessonsAndProgress = () => {
        fetch("http://localhost:5000/api/lessons")
            .then((res) => res.json())
            .then((data) => setLessons(data));

        fetch(`http://localhost:5000/api/progress/${user_id}`)
            .then((res) => res.json())
            .then((data) => {
                const progressMap = {};
                data.forEach((item) => {
                    progressMap[item.lesson_id] = item.progress_percentage;
                });
                setProgress(progressMap);
            });
    };

    useEffect(() => {
        fetchLessonsAndProgress();

        // ✅ Refetch progress when user returns to this page
        const handleVisibilityChange = () => {
            if (!document.hidden) {
                fetchLessonsAndProgress();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return (
        <div>
            <h2>Lessons</h2>
            {lessons.map((lesson) => (
                <div key={lesson.lesson_id}>
                    <h3>
                        <Link to={`/lesson/${lesson.lesson_id}`} style={{ textDecoration: "none", color: "blue" }}>
                            {lesson.title}
                        </Link>
                    </h3>
                    <p>Progress: {progress[lesson.lesson_id] || 0}%</p>
                    <input type="range" min="0" max="100" value={progress[lesson.lesson_id] || 0} readOnly />
                </div>
            ))}
        </div>
    );
};

export default LessonsPage;
