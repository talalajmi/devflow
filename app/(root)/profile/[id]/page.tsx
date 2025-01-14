interface ProfilePageProps {
  params: {
    id: string;
  };
}

const ProfilePage = (props: ProfilePageProps) => {
  const {
    params: { id },
  } = props;
  return <div>{id}</div>;
};

export default ProfilePage;
