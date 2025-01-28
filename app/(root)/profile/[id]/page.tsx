interface ProfilePageProps {
  params: Promise<{ id: string }>;
}

async function ProfilePage({ params }: ProfilePageProps) {
  const { id } = await params;

  return <h1>{id}</h1>;
}
export default ProfilePage;
