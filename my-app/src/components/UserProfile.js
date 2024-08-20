import React from 'react'
import user1 from "../images/user-1.png";

function UserProfile() {
  return (
    <div>
      <div className="flex flex-col-2  items-start justify-around bg-white shadow-xl ring-1 ring-black/5 p-20 rounded-3xl text-black mb-5">
        <div>
          <img src={user1} alt="user profile" />
        </div>
        <div className="ml-10">
          <div>
            {" "}
            <strong>Name: </strong> Megan
          </div>
          <div>
            <strong>Age: </strong>25
          </div>
          <div>
            <strong>Career: </strong>Grad student
          </div>
          <div className="pt-5">
            <strong>Background:</strong>
          </div>
          <div>Megan is a very busy grad student at NYU. She </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile