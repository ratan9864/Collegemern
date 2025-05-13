// Sample data
const resumeData = {
  email: "ratankk0208@gmail.com",
  phone: "+91 6204605843",
  skills: ["HTML", "CSS", "JavaScript", "Python"],
  experience: [
    {
      title: "Frontend Developer",
      company: "TechCorp",
      years: "2021 - Present"
    },
    {
      title: "Python Numpy, Pandas Developer",
      company: "codezeal technologies",
      years: "2023 - 2024"
    }
  ]
};

// Populate the data into the HTML
document.getElementById("email").textContent = resumeData.email;
document.getElementById("phone").textContent = resumeData.phone;

const skillsList = document.getElementById("skills");
resumeData.skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

const experienceDiv = document.getElementById("experience");
resumeData.experience.forEach(job => {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${job.title}</strong> at ${job.company} (${job.years})`;
  experienceDiv.appendChild(div);
});
