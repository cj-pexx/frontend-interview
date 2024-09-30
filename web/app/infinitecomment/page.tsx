"use client";

type Comment = {
  id: string;
  isRootNode: boolean;
  replys: any[];
  text: string;
}

export default function InfiniteComment() {
  return (
    <div>Comment</div>
  )
}

function Comment() {
  return (
    <div></div>
  )
}