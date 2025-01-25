interface ProfilePageProps {
  params: { id: string };
}

async function ProfilePage({ params }: ProfilePageProps) {
  const { id } = params;

  return <h1>{id}</h1>;
}
export default ProfilePage;
