"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import UserProfile from "../../../components/UserProfile";

const User = ({ params }) => {
  const [posts, setPosts] = useState([]);

  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${params?.id}/posts`);
      const data = await res.json();

      setPosts(data);
    };
    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <UserProfile
      name={userName}
      desc={`Welcome to ${userName} profile page. Here you can see all their posts.`}
      data={posts}
    />
  );
};

export default User;