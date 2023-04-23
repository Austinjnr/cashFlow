// import { useState } from 'react';

// const UpdateProfile = () => {


//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('/api/profile', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({name, email, phone_number, id_number }),
//       });
//       if (response.ok) {
//         console.log('Profile updated successfully!');
//       } else {
//         console.error('Failed to update profile');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const onCancelClick = () => {
//     // handle cancel click
//   };

//   return (
//     <center>
//       <div  className="card " style={{width: "29em"}} >
//         <h2>Update Profile</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="full-name-input">Full Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="full-name-input"
//               value={name}
//               onChange={(event) => setFullName(event.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email-input">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email-input"
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone-input">Phone</label>
//             <input
//               type="tel"
//               className="form-control"
//               id="phone-input"
//               value={phone_number}
//               onChange={(event) => setPhone(event.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="id-number-input">Identity Number</label>
//             <input
//               type="text"
//               className="form-control"
//               id="id-number-input"
//               value={id_number}
//               onChange={(event) => setIdNumber(event.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary mr-2">
//             Save
//           </button>
//           <button
//             type="button"
//             className="btn btn-secondary"
//             onClick={onCancelClick}
//           >
//             Cancel
//           </button>
//         </form>
//       </div>
//     </center>
//   );
// };

// export default UpdateProfile;
