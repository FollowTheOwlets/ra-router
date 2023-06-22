import { createContext } from "react";

export const PostContext = createContext(
    { post: {}, setPost: () => { }, clearConstext: () => { } }
);