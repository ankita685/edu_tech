// In Purchases.jsx

// Purchases.jsx
import React from 'react';

// const Purchases = ({ purchasedCourses }) => {
//     return (
//       <div>
//         <h2>Purchased Courses</h2>
//         {purchasedCourses && purchasedCourses.length === 0 ? (
//           <p>No courses purchased yet.</p>
//         ) : (
//           <ul>
//             {purchasedCourses && purchasedCourses.map((course, index) => (
//     <li key={index}>
//         <h3>{course.title}</h3>
//         <p>{course.description}</p>
//     </li>
// ))}

//           </ul>
//         )}
//       </div>
//     );
//   };
  
const Purchases = ({ courses }) => {
    return (
      <div>
        <h2>Purchased Courses</h2>
        {courses.length === 0 ? (
          <p>No courses purchased yet.</p>
        ) : (
          <ul>
            {courses.map((course, index) => (
              <li key={index}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <img src={course.image} alt={course.title} /> {/* Updated line */}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Purchases;
  


