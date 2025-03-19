// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const LessonDetail = () => {
//     const { lessonId } = useParams();
//     const [lesson, setLesson] = useState(null);
//     const [progress, setProgress] = useState(0);
//     const navigate = useNavigate();
//     const user_id = localStorage.getItem("user_id");

//     useEffect(() => {
//         fetch(`http://localhost:5000/api/lessons/${lessonId}`)
//             .then((res) => res.json())
//             .then((data) => setLesson(data));

//         fetch(`http://localhost:5000/api/progress/${user_id}/${lessonId}`)
//             .then((res) => res.json())
//             .then((data) => setProgress(data.progress_percentage || 0));
//     }, [lessonId]);

//     const markAsUnderstood = () => {
//         fetch("http://localhost:5000/api/progress/save", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 user_id,
//                 lesson_id: lessonId,
//                 progress_percentage: 100,
//             }),
//         }).then(() => {
//             navigate("/lessons"); // Redirect back to lessons page
//         });
//     };

//     if (!lesson) return <p>Loading...</p>;

//     return (
//         <div>
//             <h2>{lesson.title}</h2>
//             <p>{lesson.content}</p>
//             <p>Progress: {progress}%</p>
//             <button onClick={markAsUnderstood}>Understood</button>
//         </div>
//     );
// };

// export default LessonDetail;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const LessonDetail = () => {
    const { lessonId } = useParams();
    const [lesson, setLesson] = useState(null);
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();
    const user_id = localStorage.getItem("user_id");

    useEffect(() => {
        fetch(`http://localhost:5000/api/lessons/${lessonId}`)
            .then((res) => res.json())
            .then((data) => setLesson(data));

        fetch(`http://localhost:5000/api/progress/${user_id}/${lessonId}`)
            .then((res) => res.json())
            .then((data) => setProgress(data.progress_percentage || 0));
    }, [lessonId]);

    const markAsUnderstood = () => {
        fetch("http://localhost:5000/api/progress/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id,
                lesson_id: lessonId,
                progress_percentage: 100,
            }),
        })
        .then(() => {
            setProgress(100); // ✅ Update progress immediately
        })
        .catch((err) => console.error("Error updating progress:", err));
    };

    if (!lesson) return <p>Loading...</p>;

    return (
        <div>
            <h2>{lesson.title}</h2>
            <p>{lesson.content}</p>
            <p>Progress: {progress}%</p>
            <button onClick={markAsUnderstood}>Understood</button>
        </div>
    );
};

export default LessonDetail;
