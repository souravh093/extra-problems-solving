function isBestFriend(friend1, friend2) {
  if (friend1.name === friend2.friend && friend2.name === friend1.friend) {
    return true;
  } else {
    return false;
  }
}

const getBestFriend = isBestFriend(
  { name: "abul", friend: "kabul" },
  { name: "kabul", friend: "sabul" }
);

console.log(getBestFriend);
