# #ask - Open Source Ticketing System
## Redefining Ticket Requests

![#ask](public/assets/ask-cover.png)

### Overview:
🎫 The #ask platform is a simple ticketing system designed to enhance issue management and streamline task tracking within an organization. Built using Next JS for the frontend and Supabase as the backend, this platform offers a dynamic and collaborative approach to handling tickets across different departments.

## Features

1. **Dynamic Form (#ask) Creation** 📋
   - Managers and Assignor have the ability to dynamically create ticket forms tailored to the specific needs of their department.
   - Forms serve as a structured means of capturing information related to issues and tasks.

2. **User Roles** 👥
   - The system distinguishes between three main user roles: Managers, Assignor and Members.
   - Managers are granted the privilege to manage organisation, workspace and #ask.
   - Assignor can assign these #ask to the members of there workspace
   - while Members can work and resolve on #ask.

3. **Departmental Workspaces** 🏢
   - Managers can efficiently organize their departments/workspace by adding members to their team.
   - This ensures that each department has a designated set of users with specific responsibilities.

4. **Cross-Department Ticketing** ↔️
   - Users, both Members and Managers, can raise tickets that span across different departments.
   - This feature promotes collaboration and facilitates the resolution of inter-departmental issues.

5. **Ticket Assignment** 🎫
   - Assignor hold the authority to assign tickets to specific members within their department.
   - This functionality enables the delegation of tasks and ensures a structured workflow.

6. **Real-Time Communication** 🔄
   - The platform leverages Firebase Firestore for real-time data storage and retrieval.
   - Users can experience seamless and instant updates, promoting efficient communication and collaboration.

7. **User Authentication** 🔐
   - For Robust and easy user authentication mechanisms we are using Google Auth.
   - This includes role-based access control to manage permissions effectively.

8. **Task Tracking** 📈
   - The system provides comprehensive task tracking capabilities, allowing users to monitor the status and progress of assigned tickets.
   - Managers can oversee the workload of their team, ensuring timely completion of tasks.

Read [Architecture file](#ask-arch.md) to know more. ✨

# Learning Opportunities 🚀

Embark on a dynamic learning journey with #ask's move to Next.js and Supabase! 🌟 Dive into Next.js for responsive interfaces while embracing Supabase's scalability. Explore secure authentication, role-based access, and dynamic form handling. 🛡️ Foster cross-departmental collaboration, refine Firestore databases, and elevate state management. 🗃️ Discover task management best practices, scalability tips, and UI/UX design principles. Get ready for a comprehensive modern web app development experience! ✨

### Installation:
1. Clone the repository: `git clone https://github.com/nirajmohanrana/hashtag-ask.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

### Tech Stack:
- Next JS
- Supabase

### Getting Started:
1. **Setup Supabase:** 🛠️ Configure Supabase for the database management needs of the application.
2. **Environment Variables:** 🔐 Set up environment variables for Supabase configuration.
3. **Start Development:** ▶️ Run the application locally for testing and development.

### Contributing:
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request for any improvements, bug fixes, or new features.
Read [Contributions File](contributions.md) to know more. ✨

### Contact:
For any inquiries or support, reach out to [Me](https://www.linkedin.com/in/niraj-rana-2a0384193/). 📧
