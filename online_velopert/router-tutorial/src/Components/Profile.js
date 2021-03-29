import React from 'react';

const profileDate = {
  margu: {
    name: 'Margu Park',
    description: 'Frontend Baby'
  },
  optimushwang: {
    name: 'Minhyun Hwang',
    description: 'Lead Vocalist @ Nuest'
  }
}

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileDate[username];
  // console.log(match);

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>
  }
  return (
    <div>
      <h3>{username} ({profile.name})</h3>
      <p>
        {profile.description}
      </p>
    </div>
  );
}

export default Profile;