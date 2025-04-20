import React, { useState, useEffect } from "react";

const Courses = ({ selectedSkill }) => {
    const [courses, setCourses] = useState([]);

  const coursesData = {
    Frontend: {
        HTML: [
            {title: "HTML For Beginners", instructor: "Abdelrahman Gamal", duration: "4 Weeks", language: "Arabic", platform: "Udemy", date: "June 12, 2024", link: "https://www.udemy.com/course/html-for-beginners"},
        ],
        CSS: [
            { title: "CSS Mastery", instructor: "Sara Ali", duration: "6 Hours", language: "English", platform: "Coursera", date: "May 5, 2024", link: "https://www.coursera.org/learn/css-mastery",},
            ],
        JavaScript: [
          { title: "JavaScript Essentials", instructor: "Omar Farouk", duration: "3 Weeks", language: "English", platform: "Udemy", date: "April 25, 2024", link: "https://www.udemy.com/course/javascript-essentials",},
          ],
        Bootstrap: [
          { title: "Bootstrap for Beginners", instructor: "Ahmed Magdy", duration: "2 Weeks", language: "Arabic", platform: "YouTube", date: "March 15, 2024", link: "https://www.youtube.com/watch?v=examplelink",},
          ],
        React: [
          { title: "Master React", instructor: "Khaled Osama", duration: "5 Weeks", language: "English", platform: "Udemy", date: "July 10, 2024", link: "https://www.udemy.com/course/master-react",},
          ],
        Git: [
          { title: "Git Basics", instructor: "Ahmed Shawky", duration: "2 Weeks", language: "Arabic", platform: "Udemy", date: "June 20, 2024", link: "https://www.udemy.com/course/git-basics",},
          ],
        Sass: [
          { title: "Mastering Sass", instructor: "Mohamed Khaled", duration: "3 Weeks", language: "English", platform: "Coursera", date: "July 2, 2024", link: "https://www.coursera.org/learn/mastering-sass",},
          ],
        Redux: [
          { title: "React Redux Tutorial", instructor: "Mohamed Tarek", duration: "4 Weeks", language: "English", platform: "YouTube", date: "August 15, 2024", link: "https://www.youtube.com/watch?v=examplelink",},
          ],
        TypeScript: [
          { title: "TypeScript Crash Course", instructor: "John Doe", duration: "3 Weeks", language: "English", platform: "Udemy", date: "July 25, 2024", link: "https://www.udemy.com/course/typescript-crash-course",},
          ],
        Angular: [
          { title: "Angular Full Course", instructor: "Sara Mounir", duration: "4 Weeks", language: "Arabic", platform: "Udemy", date: "September 1, 2024", link: "https://www.udemy.com/course/angular-full-course",},
          ],
    },
    Backend: {
        Node: [
            { title: "Node.js for Beginners", instructor: "John Smith", duration: "3 Weeks", language: "English", platform: "Coursera", date: "June 20, 2024", link: "https://www.coursera.org/learn/nodejs",},
            ],
        Express: [
            { title: "Express Framework Crash Course", instructor: "Michael Jackson", duration: "2 Weeks", language: "English", platform: "YouTube", date: "May 1, 2024", link: "https://www.youtube.com/watch?v=examplelink",},
            ],
        MongoDB: [
          { title: "MongoDB Complete Guide", instructor: "Ahmed Shawky", duration: "4 Weeks", language: "Arabic", platform: "Udemy", date: "March 20, 2024", link: "https://www.udemy.com/course/mongodb-complete-guide",},
         ],
        GraphQL: [
          { title: "GraphQL Crash Course", instructor: "Ali Hassan", duration: "4 Weeks", language: "English", platform: "Coursera", date: "July 10, 2024", link: "https://www.coursera.org/learn/graphql",},
          ],
        Docker: [
          { title: "Docker Essentials", instructor: "Mahmoud Essam", duration: "5 Weeks", language: "Arabic", platform: "YouTube", date: "August 1, 2024", link: "https://www.youtube.com/watch?v=examplelink",},
          ],
        PostgreSQL: [
          { title: "PostgreSQL Complete Tutorial", instructor: "Nour Ali", duration: "6 Weeks", language: "English", platform: "Udemy", date: "September 1, 2024", link: "https://www.udemy.com/course/postgresql-complete-tutorial",},
          ],
    },
    "UI/UX": {
        Figma: [
          { title: "Figma UI/UX Design", instructor: "Amina Khali", duration: "5 Weeks", language: "English", platform: "Udemy", date: "June 30, 2024", link: "https://www.udemy.com/course/figma-ui-ux-design",},
          ],
        Wireframes: [
          { title: "Wireframing Fundamentals", instructor: "Sami Zaki", duration: "3 Weeks", language: "Arabic", platform: "Coursera", date: "April 12, 2024", link: "https://www.coursera.org/learn/wireframing",},
          ],
        Prototyping: [
          { title: "Prototyping for UI/UX", instructor: "Mona Ali", duration: "4 Weeks", language: "Arabic", platform: "YouTube", date: "July 7, 2024", link: "https://www.youtube.com/watch?v=examplelink",},
          ],
        "Adobe XD": [
          { title: "Adobe XD Masterclass", instructor: "Ahmed Ghanem", duration: "5 Weeks", language: "English", platform: "Udemy", date: "August 10, 2024", link: "https://www.udemy.com/course/adobe-xd-masterclass",},
          ],
      
    },
    "Cyber Security": {
        Networking: [
          { title: "Networking Fundamentals", instructor: "Mohamed Nabil", duration: "3 Weeks", language: "Arabic", platform: "YouTube", date: "May 10, 2024", link: "https://www.youtube.com/watch?v=examplelink",},
          ],
        Linux: [
          { title: "Linux Essentials for Beginners", instructor: "Sara Hussein", duration: "4 Weeks", language: "English", platform: "Udemy", date: "June 1, 2024", link: "https://www.udemy.com/course/linux-essentials",},
          ],
        "Penetration Testing": [
          { title: "Penetration Testing Basics", instructor: "Omar Fahmy", duration: "5 Weeks", language: "English", platform: "Coursera", date: "July 15, 2024", link: "https://www.coursera.org/learn/penetration-testing",},
          ],
        Firewalls: [
          { title: "Firewall Essentials", instructor: "Tamer Farouk", duration: "6 Weeks", language: "Arabic", platform: "YouTube", date: "August 20, 2024", link: "https://www.youtube.com/watch?v=examplelink",},
          ],
      
    },
    "Data Science": {
        Python: [
          { title: "Python for Data Science", instructor: "Mariam Salah", duration: "5 Weeks", language: "English", platform: "Coursera", date: "July 5, 2024", link: "https://www.coursera.org/learn/python-for-data-science",},
          ],
        Pandas: [
          { title: "Mastering Pandas for Data Science", instructor: "Mohamed Fathy", duration: "4 Weeks", language: "Arabic", platform: "YouTube", date: "May 15, 202en", link: "https://www.youtube.com/watch?v=examplelink",},
          ],
        "Machine Learning": [
          { title: "Machine Learning A-Z", instructor: "Adam Malik", duration: "6 Weeks", language: "English", platform: "Udemy", date: "June 30, 2024", link: "https://www.udemy.com/course/machine-learning-a-z",},
          ],
        TensorFlow: [
          { title: "TensorFlow for Deep Learning", instructor: "John Doe", duration: "7 Weeks", language: "English", platform: "Coursera", date: "May 22, 2024", link: "https://www.coursera.org/learn/tensorflow-for-deep-learning",},
          ],
    },
  };

  useEffect(() => {
    if (coursesData[selectedSkill]) {
      setCourses(coursesData[selectedSkill]);
    } else {
      setCourses([]);
    }
  }, [selectedSkill]); 


  const platformIcons = {
    YouTube: <i className="fa-brands fa-youtube text-danger"></i>,
    Udemy: <i className="fa-brands fa-u text-purple"></i>,
    Coursera: <i className="fa-solid fa-graduation-cap text-primary"></i>,
    "Maharah Tech": <i className="fa-solid fa-laptop-code text-success"></i>,
  };

  return (
    <div>
      

      <div className="text-center mb-3">
        <h4 className="fw-bold">{selectedSkill} Courses</h4>
      </div>

      {courses.length === 0 ? (
        <div className="text-center">
          <p>No courses available for {selectedSkill}</p>
        </div>
      ) : (
        <div className="container d-flex flex-wrap gap-4 justify-content-center">
          {courses.map((course, index) => (
            <div
              className="border rounded p-3"
              style={{ width: "250px" }}
              key={index}
            >
              <p className="fw-bold mb-1">{course.title}</p>
              <p className="text-muted small mb-1">
                {course.instructor} • {course.duration}
              </p>
              <p className="small mb-1">{course.language}</p>
              <p className="text-muted small mb-1">
                {course.date} by {platformIcons[course.platform] || course.platform}
              </p>
              <a
                href={course.link}
                className="text-decoration-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
