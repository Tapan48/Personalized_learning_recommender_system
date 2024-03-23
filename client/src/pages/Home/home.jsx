import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import  useAuth from '../../components/auth/userauth';

const HomePage = () => {
// const {authenticated}=useAuth();
// console.log(authenticated)
    


  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState('11');

  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
  };

  const redirectToGrade = () => {
    const route = selectedGrade === '11' ? '/11th' : '/12th';
    navigate(route);
  };

  // if (!authenticated){


  //   window.location.href='/login';
  //   // return null;
  // }
  

  return (
    <div className="HomePage">
      <header className="Header">
        <div className="Header-content">
          <h1>YourStudyBuddy</h1>
          <p>Unlocking Knowledge, Chapter by Chapter</p>
        </div>
      </header>

      <main className="MainContent">
      <section className="GradeSelector">
  <label htmlFor="gradeSelect">Select Grade:</label>
  <select id="gradeSelect" value={selectedGrade} onChange={handleGradeChange}>
    <option value="11">11th Standard</option>
    <option value="12">12th Standard</option>
  </select>
  <button onClick={redirectToGrade}>Go</button>
</section>


        <section className="SearchSection">
          <div className="SearchBox">
            <input type="text" placeholder="Search for a chapter..." />
            <button>Search</button>
          </div>
        </section>

        <section className="FeaturedChapters">
          <h2>Featured Chapters</h2>
          <div className="ChapterList">
            <div className="ChapterCard">
              <h3>Chapter 1</h3>
              <p>Introduction to...</p>
              <button>Read Summary</button>
            </div>
            <div className="ChapterCard">
              <h3>Chapter 3</h3>
              <p>The Cell...</p>
              <button>Read Summary</button>
            </div>
            {/* Add more featured chapters */}
          </div>
        </section>
      </main>

      {/* <footer className="Footer">
        <p>&copy; {new Date().getFullYear()} YourStudyBuddy. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default HomePage;




















// import React from 'react';
// import './home.css'; // Import your custom CSS for styling

// const HomePage = () => {
//   return (
//     <div className="HomePage">
//       <header className="Header">
//         <div className="Header-content">
//           <h1>YourStudyBuddy</h1>
//           <p>Unlocking Knowledge, Chapter by Chapter</p>
//         </div>
//       </header>
      
//       <main className="MainContent">
//         <section className="SearchSection">
//           <div className="SearchBox">
//             <input type="text" placeholder="Search for a chapter..." />
//             <button>Search</button>
//           </div>
//         </section>

//         <section className="FeaturedChapters">
//           <h2>Featured Chapters</h2>
//           <div className="ChapterList">
//             <div className="ChapterCard">
//               <h3>Chapter 1</h3>
//               <p>Introduction to...</p>
//               <button>Read Summary</button>
//             </div>
//             <div className="ChapterCard">
//               <h3>Chapter 3</h3>
//               <p>The Cell...</p>
//               <button>Read Summary</button>
//             </div>
//             {/* Add more featured chapters */}
//           </div>
//         </section>
//       </main>

//       <footer className="Footer">
//         <p>&copy; {new Date().getFullYear()} YourStudyBuddy. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;




