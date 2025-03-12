import React from "react";

const GroupMembers = () => {
  const members = [
    "Ritesh Bhagat",
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Lee",
  ];

  return (
    <div>
      <h2>Group Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupMembers;
