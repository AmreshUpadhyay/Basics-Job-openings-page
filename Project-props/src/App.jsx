import React from 'react'
import Card from './component/Card';
import "./App.css";
const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    post: "Frontend Developer",
    tag1: "React",
    tag2: "JavaScript",
    tag3: "Tailwind CSS",
    daysAgo: "2 days ago",
    payHour: "$75/hr",
    location: "Mountain View, CA",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    post: "Backend Developer",
    tag1: "Java",
    tag2: "Spring Boot",
    tag3: "MySQL",
    daysAgo: "1 day ago",
    payHour: "$80/hr",
    location: "Redmond, WA",
  },
  {
    brandLogo: "https://imgs.search.brave.com/Mwb1yqL2AlcYq-fIla-HxpMy869WI3IH1JMaoNNqL20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/MS8xMC9hbWF6b24t/bG9nby12ZWN0b3It/NDY4NjAxMTAuanBn",
    companyName: "Amazon",
    post: "Full Stack Developer",
    tag1: "React",
    tag2: "Node.js",
    tag3: "MongoDB",
    daysAgo: "5 days ago",
    payHour: "$70/hr",
    location: "Seattle, WA",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    post: "UI/UX Designer",
    tag1: "Figma",
    tag2: "CSS",
    tag3: "React",
    daysAgo: "3 days ago",
    payHour: "$72/hr",
    location: "Los Gatos, CA",
  },
  {
    brandLogo: "https://imgs.search.brave.com/JimbXu-TBIteH1VoyDd3f5WQfMatFrJ4UMvvK4OQY6c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS50aGV2ZXJn/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/L3NpdGVzLzIvY2hv/cnVzL3VwbG9hZHMv/Y2hvcnVzX2Fzc2V0/L2ZpbGUvMjM2MjQz/NTcvYWNhc3Ryb19T/VEsxMjRfMDMuanBn/P3F1YWxpdHk9OTAm/c3RyaXA9YWxsJmNy/b3A9MCwwLDEwMCwx/MDAmdz0yNDAw",
    companyName: "Adobe",
    post: "React Developer",
    tag1: "React",
    tag2: "Redux",
    tag3: "TypeScript",
    daysAgo: "4 days ago",
    payHour: "$68/hr",
    location: "San Jose, CA",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    companyName: "Spotify",
    post: "Java Developer",
    tag1: "Java",
    tag2: "Spring Boot",
    tag3: "PostgreSQL",
    daysAgo: "6 days ago",
    payHour: "$78/hr",
    location: "Stockholm, Sweden",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    companyName: "Airbnb",
    post: "Software Engineer",
    tag1: "Node.js",
    tag2: "Express",
    tag3: "AWS",
    daysAgo: "7 days ago",
    payHour: "$85/hr",
    location: "San Francisco, CA",
  },
  {
    brandLogo: "https://imgs.search.brave.com/hnTFm9clDK3QkZPcvQuzncqzkJELgQXA2dR7kOqkDBg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MzM0NDIwOTYvZmls/ZS9vcmlnaW5hbC01/NzdiOTc0YjVmNWNk/YWMzYWI0ZWE5ZDA0/OWZjYjc3Zi5wbmc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy",
    companyName: "Uber",
    post: "Mobile App Developer",
    tag1: "React Native",
    tag2: "Firebase",
    tag3: "Redux",
    daysAgo: "2 days ago",
    payHour: "$73/hr",
    location: "New York, NY",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    companyName: "Meta",
    post: "Software Engineer",
    tag1: "JavaScript",
    tag2: "GraphQL",
    tag3: "React",
    daysAgo: "8 days ago",
    payHour: "$90/hr",
    location: "Menlo Park, CA",
  },
  {
    brandLogo: "https://imgs.search.brave.com/0bbzyBsMM03oOdswdoM3gKufevOE1CUbkjW3atyp8r4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E3Lzhj/LzQwL2E3OGM0MDZl/NGFkOTVmNjhiZDhi/MDE0NTgyZWYzZWNl/LmpwZw",
    companyName: "Apple",
    post: "iOS Developer",
    tag1: "Swift",
    tag2: "SwiftUI",
    tag3: "Xcode",
    daysAgo: "1 day ago",
    payHour: "$88/hr",
    location: "Cupertino, CA",
  },
];
  return (
    <div className="parent">
      {jobOpenings.map(function(elems , index){
        return <div key={index}>
          <Card
         logo = {elems.brandLogo}
         company = {elems.companyName} 
         posts = {elems.post} 
         daysago = {elems.daysAgo}
         tags3 = {elems.tag1}
         tags4 = {elems.tag2}
         payHours = {elems.payHour}
         location = {elems.location}
          />
        </div>
      })}
    </div>
  )
}

export default App
