"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import UserProfile from "../../components/UserProfile"

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();
      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = () => {};
  const handleDelete = async () => {};

  return (
    <UserProfile
      name="My"
      desc="Welcome to your profile page. Here you can see all your posts."
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default Profile;
